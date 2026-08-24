export default function Testimonials() {
  return (
    <section className="mx-4 my-8 rounded-4xl bg-ink py-16 text-cream sm:mx-6 sm:my-12 lg:mx-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-20">
        <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
          What Participants Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-light">
          Genuine feedback from participants will appear here after future
          sessions.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((slot) => (
            <div
              key={slot}
              className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/20 p-8 text-muted-light"
            >
              <div className="h-12 w-12 rounded-full border border-white/20" />
              <p className="mt-4 text-sm">Testimonial coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
