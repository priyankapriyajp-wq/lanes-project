import { useEffect, useRef } from "react";

export type MediaCardProps = {
  containerVariant: string;
  videoVariant: string;
  mp4Src: string;
  webmSrc: string;
};

export const MediaCard = (props: MediaCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Force immediate load and play — fixes mobile blank video on load
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — retry on first user interaction
        const retry = () => {
          video.play().catch(() => {});
          document.removeEventListener("touchstart", retry);
          document.removeEventListener("click", retry);
        };
        document.addEventListener("touchstart", retry, { once: true });
        document.addEventListener("click", retry, { once: true });
      });
    }
  }, []);

  return (
    <div
      className={`box-border shrink-0 h-[160px] w-[110px] md:h-[280px] md:w-[180px] overflow-hidden ${props.containerVariant}`}
    >
      <div className="relative h-full w-full overflow-hidden bg-zinc-900">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover z-[0] ${props.videoVariant}`}
        >
          <source src={props.mp4Src} type="video/mp4" />
        </video>

        <button
          type="button"
          className="absolute flex items-center justify-center bg-zinc-800/80 h-6 w-6 md:h-8 md:w-8 p-0 rounded-full right-2 bottom-2 md:right-6 md:bottom-6 z-[1]"
        >
          <img
            src="https://c.animaapp.com/mpa3ncljorJ2I2/assets/628299f8aa233b83918e24fd_Pause.svg"
            alt="Pause"
            className="h-3 w-3 md:h-5 md:w-5"
          />
        </button>
      </div>
    </div>
  );
};
