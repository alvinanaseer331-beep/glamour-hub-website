import Image from "next/image";
import Link from "next/link";

const NAIL_PRODUCTS = [
  { src: "/images/image43.jfif", alt: "Nail product 1", description: "Nail polish, glossy finish.", price: "Rs 450" },
  { src: "/images/image44.jfif", alt: "Nail product 2", description: "Nail polish, long-wear formula.", price: "Rs 500" },
  { src: "/images/image45.jfif", alt: "Nail product 3", description: "Nail lacquer, rich colour.", price: "Rs 550" },
  { src: "/images/image46.jfif", alt: "Nail product 4", description: "Nail polish, matte finish.", price: "Rs 480" },
  { src: "/images/image47.jfif", alt: "Nail product 5", description: "Nail care, strengthening.", price: "Rs 650" },
  { src: "/images/image48.jfif", alt: "Nail product 6", description: "Nail polish set, multiple shades.", price: "Rs 1,200" },
  { src: "/images/image49.jfif", alt: "Nail product 7", description: "Quick-dry nail colour.", price: "Rs 520" },
  { src: "/images/image50.jfif", alt: "Nail product 8", description: "Nail shimmer, high-shine.", price: "Rs 480" },
];

export const metadata = {
  title: "Nails | Glamour Hub",
  description: "Nail polish, care and nail art at Glamour Hub.",
};

export default function NailsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Nails
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-foreground/85">
        Nail polish in a range of shades, plus nail care and finishes.
        Whether you prefer classic colours or something bold, find formulas
        that last and look great.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {NAIL_PRODUCTS.map((product, i) => (
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
        href="/#nails"
        className="mt-10 inline-block text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
      >
        View nail products on home
      </Link>
    </div>
  );
}
