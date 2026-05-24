// import { FooterBrand } from "./components/FooterBrand";
import { NewsletterForm } from "./components/NewsletterForm";
import { FooterNav } from "./components/FooterNav";

export const Footer = () => {
  return (
    <section className="relative flex justify-center overflow-hidden border-t border-zinc-800">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-[80px]" />

      {/* Decorative Rings */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute h-[386px] w-[386px] rounded-full border border-pink-400" />
        <div className="absolute bottom-0 left-0 h-[386px] w-[386px] rounded-full border border-emerald-400" />
        <div className="absolute left-0 top-0 h-[386px] w-[386px] rounded-full border border-violet-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-col gap-y-[120px] px-6 py-20 md:gap-y-[250px]">
        {/* <FooterBrand /> */}

        <div className="flex flex-col gap-y-10 border-t border-zinc-800 pt-8 md:flex-row md:items-center md:justify-between">
          {/* CTA */}
          <a
            href="/contact"
            className="group relative flex flex-col text-white"
          >
            <span className="text-2xl font-medium tracking-[-0.24px] leading-[31px] md:text-[32px] md:leading-[41px]">
              Get in touch
            </span>

            {/* Underline */}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Newsletter */}
          <NewsletterForm />

          {/* Footer Navigation */}
          <FooterNav />
        </div>
      </div>
    </section>
  );
};