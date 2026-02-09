import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full ${
        scrolled ? "bg-white border-b border-border" : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] px-6">
        <div className="flex h-[72px] items-center justify-between">
          {/* Name / Logo */}
          <Link href="/" className="text-lg font-semibold text-navy">
            Arzoo
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-textSecondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="rounded-md border border-primary px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-textPrimary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-textSecondary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="inline-block rounded-md border border-primary px-4 py-2 text-sm text-primary"
            >
              Download CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
