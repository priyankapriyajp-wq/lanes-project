export type TestimonialCardProps = {
  imageUrl: string;
  imageSizes: string;
  imageClassName: string;
  quote: React.ReactNode;
  reviewerName: string;
  reviewerTitle: string;
};

export const TestimonialCard = ({
  imageUrl,
  imageSizes,
  imageClassName,
  quote,
  reviewerName,
  reviewerTitle,
}: TestimonialCardProps) => {
  return (
    <div className="bg-zinc-900 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-2xl">
      <img
        src={imageUrl}
        sizes={imageSizes}
        alt="Reviewer's image"
        className={`box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full ${imageClassName}`}
      />

      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-10 pt-8 pb-6 px-4 md:pb-8 md:px-8">
        {/* Quote */}
        <div className="text-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <div className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-[31.2px] outline-[3px] md:text-[32px] md:tracking-[-0.32px] md:leading-[41.6px]">
            {quote}
          </div>
        </div>

        {/* Reviewer */}
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1">
          <div className="text-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="font-medium box-border caret-transparent outline-[3px]">
              {reviewerName}
            </div>
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            {reviewerTitle}
          </div>
        </div>
      </div>
    </div>
  );
};