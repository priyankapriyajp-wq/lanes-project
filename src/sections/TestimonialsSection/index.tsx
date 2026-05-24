import { TestimonialsHeader } from "@/sections/TestimonialsSection/components/TestimonialsHeader";
import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

const TESTIMONIALS = [
  {
    imageUrl: "https://cdn.prod.website-files.com/69c1ad3748d574d4aed2b31a/69dd94b50fd55f8b6cbf28c3_review-img-01.avif",
    imageSizes: "(max-width: 1808px) 100vw, 1808px",
    imageClassName: "box-border caret-transparent h-[300px] max-w-full min-h-[auto] min-w-[auto] object-cover object-[50%_20%] outline-[3px] w-full md:h-[400px]",
    quote: "Working with Lanes felt like hiring a creative greenhouse for our ideas. Everything grew faster and brighter than we imagined.",
    reviewerName: "John Headphone",
    reviewerTitle: "Founder, Clonify",
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/69c1ad3748d574d4aed2b31a/69dd9695ea77dcae851a8a39_3c2a7944c522701854b90b3275fa9361_review-img-03.avif",
    imageSizes: "(max-width: 1808px) 100vw, 1808px",
    imageClassName: "h-[400px]",
    quote: (
      <>
        Working with Lanes was a game-changer. They didn't just design our brand — they captured its soul. Everything feels elevated, intentional, and totally us
        <br className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-[31.2px] outline-[3px] md:text-[32px] md:tracking-[-0.32px] md:leading-[41.6px]" />
      </>
    ),
    reviewerName: "Bruce Lee",
    reviewerTitle: "Design Director, Maiz",
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/69c1ad3748d574d4aed2b31a/69dd9695ea77dcae851a8a39_3c2a7944c522701854b90b3275fa9361_review-img-03.avif",
    imageSizes: "(max-width: 2400px) 100vw, 2400px",
    imageClassName: "h-[400px]",
    quote: "From concept to launch, the Lanes team delivered with clarity, creativity, and style. We've never looked more professional — or more ourselves.",
    reviewerName: "Sarah Conor",
    reviewerTitle: "UFO, Marcom",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] pt-8 pb-16 md:pb-[120px]">
      <div className="box-border caret-transparent max-w-[1520px] outline-[3px] w-full mx-auto px-4 md:px-8">
        <div className="items-start box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-items-stretch outline-[3px] gap-y-6 md:grid-cols-[1fr_1fr] md:gap-y-[normal]">

          <TestimonialsHeader />

          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:gap-y-12">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.reviewerName}
                imageUrl={testimonial.imageUrl}
                imageSizes={testimonial.imageSizes}
                imageClassName={testimonial.imageClassName}
                quote={testimonial.quote}
                reviewerName={testimonial.reviewerName}
                reviewerTitle={testimonial.reviewerTitle}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};