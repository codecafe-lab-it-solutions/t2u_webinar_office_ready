"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NAV_LINKS = [
  { label: "What You'll Learn", href: "/#learn" },
  { label: "Who It's For", href: "/#audience" },
  { label: "About", href: "/#why" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-20">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="T2Upgrade"
            width={731}
            height={341}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-yellow transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#register">
            <Button variant="yellow">Reserve My Free Seat</Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-ink/10 px-6 pb-6 pt-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-ink">
              {link.label}
            </Link>
          ))}
          <Link href="/#register">
            <Button variant="yellow" className="w-full">
              Reserve My Free Seat
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
