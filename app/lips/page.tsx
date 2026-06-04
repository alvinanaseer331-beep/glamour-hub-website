import Image from "next/image";
import Link from "next/link";

const LIP_PRODUCTS = [
  { src: "/images/image19.jfif", alt: "Lip product 1", description: "Matte lipstick, long-wear finish.", price: "Rs 1,200" },
  { src: "/images/image20.jfif", alt: "Lip product 2", description: "Lip gloss, high-shine formula.", price: "Rs 950" },
  { src: "/images/image21.jfif", alt: "Lip product 3", description: "Cream lipstick, rich colour.", price: "Rs 1,350" },
  { src: "/images/image22.jfif", alt: "Lip liner", description: "Lip liner for precise application and definition.", price: "Rs 650" },
  { src: "/images/image23.jfif", alt: "Lip product 5", description: "Satin lipstick, comfortable wear.", price: "Rs 1,100" },
  { src: "/images/image24.jfif", alt: "Lip product 6", description: "Lip balm, nourishing.", price: "Rs 500" },
  { src: "/images/image25.jfif", alt: "Lip product 7", description: "Liquid lipstick, transfer-proof.", price: "Rs 1,400" },
  { src: "/images/image26.jfif", alt: "Lip product 8", description: "Lip stain, natural tint.", price: "Rs 850" },
];

export const metadata = {
  title: "Lip | Glamour Hub",
  description: "Explore lipsticks, glosses, liners and more at Glamour Hub.",
};

export default function LipsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Lip
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-foreground/85">
        Discover our curated selection of lip products — from long-wear
        lipsticks and glossy finishes to liners and balms. Find your perfect
        shade and formula for every look.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {LIP_PRODUCTS.map((product, i) => (
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
        href="/#lip"
        className="mt-10 inline-block text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
      >
        View lip products on home
      </Link>
    </div>
  );
}
