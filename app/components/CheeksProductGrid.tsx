"use client";

import Image from "next/image";

const CHEEKS_IMAGES = [
  {
    src: "/images/image13.jfif",
    alt: "Cream blush",
    description: "Cream blush for a natural, dewy flush — blends easily and works well on dry or mature skin.",
  },
  {
    src: "/images/image14.jfif",
    alt: "Powder blush",
    description: "Powder blush for buildable colour and a soft, matte finish — long-lasting and ideal for oily skin.",
  },
  {
    src: "/images/image15.jfif",
    alt: "Liquid blush",
    description: "Liquid blush for a lightweight, blendable wash of colour — gives a fresh, lit-from-within glow.",
  },
];

export default function CheeksProductGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
      {CHEEKS_IMAGES.map(({ src, alt, description }, i) => (
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
