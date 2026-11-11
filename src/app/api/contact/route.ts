import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
  const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

  if (
    !SMTP_HOST ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !SMTP_FROM ||
    !Number.isInteger(SMTP_PORT) ||
    SMTP_PORT < 1 ||
    SMTP_PORT > 65535
  ) {
    console.error("Contact email delivery is not configured");
    return NextResponse.json(
      { error: "Email delivery is unavailable. Please email princerewa2002@gmail.com directly." },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: SMTP_FROM,
      to: "princerewa2002@gmail.com",
      replyTo: contact.email,
      subject: `New portfolio inquiry from ${contact.name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
    });

    return NextResponse.json({
      message: "Thanks for your message! I'll connect with you soon.",
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again later." },
      { status: 503 },
    );
  }
}