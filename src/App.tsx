// import { Navbar } from "@/sections/Navbar";
// import { Hero } from "@/sections/Hero";
// import { IntroSection } from "@/sections/Intro";
// import { LogoMarquee } from "./sections/LogoMarquee";
// import { ProjectsSection } from "./sections/ProjectsSection";
// import { ServicesSection } from "./sections/ServicesSection";
// import { AboutSection } from "./sections/AboutSection";
// import { TestimonialsSection } from "./sections/TestimonialsSection";
// import { FaqSection } from "./sections/FaqSection";

// export const App = () => {
//   return (
  
//       <div className="font-interdisplay bg-[#0F172A] min-h-full">
//       <Navbar />
//       <Hero />
//       <IntroSection />
//       <LogoMarquee />
//       <ProjectsSection />
//       <ServicesSection />
//       <AboutSection />
//       <TestimonialsSection />
//       <FaqSection />
//     </div>
//   );
// };


import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { IntroSection } from "@/sections/Intro";
import { LogoMarquee } from "./sections/LogoMarquee";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { AboutSection } from "./sections/AboutSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FaqSection } from "./sections/FaqSection";
import { WeddingPage } from "./sections/WeddingPage";

const HomePage = () => (
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
  </div>
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/wedding" element={<WeddingPage />} />
    </Routes>
  );
};