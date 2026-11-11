import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_DURATION_SECONDS,
  createAdminSessionToken,
  isAdminAuthConfigured,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const password =
    "password" in body && typeof body.password === "string" ? body.password : "";

  if (!isAdminAuthConfigured()) {
    console.error("Admin access is not configured");
    return NextResponse.json(
      {
        error:
          "Admin access is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET in .env.local, then restart the app.",
      },
      { status: 503 },
    );
  }

  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ error: "Incorrect admin password." }, { status: 401 });
  }

  const token = createAdminSessionToken();
  if (!token) {
    console.error("Could not create an admin session");
    return NextResponse.json({ error: "Could not start an admin session." }, { status: 503 });
  }

  const response = NextResponse.json({ message: "Signed in." });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_DURATION_SECONDS,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ message: "Signed out." });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}
