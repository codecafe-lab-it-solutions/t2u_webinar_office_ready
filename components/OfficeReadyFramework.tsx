import { ShapeHexagon, ShapeStar } from "./shapes";

const STEPS = [
  {
    title: "Communicate",
    description: "Professional emails, messaging, meetings and conversations.",
  },
  {
    title: "Organize",
    description: "Tasks, deadlines, documents and priorities.",
  },
  {
    title: "Execute",
    description: "Office tools, spreadsheets, presentations and everyday work.",
  },
  {
    title: "Collaborate",
    description: "Teamwork, managers, clients and workplace etiquette.",
  },
  {
    title: "Improve",
    description: "Feedback, problem-solving, productivity and continuous learning.",
  },
];

export default function OfficeReadyFramework() {
  return (
    <section id="learn" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-20 lg:py-24">
      <div className="text-center">
        <h2 className="relative inline-block font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
          <ShapeHexagon className="absolute -left-9 top-1 h-6 w-6 text-coral" />
          How to Become Office-Ready
          <ShapeStar className="absolute -right-9 -top-2 h-6 w-6 text-purple" />
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          A simple, practical framework you can remember and apply from day one.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((step, index) => (
          <div
            key={step.title}
            className="rounded-3xl border border-ink/10 bg-cream-light p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="font-display text-2xl font-extrabold text-yellow">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-display text-base font-bold uppercase">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
