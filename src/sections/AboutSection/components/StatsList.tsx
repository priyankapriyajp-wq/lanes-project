import { StatItem } from "@/sections/AboutSection/components/StatItem";

const STATS = [
  { value: "3", suffix: "m+", description: "Capital raised by brands we helped out." },
  { value: "289", description: "Brands launched through our creative process." },
  { value: "56", description: "Awards recognizing our branding excellence." },
  { value: "97", suffix: "%", description: "Client satisfaction rate across all delivered work." },
];

export const StatsList = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-8 md:gap-x-2 md:flex-row md:gap-y-2">
      {STATS.map((stat) => (
        <StatItem
          key={stat.value + stat.description}
          value={stat.value}
          suffix={stat.suffix}
          description={stat.description}
        />
      ))}
    </div>
  );
};