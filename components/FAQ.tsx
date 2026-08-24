import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    id: "for-freshers",
    q: "Is this webinar for freshers?",
    a: "Yes. It is designed to help students, freshers and early-career professionals understand practical workplace expectations.",
  },
  {
    id: "prior-experience",
    q: "Do I need prior experience?",
    a: "No. The webinar is beginner-friendly.",
  },
  {
    id: "technical-knowledge",
    q: "Do I need technical knowledge?",
    a: "No advanced technical knowledge is required.",
  },
  {
    id: "is-it-live",
    q: "Is the webinar live?",
    a: "Yes. The webinar is intended to be a live session with practical examples.",
  },
  {
    id: "language",
    q: "What language will the webinar use?",
    a: "Hindi + easy English.",
  },
  {
    id: "practical-skills",
    q: "Will I learn practical skills?",
    a: "Yes. The webinar focuses on practical workplace situations and actionable frameworks.",
  },
  {
    id: "recording",
    q: "Will I receive a recording?",
    a: "If a recording is made available for this session, it will be shared with registered participants after the webinar.",
  },
  {
    id: "certificate",
    q: "Will I receive a certificate?",
    a: "If a certificate is provided for this session, it will be shared with participants who attend.",
  },
  {
    id: "webinar-details",
    q: "How will I receive webinar details?",
    a: "Registration details and reminders can be sent through WhatsApp and email.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 lg:px-20 lg:py-24">
      <h2 className="text-center font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue={FAQS[0].id}
        className="mt-12 rounded-3xl border border-ink/10 bg-cream-light"
      >
        {FAQS.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
