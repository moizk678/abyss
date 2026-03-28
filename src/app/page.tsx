import HeroSection from "./sections/HeroSection";
import CollectionSection from "./sections/CollectionSection";
import ProcessSection from "./sections/ProcessSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
