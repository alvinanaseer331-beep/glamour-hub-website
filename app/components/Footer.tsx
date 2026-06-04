import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/#lip" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "Categories", href: "/#lip" },
];

const POLICIES = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
];

const linkClass =
  "text-[var(--footer-text)]/90 text-sm tracking-wide no-underline transition-colors hover:text-[var(--footer-hover)]";
const headingClass =
  "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--footer-text)]/70";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "TikTok", href: "https://tiktok.com", Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-[var(--footer-text)]/10"
      style={{ backgroundColor: "var(--footer-bg)" }}
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Quick links */}
          <div>
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className={headingClass}>Policies</h3>
            <ul className="flex flex-col gap-2.5">
              {POLICIES.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className={headingClass}>Follow Us</h3>
            <div className="flex gap-5">
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[var(--footer-text)]/80 transition-colors hover:text-[var(--footer-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--footer-hover)]/50 focus:ring-offset-2 focus:ring-offset-[var(--footer-bg)]"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--footer-text)]/10 pt-8 text-center">
          <p className="text-xs text-[var(--footer-text)]/60">
            © {new Date().getFullYear()} Glamour Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
