import { isAdminRequest } from "./_adminAuth.js";

const BAND_ID = /^[A-Za-z0-9-]{3,24}$/;

function clip(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

function personFromRow(row, withPhoto) {
  const person = {
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
    latitude: row.latitude == null ? null : Number(row.latitude),
    longitude: row.longitude == null ? null : Number(row.longitude),
    history: parseList(row.history),
    medications: parseList(row.medications),
    allergies: parseList(row.allergies),
    homeAddress: row.home_address || "",
    emergencyContacts: parseContacts(row.emergency_contacts),
    updatedAt: row.updated_at,
  };
  if (withPhoto) person.photo = row.photo || "";
  return person;
}

function parseList(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map((item) => String(item)).slice(0, 6) : [];
  } catch {
    return [];
  }
}

function parseContacts(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return contactsOrEmpty(parsed);
  } catch {
    return [];
  }
}

function contactsOrEmpty(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 3).map((item) => ({
    name: clip(item && item.name, 80),
    relationship: clip(item && item.relationship, 40),
    phone: clip(item && item.phone, 40),
  })).filter((item) => item.name || item.relationship || item.phone);
}

function numberOrNull(value) {
  if (value == null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
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
    latitude: numberOrNull(body.latitude),
    longitude: numberOrNull(body.longitude),
    history: listOrEmpty(body.history),
    medications: listOrEmpty(body.medications),
    allergies: listOrEmpty(body.allergies),
    homeAddress: clip(body.homeAddress, 160),
    emergencyContacts: contactsOrEmpty(body.emergencyContacts),
    photo: photoOrEmpty(body.photo),
    updatedAt: new Date().toISOString(),
  };
  if (!BAND_ID.test(person.bandId) || !person.name || !person.status) return null;
  if (person.latitude == null || person.longitude == null || person.latitude < -90 || person.latitude > 90 || person.longitude < -180 || person.longitude > 180) {
    person.latitude = null;
    person.longitude = null;
  }
  return person;
}

function photoOrEmpty(value) {
  const text = String(value ?? "");
  if (!text.startsWith("data:image/jpeg;base64,")) return "";
  return text.length <= 180000 ? text : "";
}

function listOrEmpty(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim().slice(0, 140)).filter(Boolean).slice(0, 6);
}

function denied() {
  return Response.json({ error: "Unauthorized." }, { status: 401 });
}

export async function onRequest({ request, env }) {
  if (!env.DB) {
    return Response.json({ error: "The shared registry is not connected yet." }, { status: 503 });
  }

  if (request.method === "GET") {
    const requested = clip(new URL(request.url).searchParams.get("bandId"), 24).toUpperCase();
    if (requested) {
      if (!BAND_ID.test(requested)) {
        return Response.json({ error: "Unknown bracelet." }, { status: 400 });
      }
      const row = await env.DB.prepare("SELECT * FROM people WHERE band_id = ?").bind(requested).first();
      if (!row) return Response.json({ person: null }, { status: 404 });
      return Response.json({ person: personFromRow(row, true) });
    }
    if (!(await isAdminRequest(request, env))) return denied();
    const rows = await env.DB.prepare(
      "SELECT * FROM people ORDER BY updated_at DESC LIMIT 500"
    ).all();
    return Response.json({ people: (rows.results || []).map((row) => personFromRow(row)) });
  }

  if (request.method === "POST") {
    if (!(await isAdminRequest(request, env))) return denied();
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON." }, { status: 400 });
    }
    const person = readPerson(body);
    if (!person) {
      return Response.json({ error: "Band code, name, and status are required." }, { status: 400 });
    }
    await env.DB.prepare(
      `INSERT INTO people (
        band_id, name, sex, age, ethnicity, eye_color, height, weight, blood_type, status, shelter, area,
        latitude, longitude, history, medications, allergies, photo, home_address, emergency_contacts, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        latitude = excluded.latitude,
        longitude = excluded.longitude,
        history = excluded.history,
        medications = excluded.medications,
        allergies = excluded.allergies,
        photo = excluded.photo,
        home_address = excluded.home_address,
        emergency_contacts = excluded.emergency_contacts,
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
      person.latitude,
      person.longitude,
      JSON.stringify(person.history),
      JSON.stringify(person.medications),
      JSON.stringify(person.allergies),
      person.photo,
      person.homeAddress,
      JSON.stringify(person.emergencyContacts),
      person.updatedAt
    ).run();
    return Response.json({ person });
  }

  return new Response("Method not allowed", { status: 405 });
}
