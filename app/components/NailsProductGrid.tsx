"use client";

import Image from "next/image";

const NAILS_IMAGES = [
  {
    src: "/images/image7.jfif",
    alt: "Nail shade",
    description: "A rich, long-wear nail shade with a smooth finish — one swipe for even, vibrant colour.",
  },
  {
    src: "/images/image8.jfif",
    alt: "Multiple nail shades",
    description: "A range of multiple shades to match any look — from neutrals to bold statement colours.",
  },
  {
    src: "/images/image9.jfif",
    alt: "Nail paint shiner",
    description: "Nail paint shiner for a glossy, high-shine finish that lasts and resists chipping.",
  },
];

export default function NailsProductGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
      {NAILS_IMAGES.map(({ src, alt, description }, i) => (
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
