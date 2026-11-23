export async function onRequestGet({ env }) {
  let shared = false;
  if (env.DB) {
    try {
      await env.DB.prepare("SELECT 1 AS ok").first();
      shared = true;
    } catch {
      shared = false;
    }
  }
  return Response.json({ ok: true, shared });
}
