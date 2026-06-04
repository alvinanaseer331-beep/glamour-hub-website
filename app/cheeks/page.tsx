import Image from "next/image";
import Link from "next/link";

const CHEEK_PRODUCTS = [
  { src: "/images/image27.jfif", alt: "Cheek product 1", description: "Powder blush, buildable colour.", price: "Rs 1,100" },
  { src: "/images/image28.jfif", alt: "Cheek product 2", description: "Cream blush, dewy finish.", price: "Rs 1,350" },
  { src: "/images/image29.jfif", alt: "Cheek product 3", description: "Liquid blush, natural flush.", price: "Rs 1,200" },
  { src: "/images/image30.jfif", alt: "Cheek product 4", description: "Bronzer, sun-kissed glow.", price: "Rs 1,400" },
  { src: "/images/image31.jfif", alt: "Cheek product 5", description: "Highlighter, subtle shimmer.", price: "Rs 1,250" },
  { src: "/images/image32.jfif", alt: "Cheek product 6", description: "Blush palette, multiple shades.", price: "Rs 2,100" },
  { src: "/images/image33.jfif", alt: "Cheek product 7", description: "Stick blush, easy application.", price: "Rs 1,050" },
  { src: "/images/image34.jfif", alt: "Cheek product 8", description: "Tinted cheek gel, lightweight.", price: "Rs 950" },
];

export const metadata = {
  title: "Cheeks | Glamour Hub",
  description: "Explore blush, bronzer and highlighters at Glamour Hub.",
};

export default function CheeksPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Cheeks
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-foreground/85">
        Shop blush, bronzer and highlighters for a natural glow. From cream
        and powder to liquid formulas, we have options for every skin type
        and finish.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CHEEK_PRODUCTS.map((product, i) => (
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
        href="/#cheeks"
        className="mt-10 inline-block text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
      >
        View cheek products on home
      </Link>
    </div>
  );
}
