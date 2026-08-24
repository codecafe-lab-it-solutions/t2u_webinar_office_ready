const SKILL_GAPS = [
  "Communication",
  "Organization",
  "Professional Behaviour",
  "Presentations",
  "Spreadsheets",
  "Emails",
  "Teamwork",
  "Time Management",
  "Workplace Etiquette",
];

export default function TrustSection() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
          A Degree Can Help You Get an Opportunity. Workplace Skills Help
          You Perform.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted">
          A degree can help you qualify for an opportunity, but workplace
          skills help you perform after you get that opportunity. Many
          freshers are technically capable but struggle with
          communication, organization, professional behaviour,
          presentations, spreadsheets, emails, teamwork, and time
          management. This webinar focuses on those practical skills that
          make the transition from student to professional easier.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {SKILL_GAPS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-ink/15 bg-cream-light px-3 py-1.5 text-xs font-medium text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl font-bold leading-snug sm:text-2xl">
        &ldquo;Your first job should be the beginning of your professional
        growth, not the moment you start learning how the workplace
        works.&rdquo;
      </p>
      <p
        className="font-hi mx-auto mt-3 max-w-2xl text-center text-base font-medium text-muted"
        lang="hi"
      >
        आपकी पहली नौकरी आपके करियर की शुरुआत होनी चाहिए, उलझन की नहीं।
      </p>
    </section>
  );
}
