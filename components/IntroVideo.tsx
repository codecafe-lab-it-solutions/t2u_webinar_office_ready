"use client";

import { useState } from "react";
import { ShapePlay } from "./shapes";

export default function IntroVideo() {
  const [clicked, setClicked] = useState(false);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 lg:px-20 lg:py-24">
      <h2 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
        Why Is This Webinar Important for Your Career?
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
        Getting your first job is an important milestone. But your
        professional journey doesn&rsquo;t become easier simply because you
        got selected. Once you enter a workplace, you are expected to
        communicate, collaborate, manage your work, meet deadlines and solve
        problems. This webinar is designed to help you understand those
        expectations and build the practical skills needed to feel more
        confident at work.
      </p>

      <button
        type="button"
        onClick={() => setClicked(true)}
        aria-label="Play introduction video"
        className="group relative mx-auto mt-10 block aspect-video w-full max-w-3xl overflow-hidden rounded-3xl border border-ink/10 bg-ink"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow transition-transform duration-200 group-hover:scale-110">
            <ShapePlay className="ml-1 h-6 w-6 text-ink" />
          </span>
        </div>
        {clicked && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink/90 px-6 text-sm font-medium text-cream">
            Video coming soon — check back closer to the webinar date.
          </div>
        )}
      </button>
    </section>
  );
}
