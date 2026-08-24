import { NextRequest, NextResponse } from "next/server";
import { findDuplicate, generateRegistrationId, saveLead } from "@/lib/leads";
import { sendConfirmationEmail, sendWhatsAppConfirmation } from "@/lib/notifications";
import { submitLeadToT2U } from "@/lib/t2u-api";
import { WEBINAR } from "@/lib/webinar-config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^[6-9]\d{9}$/;

export async function POST(request: NextRequest) {
  const body = await request.json();

  const fullName = String(body.fullName ?? "").trim();
  const mobile = String(body.mobile ?? "").replace(/\D/g, "");
  const whatsapp = String(body.whatsapp ?? mobile).replace(/\D/g, "");
  const email = String(body.email ?? "").trim();
  const city = String(body.city ?? "").trim();
  const profession = String(body.profession ?? "").trim();
  const learningGoal = body.learningGoal ? String(body.learningGoal).trim() : null;
  const consent = Boolean(body.consent);

  if (!fullName || fullName.length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (!MOBILE_RE.test(mobile)) {
    return NextResponse.json({ error: "Please enter a valid 10-digit mobile number." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!city) {
    return NextResponse.json({ error: "Please enter your city." }, { status: 400 });
  }
  if (!profession) {
    return NextResponse.json({ error: "Please select your profession." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Please accept the consent checkbox to continue." }, { status: 400 });
  }

  const duplicate = findDuplicate(email, mobile);
  if (duplicate) {
    return NextResponse.json(
      {
        error: "You're already registered for this webinar.",
        registrationId: duplicate.registrationId,
        fullName: duplicate.fullName,
        duplicate: true,
      },
      { status: 409 }
    );
  }

  const registrationId = generateRegistrationId();
  const lead = {
    registrationId,
    fullName,
    mobile,
    whatsapp,
    email,
    city,
    profession,
    learningGoal,
    webinarName: WEBINAR.name,
    registrationDate: new Date().toISOString(),
    utmSource: body.utmSource ? String(body.utmSource) : null,
    utmMedium: body.utmMedium ? String(body.utmMedium) : null,
    utmCampaign: body.utmCampaign ? String(body.utmCampaign) : null,
    referralCode: body.referralCode ? String(body.referralCode) : null,
    consentAt: new Date().toISOString(),
    attendanceStatus: "pending" as const,
    followUpStatus: "pending" as const,
  };

  saveLead(lead);

  // Best-effort: the local registration above is the source of truth for
  // this visitor's thank-you page. A flaky SMTP server, WhatsApp provider,
  // or the external T2U CRM should never fail a registration that already
  // succeeded locally — log and move on instead of throwing.
  const results = await Promise.allSettled([
    sendConfirmationEmail(lead),
    sendWhatsAppConfirmation(lead),
    submitLeadToT2U(lead),
  ]);
  const [emailResult, whatsappResult, t2uResult] = results;
  if (emailResult.status === "rejected") {
    console.error("Confirmation email failed:", emailResult.reason);
  }
  if (whatsappResult.status === "rejected") {
    console.error("WhatsApp confirmation failed:", whatsappResult.reason);
  }
  if (t2uResult.status === "rejected") {
    console.error("T2U CRM lead submission failed:", t2uResult.reason);
  }

  return NextResponse.json({ registrationId, fullName }, { status: 201 });
}
