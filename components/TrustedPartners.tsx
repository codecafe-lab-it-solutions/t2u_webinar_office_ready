import Button from "./Button";

const AUDIENCE = [
  "College Students Nearing Graduation",
  "Freshers / First-Time Job Seekers",
  "Internship Seekers",
  "Career Starters",
  "Early-Career Professionals",
];

export default function TrustedPartners() {
  return (
    <section id="audience" className="mx-4 my-8 rounded-4xl bg-ink py-16 text-cream sm:mx-6 sm:my-12 lg:mx-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-light">
          Is This For You
        </p>
        <h2 className="mt-4 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
          Who Should Attend?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-light">
          College students, freshers, job seekers, internship seekers,
          career starters, and professionals who want to strengthen their
          practical workplace skills.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-light">
          Whether you are preparing for your first job, looking for an
          internship, or already working and want to improve your
          professional skills, this webinar can help you understand
          practical workplace expectations.
        </p>
        <p className="font-hi mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-light" lang="hi">
          चाहे आप Student हों, Fresher हों, या Job में already हों — यह Webinar आपके लिए है।
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {AUDIENCE.map((group) => (
            <div
              key={group}
              className="rounded-xl border border-white/15 bg-white px-6 py-4 text-sm font-semibold text-ink"
            >
              {group}
            </div>
          ))}
        </div>

        <a href="#register" className="mt-10 inline-block">
          <Button variant="yellow">Yes, This Webinar Is For Me</Button>
        </a>
      </div>
    </section>
  );
}
