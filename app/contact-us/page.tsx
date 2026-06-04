import Image from "next/image";

export const metadata = {
  title: "Contact Us | Glamour Hub",
  description: "Get in touch with Glamour Hub — we'd love to hear from you.",
};

const CONTACT_HERO_IMAGE = "/images/image55.jfif";

function EmailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-foreground/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function ContactUsPage() {
  return (
    <div>
      {/* Hero section — image with "Contact Information" centered on it */}
      <section className="px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 place-items-center">
          <div className="relative w-full overflow-hidden border border-foreground/10 bg-foreground/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[3/2]">
              <Image
                src={CONTACT_HERO_IMAGE}
                alt="Cosmetics — Glamour Hub"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-black/40" aria-hidden />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-4xl">
                  Contact Information
                </h1>
                <p className="max-w-md text-sm text-white/95 drop-shadow-md sm:text-base">
                  Reach out for inquiries, assistance, feedback, or support — we’re here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        <p className="text-center leading-relaxed text-foreground/85">
        Reach out to us for inquiries, assistance, feedback, or support. We’re
        here to help and would love to hear from you.
      </p>

      <div className="mt-12 space-y-6">
        <div className="flex gap-4">
          <EmailIcon />
          <div className="space-y-1">
            <p className="text-sm font-medium uppercase tracking-wider text-foreground/70">
              Email
            </p>
            <a
              href="mailto:glamourhub.com.pk@gmail.com"
              className="block text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
            >
              glamourhub.com.pk@gmail.com
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <PhoneIcon />
          <div className="space-y-1">
            <p className="text-sm font-medium uppercase tracking-wider text-foreground/70">
              For queries call &amp; SMS
            </p>
            <p className="text-foreground">
              <span className="font-bold">0xxxxxx</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-4 border-t border-foreground/10 pt-8">
        <ClockIcon />
        <div className="space-y-1">
          <p className="text-sm font-medium uppercase tracking-wider text-foreground/70">
            Working hours
          </p>
          <p className="text-foreground/85">
            Monday–Saturday 8:30am–2:30pm
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
