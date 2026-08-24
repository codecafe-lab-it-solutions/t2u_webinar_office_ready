export default function TrainerIntro() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 lg:px-20 lg:py-24">
      <h2 className="text-center font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
        Meet Your Trainer
      </h2>

      <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-dashed border-ink/30 bg-cream-light p-8 text-center sm:flex-row sm:items-start sm:text-left">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-white font-display text-2xl font-extrabold text-muted">
          ?
        </div>
        <div>
          <p className="font-display text-xl font-bold">[Trainer Name]</p>
          <p className="mt-1 text-sm font-medium text-muted">
            [Designation] · [Company / Organization]
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            [Add trainer&rsquo;s professional experience, relevant
            achievements, and expertise related to workplace and career
            readiness skills.]
          </p>
          <p className="mt-4 text-xs text-muted-light">
            Trainer bio pending — social links and photo to be added.
          </p>
        </div>
      </div>
    </section>
  );
}
