const words = [
  { text: "We're",      opacity: "opacity-10"  },
  { text: "Lanes",      opacity: "opacity-20"  },
  { text: "—",          opacity: "opacity-10"  },
  { text: "a",          opacity: "opacity-20"  },
  { text: "creative",   opacity: "opacity-20"  },
  { text: "studio",     opacity: "opacity-20"  },
  { text: "cultivating",opacity: "opacity-20"  },
  { text: "bold",       opacity: "opacity-20"  },
  { text: "brands,",    opacity: "opacity-20"  },
  { text: "beautiful",  opacity: "opacity-10"  },
  { text: "websites,",  opacity: "opacity-10"  },
  { text: "and",        opacity: "opacity-10"  },
  { text: "Ideas",      opacity: "opacity-10"  },
  { text: "that",       opacity: "opacity-20"  },
  { text: "refuse",     opacity: "opacity-20"  },
  { text: "to",         opacity: "opacity-10"  },
  { text: "be",         opacity: "opacity-10"  },
  { text: "ordinary.",  opacity: "opacity-10"  },
];

export const IntroSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] py-28 md:pt-[120px] md:pb-[200px]">
      <div className="box-border caret-transparent max-w-[1520px] outline-[3px] w-full mx-auto px-4 md:px-8">
        <div className="text-white box-border caret-transparent max-w-[660px] outline-[3px] w-full mx-auto">
          <h2
            aria-label="We're Lanes — a creative studio cultivating bold brands, beautiful websites, and Ideas that refuse to be ordinary."
            className="text-[38.4px] box-border caret-transparent tracking-[-0.576px] leading-[46.08px] outline-[3px] md:text-[58px] md:tracking-[normal] md:leading-[63.8px]"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className={`relative text-[38.4px] box-border caret-transparent inline-block blur-[3px] tracking-[-0.576px] leading-[46.08px] outline-[3px] md:text-[58px] md:tracking-[normal] md:leading-[63.8px] ${word.opacity} mr-[0.25em]`}
              >
                {word.text}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};
