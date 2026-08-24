"use client";

import { useEffect, useState } from "react";

export default function AnnouncementBar() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/register/meta")
      .then((res) => res.json())
      .then((data) => setRemaining(data.remaining))
      .catch(() => setRemaining(null));
  }, []);

  return (
    <div className="bg-ink px-4 py-2.5 text-center text-xs font-medium text-cream sm:text-sm">
      <span className="text-coral">●</span> Free Live Webinar
      {remaining !== null && remaining <= 40 && (
        <>
          {" "}
          &middot; Only <span className="text-yellow">{remaining} seats</span> left
        </>
      )}{" "}
      &middot; <span className="font-hi" lang="hi">सीमित सीटें उपलब्ध हैं</span> &middot;{" "}
      <a href="#register" className="underline underline-offset-2 hover:text-yellow">
        Reserve My Free Seat
      </a>
    </div>
  );
}
