import Image from "next/image";
import Link from "next/link";

const EYE_PRODUCTS = [
  { src: "/images/image35.jfif", alt: "Eyeshadow", description: "Eyeshadow palette, blendable shades for everyday looks.", price: "Rs 2,200" },
  { src: "/images/image36.jfif", alt: "Eyeshadow", description: "Eyeshadow in rich, long-wear formula.", price: "Rs 1,350" },
  { src: "/images/image37.jfif", alt: "Eyeshadow highlighter", description: "Eyeshadow highlighter for a subtle lift.", price: "Rs 950" },
  { src: "/images/image38.jfif", alt: "Eyeshadow highlighter", description: "Eyeshadow highlighter, buildable shimmer.", price: "Rs 650" },
  { src: "/images/image39.jfif", alt: "Eyeliner", description: "Eyeliner for precise, defined lines.", price: "Rs 750" },
  { src: "/images/image40.jfif", alt: "Eyeliner", description: "Eyeliner pencil, smudge-resistant.", price: "Rs 850" },
  { src: "/images/image41.jfif", alt: "Mascara", description: "Mascara for lengthening and volume.", price: "Rs 1,400" },
  { src: "/images/image42.jfif", alt: "Mascara", description: "Mascara, waterproof and long-wear.", price: "Rs 1,100" },
];

export const metadata = {
  title: "Eye | Glamour Hub",
  description: "Explore eyeshadow, mascara, eyeliner and more at Glamour Hub.",
};

export default function EyePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Eye
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-foreground/85">
        Browse eyeshadows, mascara, eyeliner and brow products. Create
        everyday or statement looks with our range of eye makeup and
        long-wear formulas.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {EYE_PRODUCTS.map((product, i) => (
          <div
            key={i}
            className="overflow-hidden border border-foreground/10 bg-foreground/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-foreground/80">
                {product.description}
              </p>
              <p className="mt-2 font-semibold text-foreground">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/#eye"
        className="mt-10 inline-block text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
      >
        View eye products on home
      </Link>
    </div>
  );
}
