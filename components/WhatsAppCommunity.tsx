import { MessageCircle } from "lucide-react";
import Button from "./Button";
import { WEBINAR } from "@/lib/webinar-config";

export default function WhatsAppCommunity() {
  return (
    <section className="mx-4 my-8 rounded-4xl bg-ink px-6 py-16 text-center text-cream sm:mx-6 sm:my-12 lg:mx-10 lg:py-24">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-purple/40 bg-purple/10">
        <MessageCircle className="h-7 w-7 text-purple" />
      </div>

      <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
        Join Our WhatsApp Community
      </h2>

      <p
        className="font-hi mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-light sm:text-base"
        lang="hi"
      >
        Updates, reminders &amp; networking के लिए हमारी WhatsApp community
        से जुड़ें — हर registrant के लिए खुला है।
      </p>

      <a
        href={WEBINAR.whatsappCommunityUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block"
      >
        <Button variant="yellow" size="lg" icon={<MessageCircle className="h-4 w-4" />}>
          Join WhatsApp Community
        </Button>
      </a>
    </section>
  );
}
