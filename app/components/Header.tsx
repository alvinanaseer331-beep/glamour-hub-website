"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const THEME_KEY = "glamour-hub-theme";

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
    const isDark =
      stored === "dark" ||
      (stored === null &&
        typeof document !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="rounded-lg p-2 text-foreground opacity-80 hover:bg-foreground/10"
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="rounded-lg p-2 text-foreground opacity-90 hover:bg-foreground/10 hover:opacity-100"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/15 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-14 flex-1 items-center justify-end gap-2 px-4 sm:gap-3 sm:px-6">
        <form
          action="/search"
          method="GET"
          className="flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 pl-4 pr-4 py-2 text-foreground focus-within:border-foreground/40 focus-within:ring-1 focus-within:ring-foreground/20 sm:w-48 sm:min-w-[12rem] md:w-56"
        >
          <SearchIcon />
          <input
            type="search"
            name="q"
            placeholder="Search..."
            aria-label="Search products"
            className="min-w-0 flex-1 border-0 bg-transparent text-sm text-foreground placeholder:text-foreground/50 focus:outline-none"
          />
        </form>
        <Link
          href="/cart"
          className="rounded-lg p-2 text-foreground opacity-90 hover:bg-foreground/10 hover:opacity-100"
          aria-label="View cart"
        >
          <CartIcon />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
