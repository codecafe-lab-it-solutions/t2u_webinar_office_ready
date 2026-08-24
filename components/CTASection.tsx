import { ShapeArrow, ShapeTriangle } from "./shapes";
import RegistrationForm from "./RegistrationForm";

export default function CTASection() {
  return (
    <section id="register" className="mx-4 my-8 rounded-4xl bg-ink py-16 text-cream sm:mx-6 sm:my-12 lg:mx-10 lg:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
        <h2 className="relative font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
          <ShapeTriangle className="absolute -left-6 -top-4 hidden h-7 w-7 -rotate-12 text-purple sm:block" />
          Ready to Become Office-Ready?
          <ShapeArrow className="absolute -right-10 bottom-0 hidden h-7 w-7 text-yellow sm:block" />
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-light">
          Join this free live webinar and discover practical ideas you can
          apply to your career, work, communication, confidence and
          personal growth.
        </p>
        <p className="font-hi mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-light" lang="hi">
          अपनी फ्री सीट अभी रिज़र्व करें — नीचे फॉर्म भरें।
        </p>
      </div>

      <RegistrationForm />
    </section>
  );
}
