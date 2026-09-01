import Image from "next/image";
import { WEBINAR } from "@/lib/webinar-config";

const FOOTER_LINKS = [
  {
    heading: "Webinar",
    links: [
      { label: "What You'll Learn", href: "/#learn" },
      { label: "Who It's For", href: "/#audience" },
      { label: "Why It Matters", href: "/#why" },
    ],
  },
  {
    heading: "Get Started",
    links: [{ label: "Reserve Your Free Seat", href: "/#register" }],
  },
  {
    heading: "Support",
    links: [
      { label: WEBINAR.supportEmail, href: `mailto:${WEBINAR.supportEmail}` },
      { label: WEBINAR.supportPhone, href: `tel:${WEBINAR.supportPhone}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-light">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="T2Upgrade"
              width={731}
              height={341}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Do Not Just Get a Job. Be Ready to Perform When You Get One.
              Practical office-ready skills for freshers and early-career
              professionals.
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="font-display text-sm font-bold uppercase tracking-wide">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-light">
          Disclaimer: This webinar is an educational session focused on
          practical workplace skills. It does not guarantee employment,
          promotion, or any specific career outcome.
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-muted sm:flex-row">
          <p>&copy; 2025 T2Upgrade. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ink">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
