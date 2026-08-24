import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "registrations.json");

export type Lead = {
  registrationId: string;
  fullName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  city: string;
  profession: string;
  learningGoal: string | null;
  webinarName: string;
  registrationDate: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  referralCode: string | null;
  consentAt: string;
  attendanceStatus: "pending" | "attended" | "absent";
  followUpStatus: "pending" | "contacted" | "closed";
};

function ensureStore(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8");
  }
}

export function readLeads(): Lead[] {
  ensureStore();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  try {
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

export function findDuplicate(email: string, mobile: string): Lead | undefined {
  const leads = readLeads();
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedMobile = mobile.replace(/\D/g, "");
  return leads.find(
    (lead) =>
      lead.email.trim().toLowerCase() === normalizedEmail ||
      lead.mobile.replace(/\D/g, "") === normalizedMobile
  );
}

export function saveLead(lead: Lead): void {
  const leads = readLeads();
  leads.push(lead);
  fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export function generateRegistrationId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `T2U-${timestamp}-${random}`;
}

export function getRegisteredCount(): number {
  return readLeads().length;
}
