"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Grants Database", href: "/grants" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-none border-b border-gray-100"
      }`}
    >
      {/* Business name bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Canada Grants and Loans"
              className="h-[52px] lg:h-[64px] w-auto [mix-blend-mode:multiply]"
              width={320}
              height={64}
            />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Canada Grants and Loans"
              className="h-[60px] lg:h-[72px] w-auto [mix-blend-mode:multiply]"
              width={300}
              height={72}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium text-brand-dark hover:text-brand-red transition-colors ${
                  pathname === link.href
                    ? "border-b-2 border-brand-red text-brand-red pb-0.5"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side — phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:18554726875"
              className="flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-red transition-colors"
            >
              <PhoneIcon />
              1-855-GRANTS-5
            </a>
            <Link
              href="/contact"
              className="bg-brand-red text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-red-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-brand-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white flex flex-col px-6 py-8 gap-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium text-brand-dark hover:text-brand-red transition-colors ${
                pathname === link.href ? "text-brand-red" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-200" />
          <a
            href="tel:18554726875"
            className="flex items-center gap-2 text-base font-semibold text-brand-navy"
          >
            <PhoneIcon />
            1-855-GRANTS-5
          </a>
          <Link
            href="/contact"
            className="bg-brand-red text-white text-center font-semibold px-5 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
