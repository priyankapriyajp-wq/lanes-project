import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";

const slides = [
  {
    src: "https://kbstudio.in/wp-content/uploads/2025/05/4-2-1-1.webp",
    sub: "Outdoor ceremonies under open skies",
  },
  {
    src: "https://static.wixstatic.com/media/74e6ee_aee96b69577f44bb8942ef3ddadc66fe~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/74e6ee_aee96b69577f44bb8942ef3ddadc66fe~mv2.jpg",
    sub: "Every detail, perfectly captured",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600",
    sub: "Stories that last a lifetime",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600",
    sub: "Luxury weddings crafted for you",
  },
];

export const WeddingPage = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;

      setAnimating(true);
      setCurrent(index);

      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const prev = () =>
    goTo((current - 1 + slides.length) % slides.length);

  const next = () =>
    goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <div className="font-interdisplay min-h-screen bg-[#150B2E] text-white">
      <Navbar />

      {/* ───────────────── HERO CAROUSEL ───────────────── */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* SLIDES */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.src}
              alt="Wedding"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                transform:
                  i === current
                    ? "scale(1)"
                    : "scale(1.05)",
                transition: "transform 8000ms",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#150B2E] via-black/40 to-black/20" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#150B2E]/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* BACK */}
        <Link
          to="/"
          className="absolute left-8 top-24 z-20 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          ← Back to Projects
        </Link>

        {/* COUNTER */}
        <div className="absolute right-8 top-24 z-20 text-sm font-mono tracking-widest text-white/40">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">

          <div
            key={current}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-yellow-400/80">
              Reelzongo Weddings
            </span>

            <h1 className="text-6xl font-black leading-none tracking-tight text-white drop-shadow-2xl md:text-8xl lg:text-9xl">
              Cinematic
              <br />
              Wedding Films
              <h1>HELLO TEST</h1>
            </h1>

            <p className="max-w-md text-lg text-white/60 md:text-xl">
              {slides[current].sub}
            </p>
          </div>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="group absolute left-6 top-1/2 z-20 -translate-y-1/2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl backdrop-blur-sm transition group-hover:border-white/40 group-hover:bg-white/20">
            ‹
          </div>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="group absolute right-6 top-1/2 z-20 -translate-y-1/2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl backdrop-blur-sm transition group-hover:border-white/40 group-hover:bg-white/20">
            ›
          </div>
        </button>

        {/* PROGRESS */}
        {/* <div
          className="absolute bottom-0 left-0 z-20 h-[2px] bg-yellow-400/60 transition-all duration-700"
          style={{
            width: `${((current + 1) / slides.length) * 100}%`,
          }}
        /> */}
      </section>

      {/* ───────────────── QUESTIONNAIRE ───────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">

        {/* HEADING */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Your Questionnaire
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Select your answers to help us understand your
            dream wedding vision.
          </p>
        </div>

        {/* FORM */}
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">
                Name
              </label>

              <input
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                placeholder="Your name"
              />
            </div>

            {/* AESTHETIC */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">
                Preferred Aesthetic
              </label>

              <select className="rounded-xl border border-white/10 bg-[#1e1040] px-4 py-3 text-sm text-white outline-none">
                <option value="">Select</option>
                <option>Romantic</option>
                <option>Modern</option>
                <option>Traditional</option>
                <option>Luxury</option>
              </select>
            </div>

            {/* PARTNER */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">
                Partner Name
              </label>

              <input
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                placeholder="Partner name"
              />
            </div>

            {/* BUDGET */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">
                Budget Range
              </label>

              <select className="rounded-xl border border-white/10 bg-[#1e1040] px-4 py-3 text-sm text-white outline-none">
                <option value="">Select</option>
                <option>Under ₹50K</option>
                <option>₹50K – ₹1L</option>
                <option>₹1L – ₹3L</option>
                <option>₹3L+</option>
              </select>
            </div>

            {/* GUESTS */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">
                Estimated Guests
              </label>

              <select className="rounded-xl border border-white/10 bg-[#1e1040] px-4 py-3 text-sm text-white outline-none">
                <option value="">Select</option>
                <option>Under 50</option>
                <option>50–100</option>
                <option>100–200</option>
                <option>200+</option>
              </select>
            </div>

            {/* EVENT STYLE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">
                Event Style
              </label>

              <select className="rounded-xl border border-white/10 bg-[#1e1040] px-4 py-3 text-sm text-white outline-none">
                <option value="">Choose</option>
                <option>Grand Reception</option>
                <option>Outdoor Celebration</option>
                <option>Traditional Wedding</option>
              </select>
            </div>

            {/* EVENT VISION */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-slate-400">
                Event Vision
              </label>

              <textarea
                rows={4}
                className="resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
                placeholder="Describe your dream wedding..."
              />
            </div>

            {/* QUESTION */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-slate-400">
                Your Question
              </label>

              <select className="rounded-xl border border-white/10 bg-[#1e1040] px-4 py-3 text-sm text-white outline-none">
                <option value="">Select answer...</option>
                <option>Pricing Inquiry</option>
                <option>Availability Check</option>
                <option>Package Details</option>
              </select>
            </div>
          </div>
        </div>

        {/* ───────────────── QUOTE SECTION ───────────────── */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-400/10 to-white/5 p-10 backdrop-blur-xl">

          <div className="max-w-3xl">

            <span className="text-xs uppercase tracking-[0.3em] text-yellow-400">
              Reelzongo Quote
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Get a Custom Quote
            </h2>

            <p className="mt-4 leading-relaxed text-slate-300">
              Share your wedding details and our team will
              craft a personalised cinematic package tailored
              specifically for your event.
            </p>

            {/* QUOTE FORM */}
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* DATE */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400">
                  Event Date
                </label>

                <input
                  type="date"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
                />
              </div>

              {/* VENUE */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400">
                  Venue
                </label>

                <input
                  placeholder="Venue name"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
                />
              </div>

              {/* BUTTON */}
              <div className="md:col-span-2">
                <button className="w-full rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-stone-900 transition hover:bg-yellow-300 md:w-auto">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};