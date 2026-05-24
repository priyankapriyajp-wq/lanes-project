import { useEffect, useRef } from "react";

const words = [
  { text: "We're"       },
  { text: "Lanes"       },
  { text: "—"           },
  { text: "a"           },
  { text: "creative"    },
  { text: "studio"      },
  { text: "cultivating" },
  { text: "bold"        },
  { text: "brands,"     },
  { text: "beautiful"   },
  { text: "websites,"   },
  { text: "and"         },
  { text: "Ideas"       },
  { text: "that"        },
  { text: "refuse"      },
  { text: "to"          },
  { text: "be"          },
  { text: "ordinary."   },
];

export const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // 0 = section not yet visible, 1 = fully scrolled through
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - sectionTop) / (windowHeight * 1.2))
      );

      const totalWords = wordRefs.current.length;

      wordRefs.current.forEach((wordEl, i) => {
        if (!wordEl) return;

        const wordThreshold = i / totalWords;
        const wordProgress = Math.max(
          0,
          Math.min(1, (scrollProgress - wordThreshold) / (1 / totalWords))
        );

        // opacity: 0.1 (dim) → 1.0 (full white)
        const opacity = 0.1 + wordProgress * 0.9;
        // blur: 3px → 0px
        const blur = 3 - wordProgress * 3;

        wordEl.style.opacity = String(opacity);
        wordEl.style.filter = `blur(${blur}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial state on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="box-border caret-transparent py-28 md:pt-[120px] md:pb-[200px]"
    >
      <div className="max-w-[1520px] w-full mx-auto px-4 md:px-8">
        <div className="text-white max-w-[660px] w-full mx-auto">
          <h2
            aria-label="We're Lanes — a creative studio cultivating bold brands, beautiful websites, and Ideas that refuse to be ordinary."
            className="text-[38.4px] tracking-[-0.576px] leading-[46.08px] md:text-[58px] md:tracking-[normal] md:leading-[63.8px]"
          >
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => { wordRefs.current[i] = el; }}
                style={{
                  opacity: 0.1,
                  filter: "blur(3px)",
                  transition: "opacity 0.3s ease, filter 0.3s ease",
                }}
                className="relative inline-block text-[38.4px] tracking-[-0.576px] leading-[46.08px] md:text-[58px] md:tracking-[normal] md:leading-[63.8px] mr-[0.25em]"
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
