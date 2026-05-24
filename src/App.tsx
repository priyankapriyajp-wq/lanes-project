import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { IntroSection } from "@/sections/Intro";
import { LogoMarquee } from "./sections/LogoMarquee";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { AboutSection } from "./sections/AboutSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FaqSection } from "./sections/FaqSection";
// import { Footer } from "./sections/Footer";


export const App = () => {
  return (
    // <div className="font-interdisplay bg-stone-950 min-h-full">
      <div className="font-interdisplay bg-[#0F172A] min-h-full">
      <Navbar />
      <Hero />
      <IntroSection />
      <LogoMarquee />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      {/* <Footer /> */}
    </div>
  );
};


{/* <div className="font-interdisplay bg-[#0B0D3A] min-h-full"></div> */ }

{/* <div className="font-interdisplay bg-[#FF7A00] min-h-full"></div> */ }