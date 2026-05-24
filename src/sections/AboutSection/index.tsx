import { StatsList } from "@/sections/AboutSection/components/StatsList";

export const AboutSection = () => {
    return (
        <section className="box-border caret-transparent outline-[3px] pt-10 pb-20 md:pt-8 md:pb-[150px]">
            <div className="box-border caret-transparent max-w-[1520px] outline-[3px] w-full mx-auto px-4 md:px-8">
                <div className="relative box-border caret-transparent flex flex-col outline-[3px] gap-y-8 md:gap-y-10">
                    <div className="text-white box-border caret-transparent max-w-[800px] min-h-[auto] min-w-[auto] outline-[3px]">
                        <h2 className="text-[38.4px] font-medium box-border caret-transparent tracking-[-0.576px] leading-[46.08px] outline-[3px] md:text-5xl md:tracking-[-0.72px] md:leading-[57.6px]">
                            Lanes® is a creative studio shaping bold brands and daring ideas.
                        </h2>
                    </div>
                    {/* <div className="items-center bg-[url('https://cdn.prod.website-files.com/69c1ad3748d574d4aed2b31a/69dd9b1dba2febd1b0782881_567f11189ccf87d3b4e4e79cd8ad94160_matrics-video-bg.avif')) bg-no-repeat bg-cover box-border caret-transparent flex h-[250px] justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center rounded-3x1 md:h-[700px]"> */}
                    <div className="items-center bg-[url('https://framerusercontent.com/images/eqtagxNJ6ssw5Mc5AZ1sCtxLOZM.png?scale-down-to=2048&width=2688&height=1792')] bg-no-repeat bg-cover box-border caret-transparent flex h-[250px] justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center rounded-3xl md:h-[700px]">
                        <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] -[2]">
                            <a
                                href="#"
                                aria-label="open lightbox"
                                className="text-blue-700 Items-center box-border caret-transparent flex h-full justify-center max-w-full outline-[3px] w-full hover:outline-0"
                            >
                                <div className="items-center backdrop-blur-[10px] bg-black/38 hox-border caret-transparent flex h-[60px] justify-center min-h-[auto] min-s-[auto] outline-[3px] w-[60px] rounded-[100%] md:h-[88px] md:w-88px] hover:bg-black/70">
                                    <img
                                        alt="Play icon"
                                        src="https://c.animaapp.com/mpa3ncljorJ2I2/assets/69dd9b1dba2febd1b0782888_be4c5953a1525c9f811826fcf036d038_video-play-button.svg"
                                        className="box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-5"
                                    />
                                </div>
                            </a>
                        </div>
                        <div className="absolute items-start box-border caret-transparent flex justify-center opacity-[0.23] outline-[3px] gap-y-2 z-[1] overflow-hidden md:gap-y-2.5 md:overflow-visible">
                            <div className="text-white text-[88.32px] font-black box-border caret-transparent tracking-[-3.2128px] leading-[72.288px) min-h-[auto] min-w-[auto] outline-[3px] font-utara md:text-[256px] md:tracking-[-10.24px] md:leading-[230.4px]"> 
                                LANES
                            </div>
                            {/* <div className="text-white text-[53.12px] font-black box-border caret-transparent tracking-[-2.1248px] leading-[47.808px] min-h-[auto] min-w-[auto] outline-[3px] font-utara md:text-[68.8px] nd:tracking-1-2.752px] md: leading-[61.92px]">
                                @
                            </div> */}
                        </div>
                    </div>
                    <StatsList />
                </div>
            </div >
        </section >
    );
};
