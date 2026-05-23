import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { IntroSection } from "@/sections/Intro";

export const App = () => {
  return (
    <div className="font-interdisplay bg-[#0B0D3A] min-h-full">
      <Navbar />
      <Hero />
      <IntroSection />
    </div>
  );
};
