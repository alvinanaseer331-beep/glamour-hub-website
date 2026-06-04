import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import LipProductGrid from "./components/LipProductGrid";
import EyeProductGrid from "./components/EyeProductGrid";
import NailsProductGrid from "./components/NailsProductGrid";
import MakeupRemoverProductGrid from "./components/MakeupRemoverProductGrid";
import CheeksProductGrid from "./components/CheeksProductGrid";

const PICSUM = (seed: string) =>
  `https://picsum.photos/seed/${seed}/600/450`;

const SECTIONS = [
  {
    id: "lip",
    title: "Lip",
    href: "/lips",
    description: "Lipsticks, glosses, liners & more.",
    images: [] as { label: string; src: string }[],
    useLipGrid: true,
    useEyeGrid: false,
    useNailsGrid: false,
    useMakeupRemoverGrid: false,
    useCheeksGrid: false,
  },
  {
    id: "eye",
    title: "Eye",
    href: "/eye",
    description: "Eyeshadows, mascara, liners & brows.",
    useLipGrid: false,
    useEyeGrid: true,
    useNailsGrid: false,
    useMakeupRemoverGrid: false,
    useCheeksGrid: false,
    images: [] as { label: string; src: string }[],
  },
  {
    id: "nails",
    title: "Nails",
    href: "/nails",
    description: "Nail polish, care & nail art.",
    useLipGrid: false,
    useEyeGrid: false,
    useNailsGrid: true,
    useMakeupRemoverGrid: false,
    useCheeksGrid: false,
    images: [] as { label: string; src: string }[],
  },
  {
    id: "makeup-remover",
    title: "Makeup Remover",
    href: "/makeup-remover",
    description: "Gentle removers & cleansing.",
    useLipGrid: false,
    useEyeGrid: false,
    useNailsGrid: false,
    useMakeupRemoverGrid: true,
    useCheeksGrid: false,
    images: [] as { label: string; src: string }[],
  },
  {
    id: "cheeks",
    title: "Cheeks",
    href: "/cheeks",
    description: "Blush, bronzer & highlighters.",
    useLipGrid: false,
    useEyeGrid: false,
    useNailsGrid: false,
    useMakeupRemoverGrid: false,
    useCheeksGrid: true,
    images: [] as { label: string; src: string }[],
  },
] as const;

function SectionImages({
  images,
  variant = "default",
}: {
  images: readonly { label: string; src: string }[];
  variant?: "default" | "lip";
}) {
  const isLip = variant === "lip";
  return (
    <div
      className={`mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 ${isLip ? "gap-6 sm:gap-8" : ""}`}
    >
      {images.map(({ label, src }, i) => (
        <div
          key={`${label}-${i}`}
          className={
            isLip
              ? "overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              : "overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5"
          }
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={src}
              alt={label}
              fill
              className={`object-cover ${isLip ? "rounded-2xl" : ""}`}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <p className="px-3 py-2 text-center text-xs font-medium uppercase tracking-wider text-foreground/70">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border-b border-foreground/10 py-10 first:pt-0 last:border-b-0 last:pb-0"
          >
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-foreground/75">
              {section.description}
            </p>
            {"useLipGrid" in section && section.useLipGrid ? (
              <LipProductGrid />
            ) : "useEyeGrid" in section && section.useEyeGrid ? (
              <EyeProductGrid />
            ) : "useNailsGrid" in section && section.useNailsGrid ? (
              <NailsProductGrid />
            ) : "useMakeupRemoverGrid" in section && section.useMakeupRemoverGrid ? (
              <MakeupRemoverProductGrid />
            ) : "useCheeksGrid" in section && section.useCheeksGrid ? (
              <CheeksProductGrid />
            ) : (
              <SectionImages images={section.images} variant="default" />
            )}
            <Link
              href={section.href}
              className="mt-6 inline-block text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
            >
              Shop {section.title}
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
