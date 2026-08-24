"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { buildGoogleCalendarUrl } from "@/lib/calendar";
import { WEBINAR } from "@/lib/webinar-config";

export default function ThankYouContent() {
  const params = useSearchParams();
  const [copied, setCopied] = useState(false);

  const registrationId = params.get("id") ?? "—";
  const name = params.get("name") ?? "there";
  const isExisting = params.get("existing") === "1";

  const calendarUrl =
    WEBINAR.startISO && WEBINAR.endISO
      ? buildGoogleCalendarUrl({
          title: WEBINAR.name,
          startISO: WEBINAR.startISO,
          endISO: WEBINAR.endISO,
          details: `Registration ID: ${registrationId}`,
        })
      : null;

  async function handleShare() {
    const shareData = {
      title: WEBINAR.name,
      text: `I just registered for the ${WEBINAR.name}. Join me!`,
      url: typeof window !== "undefined" ? window.location.origin : "",
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled — fall through to copy
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-4xl">🎉</p>
      <h1 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
        {isExisting ? `You're Already Registered, ${name}!` : `You're Registered, ${name}!`}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Get ready to become office-ready. We&rsquo;ve saved your seat for
        the {WEBINAR.name}.
      </p>

      <div className="mt-8 w-full rounded-3xl border border-ink/10 bg-cream-light p-8 text-left">
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Registration ID</dt>
            <dd className="mt-1 font-display font-bold">{registrationId}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Webinar</dt>
            <dd className="mt-1 font-semibold">{WEBINAR.name}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Date</dt>
            <dd className="mt-1 font-semibold">{WEBINAR.date}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Time</dt>
            <dd className="mt-1 font-semibold">{WEBINAR.time}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Duration</dt>
            <dd className="mt-1 font-semibold">{WEBINAR.duration}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Mode</dt>
            <dd className="mt-1 font-semibold">{WEBINAR.mode}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
        {calendarUrl ? (
          <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="dark" className="w-full sm:w-auto">
              Add to Google Calendar
            </Button>
          </a>
        ) : (
          <Button variant="dark" className="w-full sm:w-auto" disabled>
            Calendar Link — Date Coming Soon
          </Button>
        )}

        {WEBINAR.whatsappCommunityUrl ? (
          <a href={WEBINAR.whatsappCommunityUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full sm:w-auto">
              Join WhatsApp Community
            </Button>
          </a>
        ) : null}

        <Button variant="outline" className="w-full sm:w-auto" onClick={handleShare}>
          {copied ? "Link Copied!" : "Share With a Friend"}
        </Button>
      </div>

      <div className="mt-10 space-y-2 text-sm text-muted">
        <p>Join 10 minutes before the webinar.</p>
        <p>Keep a notebook and pen ready.</p>
        <p>Use earphones/headphones for a better experience.</p>
      </div>

      <Link href="/" className="mt-8 text-sm font-semibold underline underline-offset-2">
        Back to Home
      </Link>
    </section>
  );
}
