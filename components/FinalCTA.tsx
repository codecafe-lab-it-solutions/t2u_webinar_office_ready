import Button from "./Button";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center md:px-10 lg:px-20 lg:py-24">
      <h2 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
        Your First Job Should Be the Beginning of Your Growth — Not the
        Beginning of Your Confusion.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
        Don&rsquo;t wait until your first day at work to learn how the
        workplace works. Start preparing today.
      </p>
      <p className="font-hi mx-auto mt-2 max-w-xl text-base font-medium text-ink" lang="hi">
        तैयारी आज से शुरू कीजिए, पहले दिन से नहीं।
      </p>

      <a href="#register" className="mt-8 inline-block">
        <Button variant="yellow" size="lg">
          🚀 Reserve My Free Seat
        </Button>
      </a>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
        Free Registration &middot; Live Webinar &middot; Beginner Friendly
      </p>
    </section>
  );
}
