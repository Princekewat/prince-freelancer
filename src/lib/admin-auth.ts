import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "admin_session";
export const ADMIN_SESSION_DURATION_SECONDS = 60 * 60 * 8;

function getAdminCredentials() {
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!password || password.length < 12 || !secret || secret.length < 32) {
    return null;
  }

  return { password, secret };
}

export function isAdminAuthConfigured() {
  return getAdminCredentials() !== null;
}

export function verifyAdminPassword(candidate: string) {
  const credentials = getAdminCredentials();
  if (!credentials || candidate.length > 1024) return false;

  const expected = Buffer.from(credentials.password);
  const actual = Buffer.from(candidate);

  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

export function createAdminSessionToken() {
  const credentials = getAdminCredentials();
  if (!credentials) return null;

  const expiresAt = Math.floor(Date.now() / 1000) + ADMIN_SESSION_DURATION_SECONDS;
  const signature = createHmac("sha256", credentials.secret)
    .update(`admin-session:${expiresAt}`)
    .digest("hex");

  return `${expiresAt}.${signature}`;
}

export function isValidAdminSession(token: string | undefined) {
  const credentials = getAdminCredentials();
  if (!credentials || !token) return false;

  const [expiresAtValue, signature, ...rest] = token.split(".");
  if (!expiresAtValue || !signature || rest.length > 0) return false;

  const expiresAt = Number(expiresAtValue);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Math.floor(Date.now() / 1000)) {
    return false;
  }

  const expected = createHmac("sha256", credentials.secret)
    .update(`admin-session:${expiresAt}`)
    .digest();

  let actual: Buffer;
  try {
    actual = Buffer.from(signature, "hex");
  } catch {
    return false;
  }

  return actual.length === expected.length && timingSafeEqual(actual, expected);
}
