import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import OfficeReadyFramework from "@/components/OfficeReadyFramework";
import LiveDemonstration from "@/components/LiveDemonstration";
import IntroVideo from "@/components/IntroVideo";
import TrustedPartners from "@/components/TrustedPartners";
import TrainerIntro from "@/components/TrainerIntro";
import Testimonials from "@/components/Testimonials";
import Bonuses from "@/components/Bonuses";
import CTASection from "@/components/CTASection";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <OfficeReadyFramework />
      <LiveDemonstration />
      <IntroVideo />
      <TrustedPartners />
      <TrainerIntro />
      <Testimonials />
      <Bonuses />
      <CTASection />
      <WhatsAppCommunity />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
