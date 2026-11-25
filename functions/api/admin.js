import { issueAdminToken, passwordMatches } from "./_adminAuth.js";

function denied() {
  return Response.json({ error: "Unauthorized." }, { status: 401 });
}

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return denied();
  }
  const ok = await passwordMatches(env.ADMIN_PASSWORD, body && body.password);
  if (!ok) return denied();
  const token = await issueAdminToken(env.ADMIN_PASSWORD);
  return Response.json({ ok: true, token });
}
