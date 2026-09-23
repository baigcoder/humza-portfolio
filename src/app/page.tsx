import SiteHeader from "@/components/layout/SiteHeader";
import HeroSection from "@/components/hero/HeroSection";
import MacroTelemetryBar from "@/components/hero/MacroTelemetryBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { MetricsBentoSection } from "@/components/sections/MetricsBentoSection";
import WorkSection from "@/components/sections/WorkSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import JournalSection from "@/components/sections/JournalSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SmoothScroll from "@/components/effects/SmoothScroll";
import Preloader from "@/components/effects/Preloader";
import CommandPalette from "@/components/effects/CommandPalette";
import ExecutiveDossierModal from "@/components/effects/ExecutiveDossierModal";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <CommandPalette />
      <ExecutiveDossierModal />
      <SiteHeader />

      <main>
        <HeroSection />
        <MacroTelemetryBar />
        <AboutSection />
        <ServicesSection />
        <MetricsBentoSection />
        <WorkSection />
        <CredentialsSection />
        <TestimonialsSection />
        <JournalSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
