import type { Lead } from "./leads";

const T2U_API_BASE_URL = process.env.T2U_API_BASE_URL ?? "https://t2upgrade.com/api";

// Public endpoint, no auth. `source` must stay distinct from "landing_page"
// (that value is reserved for T2U's own site) so these leads are
// identifiable as coming from this webinar page inside the T2U CRM.
export async function submitLeadToT2U(lead: Lead): Promise<void> {
  const response = await fetch(`${T2U_API_BASE_URL}/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      full_name: lead.fullName,
      mobile: lead.mobile,
      email: lead.email || undefined,
      city: lead.city || undefined,
      referred_by: lead.referralCode || undefined,
      course_interest: "Office-Ready Skills Webinar",
      source: "t2upgrade_webinar_landing",
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`T2U leads API responded ${response.status}: ${body}`);
  }
}
