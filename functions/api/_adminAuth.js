const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

function bytesToB64url(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function b64urlToBytes(text) {
  const padded = String(text).replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const binary = atob(padded + pad);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function timingSafeEqual(a, b) {
  const length = Math.max(a.length, b.length, 1);
  let diff = a.length ^ b.length;
  for (let i = 0; i < length; i += 1) {
    diff |= (a[i] || 0) ^ (b[i] || 0);
  }
  return diff === 0;
}

async function hmac(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return new Uint8Array(sig);
}

export async function passwordMatches(secret, input) {
  const enc = new TextEncoder();
  const given = enc.encode(String(input ?? ""));
  const actual = enc.encode(typeof secret === "string" ? secret : "");
  const [left, right] = await Promise.all([
    crypto.subtle.digest("SHA-256", given),
    crypto.subtle.digest("SHA-256", actual),
  ]);
  const same = timingSafeEqual(new Uint8Array(left), new Uint8Array(right));
  return typeof secret === "string" && secret.length > 0 && same;
}

export async function issueAdminToken(secret) {
  const payload = bytesToB64url(new TextEncoder().encode(JSON.stringify({
    exp: Date.now() + TOKEN_TTL_MS,
  })));
  const sig = await hmac(secret, payload);
  return `${payload}.${bytesToB64url(sig)}`;
}

export async function verifyAdminToken(secret, token) {
  if (typeof secret !== "string" || !secret || typeof token !== "string") return false;
  if (token.length < 20 || token.length > 512) return false;
  const parts = token.split(".");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return false;
  let payload;
  let actual;
  try {
    payload = JSON.parse(new TextDecoder().decode(b64urlToBytes(parts[0])));
    actual = b64urlToBytes(parts[1]);
  } catch {
    return false;
  }
  const expected = await hmac(secret, parts[0]);
  if (!timingSafeEqual(expected, actual)) return false;
  if (!payload || typeof payload.exp !== "number" || !Number.isFinite(payload.exp)) return false;
  if (payload.exp <= Date.now()) return false;
  if (payload.exp > Date.now() + TOKEN_TTL_MS + 60 * 1000) return false;
  return true;
}

export async function isAdminRequest(request, env) {
  const header = request.headers.get("Authorization") || "";
  const match = /^Bearer\s+(\S+)$/i.exec(header.trim());
  if (!match) return false;
  return verifyAdminToken(env.ADMIN_PASSWORD, match[1]);
}
