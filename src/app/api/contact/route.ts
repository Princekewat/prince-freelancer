import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  const contact = {
    name: typeof name === "string" ? name.trim() : "",
    email: typeof email === "string" ? email.trim().toLowerCase() : "",
    message: typeof message === "string" ? message.trim() : "",
  };

  if (
    contact.name.length < 2 ||
    contact.name.length > 100 ||
    contact.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email) ||
    contact.message.length < 10 ||
    contact.message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Enter a valid name, email, and message." },
      { status: 400 },
    );
  }

  try {
    const client = await getMongoClient();
    const database = client.db(process.env.MONGODB_DB || "prince_portfolio");

    await database.collection("contacts").insertOne({
      ...contact,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Failed to save contact message", error);
    return NextResponse.json(
      { error: "Message could not be saved. Please try again later." },
      { status: 503 },
    );
  }
}