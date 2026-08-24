import { ShapeCheck } from "./shapes";

const BONUSES = [
  { title: "Office-Ready Skills Checklist", conditional: false },
  { title: "Professional Email Templates", conditional: false },
  { title: "Workplace Communication Cheat Sheet", conditional: false },
  { title: "Interview Preparation Checklist", conditional: false },
  { title: "Office Productivity Starter Guide", conditional: false },
  { title: "Webinar Recording", conditional: true },
  { title: "Certificate of Participation", conditional: true },
];

export default function Bonuses() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-20 lg:py-24">
      <h2 className="text-center font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
        Register Today and Get These Resources
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {BONUSES.map((bonus) => (
          <div
            key={bonus.title}
            className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-cream-light p-5"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow">
              <ShapeCheck className="h-3.5 w-3.5 text-ink" />
            </span>
            <div>
              <p className="text-sm font-semibold">{bonus.title}</p>
              {bonus.conditional && (
                <p className="mt-0.5 text-xs text-muted-light">If provided for this session</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
