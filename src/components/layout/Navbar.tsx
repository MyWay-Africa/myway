"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { href: "/platform", label: "Platform", hasDropdown: true },
  { href: "/for-travelers", label: "For Travelers", hasDropdown: true },
  { href: "/business", label: "Business", hasDropdown: true },
  { href: "/for-drivers", label: "For Drivers", hasDropdown: true },
  { href: "/company", label: "Company", hasDropdown: true },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isTransparent = variant === "transparent";

  return (
    <nav
      className={`w-full ${isTransparent ? "absolute top-0 left-0 z-50" : "bg-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="MyWay"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="px-5 py-2.5 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/waitlist"
              className="px-5 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/20 space-y-2">
              <Link
                href="/login"
                className="block px-4 py-3 text-center text-white border border-white/30 rounded-lg font-medium"
              >
                Log In
              </Link>
              <Link
                href="/waitlist"
                className="block px-4 py-3 text-center text-black bg-white rounded-lg font-medium"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
