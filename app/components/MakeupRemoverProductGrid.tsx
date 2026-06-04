"use client";

import Image from "next/image";

const MAKEUP_REMOVER_IMAGES = [
  {
    src: "/images/image10.jfif",
    alt: "Makeup remover 1",
    description: "Gentle micellar water that lifts away makeup and impurities without rubbing — suitable for all skin types.",
  },
  {
    src: "/images/image11.jfif",
    alt: "Makeup remover 2",
    description: "Cleansing oil that melts long-wear makeup and sunscreen while leaving skin soft and nourished.",
  },
  {
    src: "/images/image12.jfif",
    alt: "Makeup remover 3",
    description: "Dual-phase eye and lip remover for waterproof formulas — effective yet gentle on delicate areas.",
  },
];

export default function MakeupRemoverProductGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
      {MAKEUP_REMOVER_IMAGES.map(({ src, alt, description }, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <p className="px-4 py-3 text-sm text-foreground/80">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}
