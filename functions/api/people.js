const BAND_ID = /^[A-Za-z0-9-]{3,24}$/;

function clip(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

function personFromRow(row) {
  return {
    bandId: row.band_id,
    name: row.name,
    sex: row.sex || "",
    age: row.age || "",
    ethnicity: row.ethnicity || "",
    eyeColor: row.eye_color || "",
    height: row.height || "",
    weight: row.weight || "",
    bloodType: row.blood_type || "",
    status: row.status,
    shelter: row.shelter || "",
    area: row.area || "",
    updatedAt: row.updated_at,
  };
}

function readPerson(body) {
  const status = body.status === "found" ? "found" : body.status === "missing" ? "missing" : "";
  const person = {
    bandId: clip(body.bandId, 24).toUpperCase(),
    name: clip(body.name, 80),
    sex: clip(body.sex, 24),
    age: clip(body.age, 24),
    ethnicity: clip(body.ethnicity, 80),
    eyeColor: clip(body.eyeColor, 40),
    height: clip(body.height, 40),
    weight: clip(body.weight, 40),
    bloodType: clip(body.bloodType, 16),
    status,
    shelter: clip(body.shelter, 120),
    area: clip(body.area, 80),
    updatedAt: new Date().toISOString(),
  };
  if (!BAND_ID.test(person.bandId) || !person.name || !person.status) return null;
  if (person.status === "found" && !person.shelter) return null;
  return person;
}

export async function onRequest({ request, env }) {
  if (!env.DB) {
    return Response.json({ error: "The shared registry is not connected yet." }, { status: 503 });
  }

  if (request.method === "GET") {
    const rows = await env.DB.prepare(
      "SELECT * FROM people ORDER BY updated_at DESC LIMIT 500"
    ).all();
    return Response.json({ people: (rows.results || []).map(personFromRow) });
  }

  if (request.method === "POST") {
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON." }, { status: 400 });
    }
    const person = readPerson(body);
    if (!person) {
      return Response.json({ error: "Band code, name, and status are required. A shelter is required when checking someone in." }, { status: 400 });
    }
    await env.DB.prepare(
      `INSERT INTO people (
        band_id, name, sex, age, ethnicity, eye_color, height, weight, blood_type, status, shelter, area, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(band_id) DO UPDATE SET
        name = excluded.name,
        sex = excluded.sex,
        age = excluded.age,
        ethnicity = excluded.ethnicity,
        eye_color = excluded.eye_color,
        height = excluded.height,
        weight = excluded.weight,
        blood_type = excluded.blood_type,
        status = excluded.status,
        shelter = excluded.shelter,
        area = excluded.area,
        updated_at = excluded.updated_at`
    ).bind(
      person.bandId,
      person.name,
      person.sex,
      person.age,
      person.ethnicity,
      person.eyeColor,
      person.height,
      person.weight,
      person.bloodType,
      person.status,
      person.shelter,
      person.area,
      person.updatedAt
    ).run();
    return Response.json({ person });
  }

  return new Response("Method not allowed", { status: 405 });
}
