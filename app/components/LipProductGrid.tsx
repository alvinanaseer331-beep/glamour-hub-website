"use client";

import Image from "next/image";

const LIPSTICK_IMAGES = [
  {
    src: "/images/image1.jfif",
    alt: "Lip product 1",
    shade: "A warm nude with a soft matte finish — perfect for everyday wear.",
  },
  {
    src: "/images/image2.jfif",
    alt: "Lip product 2",
    shade: "A classic red with subtle undertones — bold and long-lasting.",
  },
  {
    src: "/images/image3.jfif",
    alt: "Lip product 3",
    shade: "A berry-toned shade with a satin finish — ideal for evening looks.",
  },
];

export default function LipProductGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
      {LIPSTICK_IMAGES.map(({ src, alt, shade }, i) => (
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
            {shade}
          </p>
        </div>
      ))}
    </div>
  );
}
