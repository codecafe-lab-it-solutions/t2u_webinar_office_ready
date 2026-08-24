import Button from "./Button";
import { ProfileCard } from "./ui/profile-card";
import { ShapeStar, ShapeTriangle } from "./shapes";
import { WEBINAR } from "@/lib/webinar-config";

const EVENT_INFO = [
  ["Date", WEBINAR.date],
  ["Time", WEBINAR.time],
  ["Duration", WEBINAR.duration],
  ["Mode", WEBINAR.mode],
  ["Language", WEBINAR.language],
  ["Level", WEBINAR.level],
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 pt-4 md:px-10 lg:px-20 lg:pb-14 lg:pt-6">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="min-w-0 max-w-2xl text-center lg:flex-1 lg:text-left">
          <h1 className="animate-fade-in-up font-display text-4xl font-extrabold uppercase leading-[1.08] tracking-tight [animation-delay:0ms] sm:text-5xl lg:text-[3rem] xl:text-[3.4rem]">
            Do Not Just{" "}
            <span className="relative inline-block">
              Get a Job
              <ShapeTriangle className="absolute -right-7 -top-4 h-6 w-6 text-yellow" />
            </span>
            . Be{" "}
            <span className="relative inline-block">
              Ready
              <ShapeStar className="absolute -left-8 top-0 h-6 w-6 text-purple" />
            </span>{" "}
            to Perform When You Get One.
          </h1>

          <p className="animate-fade-in-up mt-5 text-base leading-relaxed text-muted [animation-delay:150ms] sm:text-lg">
            Getting your first job is exciting, but entering a professional
            workplace can feel very different from college. You&rsquo;re
            expected to communicate, manage tasks, attend meetings, meet
            deadlines, and solve problems.
          </p>

          <p
            className="font-hi animate-fade-in-up mt-3 text-base font-medium text-ink [animation-delay:150ms]"
            lang="hi"
          >
            क्योंकि Job पाना आसान है, Perform करना असली Challenge है।
          </p>

          <div className="animate-fade-in-up mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start [animation-delay:300ms]">
            <a href="#register">
              <Button variant="yellow" size="lg" className="w-full sm:w-auto">
                Reserve My Free Seat
              </Button>
            </a>
            <a href="#learn">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See What You&rsquo;ll Learn
              </Button>
            </a>
          </div>

          <p className="animate-fade-in-up mt-4 text-xs font-medium uppercase tracking-wide text-muted [animation-delay:300ms] sm:text-sm">
            Free Registration &middot; Beginner Friendly &middot; Practical Live Webinar
          </p>

          <dl className="animate-fade-in-up mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted lg:justify-start [animation-delay:350ms]">
            {EVENT_INFO.map(([label, value]) => (
              <div key={label} className="flex items-center gap-1.5">
                <dt className="font-semibold text-ink">{label}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in-up w-full max-w-sm shrink-0 [animation-delay:200ms] lg:w-[380px]">
          <ProfileCard
            name="Kishan Khatri"
            title="Founder, T2Upgrade"
            imageSrc="/founder.jpg"
            imageAlt="Kishan Khatri, Founder of T2Upgrade"
          />
        </div>
      </div>
    </section>
  );
}
