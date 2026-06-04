import Image from "next/image";
import Link from "next/link";

const MAKEUP_REMOVER_PRODUCTS = [
  { src: "/images/image51.jfif", alt: "Makeup remover 1", description: "Micellar water, gentle cleansing.", price: "Rs 1,100" },
  { src: "/images/image52.jfif", alt: "Makeup remover 2", description: "Cleansing oil, melts makeup.", price: "Rs 1,350" },
  { src: "/images/image53.jfif", alt: "Makeup remover 3", description: "Eye & lip remover, waterproof formulas.", price: "Rs 850" },
  { src: "/images/image54.jfif", alt: "Makeup remover 4", description: "Makeup remover wipes, on-the-go.", price: "Rs 650" },
];

export const metadata = {
  title: "Makeup Remover | Glamour Hub",
  description: "Gentle makeup removers and cleansing at Glamour Hub.",
};

export default function MakeupRemoverPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Makeup Remover
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-foreground/85">
        Gentle removers and cleansers to take off makeup without stripping
        skin. From micellar water and cleansing oils to dedicated eye and
        lip removers — effective and kind to your skin.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MAKEUP_REMOVER_PRODUCTS.map((product, i) => (
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
        href="/#makeup-remover"
        className="mt-10 inline-block text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
      >
        View makeup remover products on home
      </Link>
    </div>
  );
}
