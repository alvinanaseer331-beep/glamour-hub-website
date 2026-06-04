"use client";

import Image from "next/image";

const EYE_IMAGES = [
  {
    src: "/images/image4.jfif",
    alt: "Eyeshadow",
    description: "Eyeshadow palette with blendable neutrals — from soft daytime to smoky evening.",
  },
  {
    src: "/images/image5.jfif",
    alt: "Mascara",
    description: "Lengthening mascara for defined, voluminous lashes that last all day.",
  },
  {
    src: "/images/image6.jfif",
    alt: "Eye product 3",
    description: "Precision eyeliner for sharp lines and long-wear, smudge-resistant finish.",
  },
];

export default function EyeProductGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
      {EYE_IMAGES.map(({ src, alt, description }, i) => (
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
