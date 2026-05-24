import { SectionHeader } from "@/components/SectionHeader";
import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";

const SERVICES = [
  {
    index: "_001",
    title: "Branding",
    description: "We craft logos and brand systems that leave a lasting impression.",
  },
  {
    index: "_002",
    title: "Development",
    description: "Beautiful and functional websites built with purpose and precision.",
  },
  {
    index: "_003",
    title: "SEO Optimization",
    description: "Get found faster with tailored SEO strategies backed by real data.",
  },
  {
    index: "_004",
    title: "Social Media",
    description: "We plan, post, and grow your brand across every platform with purpose.",
  },
  {
    index: "_005",
    title: "AI Apps",
    description: "Get purpose-built AI applications that combine precision with maximum ROI.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] pt-8 pb-16 md:pb-20">
      <div className="box-border caret-transparent max-w-[1520px] outline-[3px] w-full mx-auto px-4 md:px-8">
        <div className="box-border caret-transparent flex flex-col outline-[3px] gap-y-10">

          <SectionHeader
            title="Services."
            description="We've helped businesses across industries achieve their goals."
            href="/contact"
            linkText="Get in touch"
            linkVariant="w-[127px]"
          />

          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5">
            {SERVICES.map((service) => (
              <ServiceItem
                key={service.index}
                index={service.index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};