export type ServiceItemProps = {
  index: string;
  title: string;
  description: string;
};

export const ServiceItem = ({ index, title, description }: ServiceItemProps) => {
  return (
    <div className="relative bg-zinc-900 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-2xl">
      <div className="relative items-start box-border caret-transparent flex flex-col justify-between outline-[3px] gap-y-4 z-[2] px-6 py-8 md:items-center md:flex-row md:gap-y-[normal] md:p-10">
        
        {/* Index */}
        <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:items-center md:gap-x-2.5 md:flex-row md:gap-y-[normal]">
          <div className="text-[15.2px] box-border caret-transparent leading-[22.8px] min-h-[auto] min-w-[auto] outline-[3px] font-chivo_mono">
            {index}
          </div>

          {/* Title */}
          <div className="text-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <h3 className="text-[19.2px] font-medium box-border caret-transparent tracking-[-0.192px] leading-[25.92px] outline-[3px] md:text-2xl md:tracking-[-0.24px] md:leading-[32.4px]">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="text-white/70 box-border caret-transparent max-w-[250px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="text-base box-border caret-transparent leading-6 outline-[3px]">
            {description}
          </div>
        </div>

      </div>
    </div>
  );
};