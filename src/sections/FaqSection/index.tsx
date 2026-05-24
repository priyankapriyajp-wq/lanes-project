import { FaqItem } from "@/sections/FaqSection/components/FaqItem";

const FAQS = [
  {
    question: "What's included in a monthly package?",
    answer: "Each monthly package includes a set number of design or development hours, dedicated project management, weekly updates, and priority support. We tailor it to fit your needs — whether that's ongoing branding, web updates, or new creative assets.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Timelines depend on the scope, but most branding projects take 2–3 weeks, and full website builds range from 3–6 weeks. We'll always give you a clear timeline upfront — and stick to it.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes. We provide ongoing maintenance, updates, optimization, and support after launch to ensure everything runs smoothly.",
  },
  {
    question: "Can I hire you for just a logo or one-off design?",
    answer: "Yes — we take on one-off projects like logos, pitch decks, or landing pages. If it's a good fit, we're happy to jump in and help.",
  },
  {
    question: "What platforms do you build websites on?",
    answer: "We primarily work with Framer, Webflow, and Shopify — but we're flexible depending on your project needs and tech stack.",
  },
  {
    question: "How do payments work?",
    answer: "For fixed-scope projects, we split payments into 50% upfront and 50% upon completion. For monthly retainers, payments are made at the start of each billing cycle. We accept most major payment methods.",
  },
  {
    question: "What if I'm not happy with the first concept?",
    answer: "No problem — that's part of the process. We include multiple rounds of revisions to ensure you're completely happy with the final result. Your feedback helps us shape it just right.",
  },
];

export const FaqSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] pt-8 pb-16 md:pb-24">
      <div className="box-border caret-transparent max-w-[1520px] outline-[3px] w-full mx-auto px-4 md:px-8">
        <div className="items-start box-border caret-transparent gap-x-10 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-between outline-[3px] gap-y-6 md:grid-cols-[1fr_1fr] md:gap-y-[normal]">

          <div className="text-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <h2 className="text-[38.4px] font-medium box-border caret-transparent tracking-[-0.576px] leading-[46.08px] outline-[3px] md:text-5xl md:tracking-[-0.72px] md:leading-[57.6px]">
              Faq /s
            </h2>
          </div>

          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px] w-full">
            {FAQS.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};