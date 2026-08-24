"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const PROFESSIONS = [
  "Student",
  "Fresher",
  "Job Seeker",
  "Working Professional",
  "Internship Seeker",
  "Career Starter",
  "Other",
];

const LEARNING_GOALS = [
  "Communication",
  "Interview Confidence",
  "Office Productivity",
  "Professional Emails",
  "Workplace Etiquette",
  "Teamwork",
  "Time Management",
  "Presentation Skills",
  "Career Growth",
  "Other",
];

export default function RegistrationForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [utm] = useState(() => {
    if (typeof window === "undefined") {
      return { utmSource: null, utmMedium: null, utmCampaign: null, referralCode: null };
    }
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
      referralCode: params.get("ref"),
    };
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: form.get("fullName"),
      mobile: form.get("mobile"),
      whatsapp: form.get("sameAsMobile") ? form.get("mobile") : form.get("whatsapp"),
      email: form.get("email"),
      city: form.get("city"),
      profession: form.get("profession"),
      learningGoal: form.get("learningGoal") || null,
      consent: form.get("consent") === "on",
      ...utm,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.duplicate) {
          router.push(
            `/thank-you?id=${encodeURIComponent(data.registrationId)}&name=${encodeURIComponent(data.fullName)}&existing=1`
          );
          return;
        }
        setError(data.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      router.push(
        `/thank-you?id=${encodeURIComponent(data.registrationId)}&name=${encodeURIComponent(data.fullName)}`
      );
    } catch {
      setError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-12 max-w-2xl rounded-3xl border border-ink/10 bg-cream-light p-6 text-left text-ink sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Full Name
          <input
            name="fullName"
            required
            minLength={2}
            type="text"
            placeholder="Your full name"
            className="rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Mobile Number
          <input
            name="mobile"
            required
            type="tel"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            title="Enter a valid 10-digit mobile number"
            placeholder="10-digit mobile number"
            className="rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium">
          WhatsApp Number
          <input
            name="whatsapp"
            type="tel"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            placeholder="10-digit WhatsApp number"
            className="rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink disabled:opacity-40"
          />
          <span className="mt-1 flex items-center gap-2 text-xs font-normal text-muted">
            <input type="checkbox" name="sameAsMobile" defaultChecked className="h-3.5 w-3.5" />
            Same as mobile number
          </span>
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Email Address
          <input
            name="email"
            required
            type="email"
            placeholder="you@example.com"
            className="rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium">
          City
          <input
            name="city"
            required
            type="text"
            placeholder="Your city"
            className="rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium">
          Profession
          <select
            name="profession"
            required
            defaultValue=""
            className="rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
          >
            <option value="" disabled>
              Select one
            </option>
            {PROFESSIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium sm:col-span-2">
          What do you most want to improve? (optional)
          <select
            name="learningGoal"
            defaultValue=""
            className="rounded-xl border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink"
          >
            <option value="">Prefer not to say</option>
            {LEARNING_GOALS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-muted">
        <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0" />
        I agree to receive webinar confirmation, reminders and related updates
        through WhatsApp, phone or email.
      </label>

      {error && (
        <p className="mt-4 rounded-lg bg-coral/10 px-4 py-3 text-sm text-coral">{error}</p>
      )}

      <Button
        type="submit"
        variant="yellow"
        size="lg"
        className="mt-6 w-full"
        disabled={submitting}
      >
        {submitting ? "Reserving Your Seat…" : "Reserve My Free Seat"}
      </Button>

      <p className="mt-4 text-center text-xs text-muted">
        By registering you agree to our Privacy Policy and Terms &amp; Conditions.
      </p>
    </form>
  );
}
