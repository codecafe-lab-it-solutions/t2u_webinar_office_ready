import nodemailer from "nodemailer";
import type { Lead } from "./leads";
import { WEBINAR } from "./webinar-config";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderConfirmationHtml(lead: Lead): string {
  const rows: [string, string][] = [
    ["Registration ID", lead.registrationId],
    ["Date", WEBINAR.date],
    ["Time", WEBINAR.time],
    ["Duration", WEBINAR.duration],
    ["Mode", WEBINAR.mode],
  ];

  return `
  <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; color: #141414;">
    <h1 style="font-size: 20px;">You're Registered, ${escapeHtml(lead.fullName)}!</h1>
    <p>Thanks for reserving your seat for the <strong>${escapeHtml(WEBINAR.name)}</strong>. Here are your registration details:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding: 6px 0; color: #6b6b6b;">${escapeHtml(label)}</td><td style="padding: 6px 0; font-weight: bold;">${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
    <p>Join 10 minutes before the webinar, keep a notebook and pen ready, and use earphones/headphones for a better experience.</p>
    <p style="margin-top: 24px; color: #6b6b6b; font-size: 12px;">If you did not request this registration, you can safely ignore this email.</p>
  </div>`;
}

function renderConfirmationText(lead: Lead): string {
  return [
    `You're Registered, ${lead.fullName}!`,
    "",
    `Thanks for reserving your seat for the ${WEBINAR.name}.`,
    "",
    `Registration ID: ${lead.registrationId}`,
    `Date: ${WEBINAR.date}`,
    `Time: ${WEBINAR.time}`,
    `Duration: ${WEBINAR.duration}`,
    `Mode: ${WEBINAR.mode}`,
    "",
    "Join 10 minutes before the webinar, keep a notebook and pen ready, and use earphones/headphones for a better experience.",
  ].join("\n");
}

export async function sendWebinarConfirmationEmail(lead: Lead): Promise<void> {
  const fromName = process.env.SMTP_FROM_NAME ?? "T2Upgrade";
  const fromEmail = process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER;
  const replyTo = process.env.SMTP_REPLY_TO ?? fromEmail;

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: lead.email,
    replyTo,
    subject: `You're Registered: ${WEBINAR.name}`,
    html: renderConfirmationHtml(lead),
    text: renderConfirmationText(lead),
  });
}
