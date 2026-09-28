import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CourseDiscovery } from "@/components/sections/CourseDiscovery";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <PartnerLogos />
        <CourseDiscovery />
        <LearningPaths />
        <GrowthSection />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
