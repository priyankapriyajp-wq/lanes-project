export type StatItemProps = {
  value: string;
  suffix?: string;
  description: string;
};

export const StatItem = ({ value, suffix, description }: StatItemProps) => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full md:w-[200px]">
      <div className="text-white text-[40px] font-medium items-end box-border caret-transparent gap-x-1 flex justify-start tracking-[-2.8px] leading-10 min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          {value}
        </div>
        {suffix && (
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            {suffix}
          </div>
        )}
      </div>
      <div className="box-border caret-transparent max-w-[200px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:max-w-none md:w-auto">
        <div className="box-border caret-transparent outline-[3px]">
          {description}
        </div>
      </div>
    </div>
  );
};