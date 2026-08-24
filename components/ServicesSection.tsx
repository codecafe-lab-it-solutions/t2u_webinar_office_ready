import { ShapeCheck, ShapeHexagon, ShapeTriangle } from "./shapes";

const PAIN_POINTS = [
  "You have a degree but are unsure whether you are actually ready for the workplace.",
  "You feel nervous about interviews, presentations, meetings, or professional communication.",
  "You know basic computer skills but want to become more productive at work.",
  "You are not confident writing professional emails or communicating with managers and colleagues.",
  "You want to understand workplace etiquette and how professionals are expected to behave.",
  "You are a fresher and want to reduce the gap between academic knowledge and practical workplace expectations.",
];

export default function ServicesSection() {
  return (
    <section className="mx-4 my-8 rounded-4xl bg-ink py-16 text-cream sm:mx-6 sm:my-12 lg:mx-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-light">
          A Quick Check
        </p>
        <h2 className="relative mt-4 text-center font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
          <ShapeTriangle className="absolute -left-2 top-0 hidden h-6 w-6 -rotate-12 text-purple sm:block" />
          Does This Sound Like You?
          <ShapeHexagon className="absolute -right-2 bottom-0 hidden h-6 w-6 text-coral sm:block" />
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-white p-6 text-ink transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow">
                <ShapeCheck className="h-5 w-5 text-ink" />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted">{point}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-display text-lg font-bold">
          If these situations sound familiar, this webinar is designed for you.
        </p>
      </div>
    </section>
  );
}
