const UA = "AID-BAND/1.0 (https://aid-band.pages.dev)";

function placeFrom(address) {
  if (!address) return "";
  return address.city || address.town || address.village || address.municipality || address.city_district || address.county || address.state || "";
}

function shelterName(item) {
  if (item.name) return String(item.name).slice(0, 80);
  const street = String(item.display_name || "").split(",")[0].trim();
  return (street || "Shelter").slice(0, 80);
}

export async function onRequest({ request }) {
  const url = new URL(request.url);
  const lat = Number(url.searchParams.get("lat"));
  const lng = Number(url.searchParams.get("lng"));
  if (!Number.isFinite(lat) || lat < -90 || lat > 90 || !Number.isFinite(lng) || lng < -180 || lng > 180) {
    return Response.json({ error: "A location is required." }, { status: 400 });
  }

  const cacheKey = new Request(url.toString(), { method: "GET" });
  try {
    const hit = await caches.default.match(cacheKey);
    if (hit) return hit;
  } catch {
    /* serve a fresh lookup */
  }

  const headers = { "User-Agent": UA, Accept: "application/json" };
  let place = "";
  let shelters = [];
  try {
    const reverse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=12`,
      { headers }
    );
    if (reverse.ok) {
      const data = await reverse.json();
      place = placeFrom(data.address);
    }
  } catch {
    place = "";
  }

  await new Promise((resolve) => setTimeout(resolve, 1100));

  const span = 0.05;
  const viewbox = `${lng - span},${lat + span},${lng + span},${lat - span}`;
  try {
    const search = await fetch(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&amenity=shelter&limit=8&viewbox=${encodeURIComponent(viewbox)}&bounded=1`,
      { headers }
    );
    if (search.ok) {
      const rows = await search.json();
      shelters = (Array.isArray(rows) ? rows : []).map((item) => ({
        name: shelterName(item),
        lat: Number(item.lat),
        lng: Number(item.lon),
      })).filter((item) => Number.isFinite(item.lat) && Number.isFinite(item.lng));
    }
  } catch {
    shelters = [];
  }

  const response = Response.json(
    { place, shelters },
    { headers: { "Cache-Control": "public, max-age=86400" } }
  );
  try {
    await caches.default.put(cacheKey, response.clone());
  } catch {
    /* the response is still returned */
  }
  return response;
}
