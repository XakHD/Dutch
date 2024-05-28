import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { POST } from "./auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(POST);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
    });
  }

  return NextResponse.json({ authenticated: !!session });
}
