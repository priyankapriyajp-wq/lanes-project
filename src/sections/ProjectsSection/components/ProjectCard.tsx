// export type ProjectCardProps = {
//   href: string;
//   imageSrc: string;
//   logoSrc: string;
//   title: string;
// };

// export const ProjectCard = ({
//   href,
//   imageSrc,
//   logoSrc,
//   title,
// }: ProjectCardProps) => {
//   return (
//     <div
//       role="listitem"
//       className="sticky top-20 min-h-[auto] min-w-[auto] outline-[3px]"
//     >
//       <a
//         href={href}
//         aria-label="Please visit details page to have more information."
//         className="relative flex w-full max-w-full items-center justify-center text-blue-700 hover:outline-0 outline-[3px]"
//       >
//         {/* Background Image */}
//         <div className="overflow-hidden rounded-3xl outline-[3px] md:auto box-border h-[400px] w-full">
//           <img
//             src={imageSrc}
//             alt={title}
//             className="inline-block h-full w-full object-cover outline-[3px]"
//           />
//         </div>

//         {/* Logo Overlay */}
//         <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/20 outline-[3px]">
//           <img
//             src={logoSrc}
//             alt={`${title} logo`}
//             className="max-w-full min-h-[auto] min-w-[auto] w-[200px] outline-[3px]"
//           />
//         </div>

//         {/* Title Badge */}
//         <div className="absolute inset-x-0 top-0 flex justify-end p-3 outline-[3px]">
//           <div className="flex h-8 items-center justify-center rounded-[32px] bg-white/50 px-3 text-[15.2px] leading-[22.8px] text-stone-950">
//             <div>{title}</div>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };



import { Link } from "react-router-dom";

export type ProjectCardProps = {
  href: string;
  imageSrc: string;
  logoSrc: string;
  title: string;
};

export const ProjectCard = ({
  href,
  imageSrc,
  logoSrc,
  title,
}: ProjectCardProps) => {
  return (
    <div
      role="listitem"
      className="sticky top-20 min-h-[auto] min-w-[auto]"
    >
      <Link
        to={href}
        aria-label="Please visit details page to have more information."
        className="relative flex w-full max-w-full items-center justify-center overflow-hidden rounded-3xl"
      >
        {/* Background Image */}
        <div className="h-[400px] w-full overflow-hidden rounded-3xl">
          <img
            src={imageSrc}
            alt={title}
            className="inline-block h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 rounded-3xl bg-black/30" />

        {/* Logo Overlay */}
        {logoSrc && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logoSrc}
              alt={`${title} logo`}
              className="w-[200px] max-w-full"
            />
          </div>
        )}

        {/* Title Badge */}
        <div className="absolute inset-x-0 top-0 flex justify-end p-4">
          <div className="rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-stone-950 backdrop-blur-md">
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
};