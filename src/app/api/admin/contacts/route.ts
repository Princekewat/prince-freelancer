import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, isValidAdminSession } from "@/lib/admin-auth";
import { getMongoClient } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const token = request.headers
    .get("cookie")
    ?.split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${ADMIN_SESSION_COOKIE}=`))
    ?.slice(ADMIN_SESSION_COOKIE.length + 1);

  if (!isValidAdminSession(token)) {
    return NextResponse.json({ error: "Please sign in to view messages." }, { status: 401 });
  }

  try {
    const client = await getMongoClient();
    const database = client.db(process.env.MONGODB_DB || "prince_portfolio");
    const contacts = await database
      .collection("contacts")
      .find({}, { projection: { name: 1, email: 1, message: 1, createdAt: 1 } })
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({
      contacts: contacts.map(({ _id, ...contact }) => ({
        id: _id.toString(),
        ...contact,
        createdAt:
          contact.createdAt instanceof Date
            ? contact.createdAt.toISOString()
            : String(contact.createdAt),
      })),
    });
  } catch (error) {
    console.error("Failed to load admin contact messages", error);
    return NextResponse.json(
      { error: "Messages could not be loaded. Check the MongoDB connection." },
      { status: 503 },
    );
  }
}
