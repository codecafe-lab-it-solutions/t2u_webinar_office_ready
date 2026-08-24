import { NextResponse } from "next/server";
import { getRegisteredCount } from "@/lib/leads";
import { MAX_SEATS } from "@/lib/webinar-config";

export async function GET() {
  const total = getRegisteredCount();
  const remaining = Math.max(MAX_SEATS - total, 0);
  return NextResponse.json({ total, remaining, maxSeats: MAX_SEATS });
}
