import { ShapeHexagon, ShapePlay, ShapeTriangle } from "./shapes";

const DEMOS = [
  "Writing a professional email to a manager.",
  "How to communicate during a team meeting.",
  "How to structure a professional presentation.",
  "How to organize tasks and deadlines.",
  "How AI can responsibly support everyday office productivity.",
  "How to handle a workplace communication problem.",
];

export default function LiveDemonstration() {
  return (
    <section className="mx-4 my-8 rounded-4xl bg-ink py-16 text-cream sm:mx-6 sm:my-12 lg:mx-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-20">
        <h2 className="relative mt-4 inline-block font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
          <ShapeTriangle className="absolute -left-9 -top-2 hidden h-6 w-6 -rotate-12 text-purple sm:block" />
          See How Workplace Situations Actually Work
          <ShapeHexagon className="absolute -right-9 bottom-0 hidden h-6 w-6 text-coral sm:block" />
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-light">
          Don&rsquo;t just learn the theory. See how workplace skills are
          applied in real situations.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEMOS.map((demo) => (
            <div
              key={demo}
              className="rounded-2xl border border-white/10 bg-white p-6 text-left text-ink transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral">
                <ShapePlay className="h-4 w-4 text-white" />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted">{demo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
