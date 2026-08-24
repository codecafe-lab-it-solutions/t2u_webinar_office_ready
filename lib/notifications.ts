import type { Lead } from "./leads";
import { sendWebinarConfirmationEmail } from "./email";

// Email is wired to real SMTP (see lib/email.ts). WhatsApp has no provider
// configured yet — swap in WhatsApp Cloud API/Twilio here when available.

export async function sendConfirmationEmail(lead: Lead): Promise<void> {
  await sendWebinarConfirmationEmail(lead);
}

export async function sendWhatsAppConfirmation(lead: Lead): Promise<void> {
  console.log(`[stub] Would send WhatsApp confirmation to ${lead.whatsapp} for ${lead.registrationId}`);
}
