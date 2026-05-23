// import { MediaCard } from "./MediaCard";

// const ROW_ONE_ITEMS = (
//   <>
//     <MediaCard
//       containerVariant="rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px]"
//       videoVariant=""
//       mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552467/video5_w4wn2u.mp4"
//       webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552467/video5_w4wn2u.mp4"
//     />
//     <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552679/reel_fxtdpn.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-[40px] md:rounded-[80px]" />
//     <MediaCard
//       containerVariant="rounded-[40px] md:rounded-[80px]"
//       videoVariant=""
//       mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552513/video9_osly64.mp4"
//       webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552513/video9_osly64.mp4"
//     />
//     <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552680/hindu_wedding_bfwjur.jpg')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[80px] md:rounded-bl-[80px]" />
//     <MediaCard
//       containerVariant="rounded-2xl md:rounded-3xl"
//       videoVariant=""
//       mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552513/video6_qessfh.mp4"
//       webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552513/video6_qessfh.mp4"
//     />
//     <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552677/flowers_wb3v8k.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-t-[40px] md:rounded-t-[80px]" />
//     <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552678/bday_umedit.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[80px] md:rounded-bl-[80px]" />
//     <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200//v1779552678/christian_wedding_igxpn9.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-b-[40px] md:rounded-b-[80px]" />
//   </>
// );

// const ROW_TWO_ITEMS = (
//   <>
//     <MediaCard
//       containerVariant="rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px]"
//       videoVariant=""
//       mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552504/video7_sklsxp.mp4"
//       webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552504/video7_sklsxp.mp4"
//     />
//     <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552678/christian_wedding_igxpn9.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-b-[40px] rounded-l-[40px] md:rounded-b-[80px] md:rounded-l-[80px]" />
//     <MediaCard
//       containerVariant="rounded-[40px] md:rounded-[80px]"
//       videoVariant=""
//       mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552474/video1_bvafun.mp4"
//       webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552474/video1_bvafun.mp4"
//     />
//     <div className="bg-[url('images/bdy.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[80px] md:rounded-bl-[80px]" />
//     <MediaCard
//       containerVariant="rounded-2xl md:rounded-3xl"
//       videoVariant=""
//       mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552502/video8_bwt41d.mp4"
//       webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552502/video8_bwt41d.mp4"
//     />
//     <div className="bg-[url('images/bdy.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-t-[40px] md:rounded-t-[80px]" />
//     <MediaCard
//       containerVariant="rounded-t-[40px] md:rounded-t-[80px]"
//       videoVariant=""
//       mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552503/video3_hnkqwf.mp4"
//       webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552503/video3_hnkqwf.mp4"
//     />
//     <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552677/house_rlhpqc.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-b-[40px] md:rounded-b-[80px]" />
//   </>
// );

// export const HeroMediaGrid = () => {
//   return (
//     <div
//       className="absolute inset-0 flex flex-col justify-center gap-y-3 md:gap-y-6 z-[1] overflow-hidden pointer-events-none"
//       style={{ transform: "rotate(-15deg) scale(1.4)" }}
//     >
//       {/* Row 1 — scrolls LEFT — 2 copies, -50% keyframe */}
//       <div className="flex overflow-hidden">
//         <div className="flex shrink-0 gap-x-3 md:gap-x-6 will-change-transform animate-marquee-left">
//           {ROW_ONE_ITEMS}
//         </div>
//         <div className="flex shrink-0 gap-x-3 md:gap-x-6 will-change-transform animate-marquee-left" aria-hidden="true">
//           {ROW_ONE_ITEMS}
//         </div>
//       </div>

//       {/* Row 2 — scrolls RIGHT — 2 copies, -50% keyframe */}
//       <div className="flex overflow-hidden">
//         <div className="flex shrink-0 gap-x-3 md:gap-x-6 will-change-transform animate-marquee-right">
//           {ROW_TWO_ITEMS}
//         </div>
//         <div className="flex shrink-0 gap-x-3 md:gap-x-6 will-change-transform animate-marquee-right" aria-hidden="true">
//           {ROW_TWO_ITEMS}
//         </div>
//       </div>
//     </div>
//   );
// };



import { MediaCard } from "./MediaCard";

const ROW_ONE_ITEMS = (
  <>
    <MediaCard
      containerVariant="rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px]"
      videoVariant=""
      mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552467/video5_w4wn2u.mp4"
      webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552467/video5_w4wn2u.mp4"
    />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552679/reel_fxtdpn.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-[40px] md:rounded-[80px]" />
    <MediaCard
      containerVariant="rounded-[40px] md:rounded-[80px]"
      videoVariant=""
      mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/v1779552513/video6_qessfh.mp4"
      webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/v1779552513/video6_qessfh.mp4"
    />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552680/hindu_wedding_bfwjur.jpg')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[80px] md:rounded-bl-[80px]" />
    <MediaCard
      containerVariant="rounded-2xl md:rounded-3xl"
      videoVariant=""
      mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552513/video6_qessfh.mp4"
      webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552513/video6_qessfh.mp4"
    />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552677/flowers_wb3v8k.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-t-[40px] md:rounded-t-[80px]" />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552678/bday_umedit.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[80px] md:rounded-bl-[80px]" />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552678/christian_wedding_igxpn9.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-b-[40px] md:rounded-b-[80px]" />
  </>
);

const ROW_TWO_ITEMS = (
  <>
    <MediaCard
      containerVariant="rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px]"
      videoVariant=""
      mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552504/video7_sklsxp.mp4"
      webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552504/video7_sklsxp.mp4"
    />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552678/christian_wedding_igxpn9.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-b-[40px] rounded-l-[40px] md:rounded-b-[80px] md:rounded-l-[80px]" />
    <MediaCard
      containerVariant="rounded-[40px] md:rounded-[80px]"
      videoVariant=""
      mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552474/video1_bvafun.mp4"
      webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552474/video1_bvafun.mp4"
    />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552680/hindu_wedding_bfwjur.jpg')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[80px] md:rounded-bl-[80px]" />
    <MediaCard
      containerVariant="rounded-2xl md:rounded-3xl"
      videoVariant=""
      mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552502/video8_bwt41d.mp4"
      webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552502/video8_bwt41d.mp4"
    />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552679/reel_fxtdpn.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-t-[40px] md:rounded-t-[80px]" />
    <MediaCard
      containerVariant="rounded-t-[40px] md:rounded-t-[80px]"
      videoVariant=""
      mp4Src="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552503/video3_hnkqwf.mp4"
      webmSrc="https://res.cloudinary.com/dzxvu5ceo/video/upload/f_auto,q_auto,w_400/v1779552503/video3_hnkqwf.mp4"
    />
    <div className="bg-[url('https://res.cloudinary.com/dzxvu5ceo/image/upload/f_auto,q_auto,w_200/v1779552677/house_rlhpqc.png')] bg-no-repeat bg-cover shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden bg-center rounded-b-[40px] md:rounded-b-[80px]" />
  </>
);

export const HeroMediaGrid = () => {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-center gap-y-3 md:gap-y-6 z-[1] overflow-hidden pointer-events-none"
      style={{ transform: "rotate(-15deg) scale(1.4)" }}
    >
      {/* Row 1 — scrolls LEFT */}
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 gap-x-3 md:gap-x-6 will-change-transform animate-marquee-left">
          {ROW_ONE_ITEMS}
        </div>
        <div className="flex shrink-0 gap-x-3 md:gap-x-6 will-change-transform animate-marquee-left" aria-hidden="true">
          {ROW_ONE_ITEMS}
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 gap-x-3 md:gap-x-6 will-change-transform animate-marquee-right">
          {ROW_TWO_ITEMS}
        </div>
        <div className="flex shrink-0 gap-x-3 md:gap-x-6 will-change-transform animate-marquee-right" aria-hidden="true">
          {ROW_TWO_ITEMS}
        </div>
      </div>
    </div>
  );
};