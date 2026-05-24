export type SectionHeaderProps = {
  title: string;
  description: string;
  href: string;
  linkText: string;
  linkVariant?: string;
};

export const SectionHeader = ({
  title,
  description,
  href,
  linkText,
  linkVariant = "",
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      {/* Content */}
      <div className="flex max-w-xl flex-col gap-3">
        <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>

        <p className="text-base leading-7 tracking-tight text-neutral-400 md:text-lg">
          {description}
        </p>
      </div>

      {/* CTA Link */}
      <a
        href={href}
        className={`group relative flex items-center justify-between gap-4 border-b border-white/20 pb-1 text-white transition hover:border-white ${linkVariant}`}
      >
        <span className="text-sm font-medium tracking-tight md:text-base">
          {linkText}
        </span>

        <img
          src="https://c.animaapp.com/mpa3ncljorJ2I2/assets/69dc4a3510dc554a3c328330_arrow-right-icon.svg"
          alt="Arrow right icon"
          className="h-5 w-5 invert transition-transform duration-300 group-hover:translate-x-1"
        />

        <div className="absolute bottom-0 left-0 h-px w-[15%] bg-white transition-all duration-300 group-hover:w-full" />
      </a>
    </div>
  );
};