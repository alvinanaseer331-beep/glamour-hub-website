export const metadata = {
  title: "About Us | Glamour Hub",
  description: "Learn about Glamour Hub — your destination for curated beauty and cosmetics.",
};

export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        About Us
      </h1>
      <p className="mt-6 leading-relaxed text-foreground/85">
        Glamour Hub is your trusted destination for quality cosmetics and beauty
        products. We believe everyone deserves to feel confident in their own
        skin, and we curate our collection to bring you formulas that perform
        as well as they look.
      </p>
      <p className="mt-4 leading-relaxed text-foreground/85">
        From lips and eyes to nails and cheeks, we offer a focused selection
        so you can discover your next favorite without the overwhelm. Clean,
        professional, and made with you in mind.
      </p>
      <p className="mt-4 leading-relaxed text-foreground/85">
        Thank you for being part of our community. We&apos;re here to help you
        look and feel your best.
      </p>
    </div>
  );
}
