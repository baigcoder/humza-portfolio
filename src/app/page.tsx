import SiteHeader from "@/components/layout/SiteHeader";
import HeroSection from "@/components/hero/HeroSection";
import MacroTelemetryBar from "@/components/hero/MacroTelemetryBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SmoothScroll from "@/components/effects/SmoothScroll";
import CommandPalette from "@/components/effects/CommandPalette";
import ExecutiveDossierModal from "@/components/effects/ExecutiveDossierModal";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CommandPalette />
      <ExecutiveDossierModal />
      <SiteHeader />

      <main>
        <HeroSection />
        <MacroTelemetryBar />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <CredentialsSection />
        <TestimonialsSection />
        <ContactSection />
        <ResourcesSection />
      </main>

      <SiteFooter />
    </>
  );
}
