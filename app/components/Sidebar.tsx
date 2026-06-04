"use client";

import Link from "next/link";
import { useState } from "react";

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

const CATEGORY_LINKS = [
  { label: "Lip", href: "/lips" },
  { label: "Eye", href: "/eye" },
  { label: "Cheeks", href: "/cheeks" },
  { label: "Nails", href: "/nails" },
  { label: "Makeup Remover", href: "/makeup-remover" },
] as const;

const linkClass =
  "block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/85 no-underline transition-colors hover:bg-foreground/10 hover:text-foreground";
const sectionTitleClass =
  "mb-2 px-5 text-xs font-semibold uppercase tracking-wider text-foreground/60";

export default function Sidebar() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <aside
      className="fixed left-0 top-0 z-40 flex h-full w-52 flex-col border-r border-foreground/15 bg-background pt-6"
      aria-label="Sidebar navigation"
    >
      <Link
        href="/"
        className="mb-8 flex items-center gap-2.5 px-5 text-foreground no-underline"
      >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-background font-semibold text-sm"
          aria-hidden
        >
          G
        </span>
        <span className="font-semibold text-lg tracking-tight">Glamour Hub</span>
      </Link>

      <h2 className={sectionTitleClass}>Menu</h2>
      <nav className="mb-6 flex flex-col gap-0.5 px-3" aria-label="Main menu">
        {MENU_LINKS.map(({ label, href }) => (
          <Link key={href} href={href} className={linkClass}>
            {label}
          </Link>
        ))}
      </nav>

      <div>
        <button
          type="button"
          onClick={() => setCategoriesOpen((o) => !o)}
          aria-expanded={categoriesOpen}
          aria-controls="sidebar-categories"
          id="sidebar-categories-toggle"
          className="mb-2 flex w-full items-center justify-between px-5 text-left text-xs font-semibold uppercase tracking-wider text-foreground/60 hover:text-foreground/80"
        >
          Categories
          <svg
            className={`h-3.5 w-3.5 shrink-0 transition-transform ${categoriesOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <nav
          id="sidebar-categories"
          aria-labelledby="sidebar-categories-toggle"
          className={`grid transition-[grid-template-rows] duration-200 ease-out ${categoriesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-0.5 px-3 pb-1">
              {CATEGORY_LINKS.map(({ label, href }) => (
                <Link key={href} href={href} className={linkClass}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
