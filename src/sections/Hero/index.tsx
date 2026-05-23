import { HeroTitle } from "./components/HeroTitle";
import { HeroMediaGrid } from "./components/HeroMediaGrid";

export const Hero = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative items-center flex h-screen min-h-[600px] max-h-[1000px] justify-center w-full overflow-hidden pt-20 pb-4 px-4 md:pt-0 md:pb-8 md:px-0">

        <HeroTitle />

        {/* Blurred color orb */}
        <div className="absolute blur-[50px] md:blur-[70px] h-[180px] w-[180px] md:h-[277px] md:w-[277px] mix-blend-hard-light opacity-[0.78] pointer-events-none z-[2] overflow-hidden bottom-32 md:bottom-48 lg:bottom-auto">
          <div className="absolute bg-pink-400 h-[250px] w-[250px] md:h-[386px] md:w-[386px] z-[3] rounded-full right-0 top-0"></div>
          <div className="absolute bg-emerald-400 h-[250px] w-[250px] md:h-[386px] md:w-[386px] z-[2] rounded-full left-0 bottom-0"></div>
          <div className="absolute bg-violet-500 h-[250px] w-[250px] md:h-[386px] md:w-[386px] z-[1] rounded-full left-0 top-0"></div>
        </div>

        <HeroMediaGrid />

        {/* Side fade overlay — matches bg color #0B0D3A */}
        <div className="absolute bg-[linear-gradient(90deg,#0B0D3A,rgba(11,13,58,0)_8%,rgba(11,13,58,0)_92%,#0B0D3A)] pointer-events-none z-[2] inset-0"></div>

        {/* Top + bottom fade */}
        <div className="absolute bg-[linear-gradient(180deg,#0B0D3A_0%,rgba(11,13,58,0)_15%,rgba(11,13,58,0)_80%,#0B0D3A_100%)] pointer-events-none z-[2] inset-0"></div>

        {/* Scroll indicator */}
        <div className="absolute flex items-center h-[38px] justify-center z-[3] bottom-4 left-0 right-0 md:bottom-8">
          <div className="flex items-start h-[38px] justify-center w-[22px] border-gray-400 p-[5px] rounded-[32px] border-2 border-solid">
            <div className="h-3 w-3 border-gray-400 rounded-full border-2 border-solid translate-y-[3px] md:translate-y-[1.764px]"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
