export const HeroTitle = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-5 z-[3] md:gap-y-2">

      <div
        aria-label="REELZ ON GO®"
        className="items-start box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] opacity-90 outline-[3px] pointer-events-none p-0 md:p-4"
      >
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <h1 className="text-white text-[107.2px] font-black box-border caret-transparent inline-block tracking-[-7.504px] leading-[96.48px] opacity-90 outline-[3px] font-utara md:text-[272px] md:tracking-[-19.04px] md:leading-[244.8px]">
            {["R", "E", "E", "L", "Z"].map((letter, i) => (
              <div
                key={i}
                className="relative text-[107.2px] box-border caret-transparent inline-block blur-0 tracking-[-7.504px] leading-[96.48px] outline-[3px] md:text-[272px] md:tracking-[-19.04px] md:leading-[244.8px]"
              >
                {letter}
              </div>
            ))}
          </h1>
        </div>

        <h2 className="text-white text-[30.4px] font-black box-border caret-transparent tracking-[-1.216px] leading-[27.36px] min-h-[auto] min-w-[auto] opacity-90 outline-[3px] font-utara md:text-[65.6px] md:tracking-[-2.624px] md:leading-[59.04px]">
          <div className="relative text-[30.4px] box-border caret-transparent inline-block blur-0 tracking-[-1.216px] leading-[27.36px] outline-[3px] md:text-[65.6px] md:tracking-[-2.624px] md:leading-[59.04px]">
            ®
          </div>
        </h2>
      </div>

      <div className="text-white box-border caret-transparent max-w-[300px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none text-center md:max-w-[400px]">
        <div className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-[31.2px] outline-[3px] md:text-[32px] md:tracking-[-0.32px] md:leading-[41.6px]">
          We're Reelzongo® — a creative reel makers.
        </div>
      </div>

    </div>
  );
};
