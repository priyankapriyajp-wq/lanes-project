// export type FaqItemProps = {
//   question: string;
//   answer: string;
// };

// export const FaqItem = ({ question, answer }: FaqItemProps) => {
//   return (
//     <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left w-full z-[900] mx-auto">

//       {/* Trigger */}
//       <div
//         role="button"
//         className="relative text-white text-[18.08px] font-medium items-center box-border caret-transparent gap-x-4 flex justify-between leading-[27.12px] min-h-16 outline-[3px] align-top w-full mx-auto py-3"
//       >
//         <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
//           {question}
//         </div>

//         {/* Toggle icon */}
//         <div className="relative items-center box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-10">
//           <div className="bg-neutral-500 box-border caret-transparent h-3.5 min-h-[auto] min-w-[auto] outline-[3px] w-0.5 rounded-[10px]" />
//           <div className="absolute bg-neutral-500 box-border caret-transparent h-0.5 outline-[3px] w-3.5 rounded-[10px]" />
//         </div>
//       </div>

//       {/* Answer */}
//       <nav className="relative box-border caret-transparent hidden min-w-full outline-[3px]">
//         <div className="box-border caret-transparent h-0 opacity-0 outline-[3px] w-[90%]">
//           <div className="text-base box-border caret-transparent leading-6 outline-[3px]">
//             {answer}
//           </div>
//         </div>
//       </nav>

//     </div>
//   );
// };



"use client";

import { useState } from "react";

export type FaqItemProps = {
  question: string;
  answer: string;
};

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left w-full z-[900] mx-auto">

      {/* Trigger */}
      <div
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-white text-[18.08px] font-medium items-center box-border caret-transparent gap-x-4 flex justify-between leading-[27.12px] min-h-16 outline-[3px] align-top w-full mx-auto py-3 cursor-pointer"
      >
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          {question}
        </div>

        {/* Toggle icon */}
        <div className="relative items-center box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-10 shrink-0">
          {/* <div className="bg-neutral-500 box-border caret-transparent h-3.5 min-h-[auto] min-w-[auto] outline-[3px] w-0.5 rounded-[10px]" />
          <div className={`absolute bg-neutral-500 h-0.5 w-3.5 rounded-[10px] transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} /> */}

          {/* Vertical bar — hides when open to form minus */}
<div className={`bg-neutral-500 h-3.5 w-0.5 rounded-[10px] transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
{/* Horizontal bar — always visible */}
<div className="absolute bg-neutral-500 h-0.5 w-3.5 rounded-[10px]" />
        </div>
      </div>

      {/* Answer */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
        <div className="text-base text-white/70 leading-6 w-[90%]">
          {answer}
        </div>
      </div>

    </div>
  );
};