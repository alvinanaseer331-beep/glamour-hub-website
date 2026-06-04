"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const CAROUSEL_INTERVAL_MS = 3000;

const HERO_SLIDES = [
  { src: "/images/image16.jfif", alt: "Beauty — glamour" },
  { src: "/images/image17.jfif", alt: "Cosmetics — style" },
  { src: "/images/image18.jfif", alt: "Makeup — curated for you" },
];

function ChevronLeft() {
  return (
    <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    const id = setInterval(next, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden sm:min-h-[80vh]"
      aria-label="Hero carousel"
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${
            i === index ? "z-0 opacity-100" : "z-0 opacity-0"
          } ${i === 2 ? "bg-gradient-to-b from-foreground/10 to-background p-4 sm:p-6" : ""}`}
          aria-hidden={i !== index}
        >
          {i === 2 ? (
            <div className="grid w-full max-w-4xl grid-cols-1 place-items-center">
              <div className="w-full overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                <div className="relative aspect-[4/3] w-full sm:aspect-[3/2]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 896px"
                    priority={i === 0}
                  />
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
          )}
        </div>
      ))}

      {/* Gradient overlay for readability and modern beauty look */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/40 to-black/30"
        aria-hidden
      />

      {/* Centered branding */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          Glamour Hub
        </h1>
        <p className="mt-4 max-w-md text-base text-white/95 drop-shadow-md sm:mt-5 sm:text-lg md:text-xl">
          Beauty, curated for you.
        </p>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-6 sm:p-3"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-6 sm:p-3"
      >
        <ChevronRight />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2.5">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "h-2.5 w-8 bg-white"
                : "h-2.5 w-2.5 bg-white/60 hover:bg-white/85"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
