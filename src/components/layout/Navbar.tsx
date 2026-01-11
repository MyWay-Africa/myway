"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button, ButtonLink } from "@/components/ui";

interface SubMenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  comingSoon?: boolean;
}

interface NavSection {
  id: string;
  label: string;
  items: SubMenuItem[];
  ctaText: string;
  ctaHref: string;
}

const navSections: NavSection[] = [
  {
    id: "platform",
    label: "Platform",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="10" r="3" />
            <path d="M12 13v4" />
          </svg>
        ),
        title: "How MyWay works",
        description: "A clearer way to move through airports.",
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        ),
        title: "Safety & Trust",
        description: "Verification, accountability, and control.",
        comingSoon: true,
      },
    ],
    ctaText: "Want early access? Join the waitlist",
    ctaHref: "/waitlist",
  },
  {
    id: "for-travelers",
    label: "For Travelers",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="7" r="3" />
            <circle cx="15" cy="7" r="3" />
            <path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
          </svg>
        ),
        title: "Premium Shared Rides",
        description: "Calm, airport-first shared trips.",
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="8" width="18" height="10" rx="2" />
            <path d="M7 12h.01M12 12h.01M17 12h.01" />
          </svg>
        ),
        title: "Built for Peace of Mind",
        description: "No surprises. No guesswork.",
      },
    ],
    ctaText: "Experience MyWay first",
    ctaHref: "/waitlist",
  },
  {
    id: "for-drivers",
    label: "For Drivers",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M17 7h4v4" />
          </svg>
        ),
        title: "Earn More from Airports",
        description: "Consistent demand from verified trips.",
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6h16M4 10h16M4 14h10M4 18h6" />
          </svg>
        ),
        title: "Transparent Earnings",
        description: "Clear pricing. Clear payouts.",
      },
    ],
    ctaText: "Join Driver Waitlist",
    ctaHref: "/drivers/waitlist",
  },
  {
    id: "for-businesses",
    label: "For Businesses",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
            <path d="M6 8v2M6 14v2M18 8v2M18 14v2M8 6h2M14 6h2M8 18h2M14 18h2" />
          </svg>
        ),
        title: "Partnerships & Enterprise",
        description: "Long-term mobility partnerships.",
        comingSoon: true,
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="8" width="18" height="12" rx="2" />
            <path d="M3 12h18M7 16h2" />
          </svg>
        ),
        title: "Airport & Institutional Partners",
        description: "Infrastructure-aligned integrations.",
        comingSoon: true,
      },
    ],
    ctaText: "Join the Partnership Waitlist",
    ctaHref: "/partnerships/waitlist",
  },
  {
    id: "company",
    label: "Company",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
          </svg>
        ),
        title: "About MyWay",
        description: "Fixing airport travel in Africa. Building trusted airport mobility in Africa.",
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        ),
        title: "Partnerships & Investors",
        description: "Let's build together.",
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        ),
        title: "Contact",
        description: "Talk to the MyWay team.",
      },
    ],
    ctaText: "Reach Out",
    ctaHref: "/contact",
  },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [menuVisible, setMenuVisible] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const isTransparent = variant === "transparent";

  // Handle menu open animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Small delay to trigger animation
      requestAnimationFrame(() => {
        setMenuVisible(true);
      });
    }
  }, [isMobileMenuOpen]);

  const handleSectionClick = (sectionId: string) => {
    setSlideDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(sectionId);
      setIsAnimating(false);
    }, 50);
  };

  const handleBack = () => {
    setSlideDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(null);
      setIsAnimating(false);
    }, 50);
  };

  const handleClose = () => {
    setMenuVisible(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setActiveSection(null);
    }, 300);
  };

  const currentSection = navSections.find((s) => s.id === activeSection);

  return (
    <>
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .menu-overlay {
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }

        .menu-overlay.visible {
          opacity: 1;
        }

        .menu-content {
          transform: translateY(-10px);
          opacity: 0;
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        }

        .menu-overlay.visible .menu-content {
          transform: translateY(0);
          opacity: 1;
        }

        .slide-from-right {
          animation: slideInFromRight 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .slide-from-left {
          animation: slideInFromLeft 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .menu-item {
          opacity: 0;
          animation: fadeSlideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .submenu-item {
          opacity: 0;
          animation: fadeSlideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .cta-button {
          opacity: 0;
          animation: scaleIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .header-animate {
          opacity: 0;
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      <nav
        className={`w-full ${isTransparent ? "absolute top-0 left-0 z-50" : "bg-white border-b border-gray-100"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 lg:px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-white.png"
                alt="MyWay"
                width={140}
                height={40}
                className={`h-8 w-auto ${!isTransparent ? "invert" : ""}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navSections.map((section) => (
                <Link
                  key={section.id}
                  href={`/${section.id}`}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                    }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant={isTransparent ? "outlineLight" : "outlineDark"}
                size="md"
                className="px-5 py-2.5 text-sm"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Log In
              </Button>
              <ButtonLink
                href="/waitlist"
                variant={isTransparent ? "light" : "dark"}
                size="md"
                className="px-5 py-2.5 text-sm"
              >
                Join the Waitlist
              </ButtonLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-transform duration-200 hover:scale-110 ${isTransparent ? "text-white" : "text-gray-900"
                }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
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

        {/* Mobile Navigation - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto menu-overlay ${menuVisible ? 'visible' : ''}`}>
            {/* Main Menu View */}
            {!activeSection && (
              <div className={`min-h-screen flex flex-col menu-content ${slideDirection === 'left' && !isAnimating ? 'slide-from-left' : ''}`}>
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-5 header-animate">
                  <Link href="/" onClick={handleClose}>
                    <Image
                      src="/images/logo-white.png"
                      alt="MyWay"
                      width={120}
                      height={35}
                      className="h-7 w-auto invert"
                    />
                  </Link>
                  <button
                    onClick={handleClose}
                    className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:rotate-90"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 px-5 pt-8">
                  {navSections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className="menu-item w-full flex items-center justify-between py-4 text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:pl-2 group"
                      style={{ animationDelay: `${index * 60 + 100}ms` }}
                    >
                      <span className="text-base font-medium">{section.label}</span>
                      <svg
                        className="w-5 h-5 text-gray-400 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Submenu View */}
            {activeSection && currentSection && (
              <div className={`min-h-screen flex flex-col ${slideDirection === 'right' ? 'slide-from-right' : 'slide-from-left'}`}>
                {/* Header with Back and Close */}
                <div className="flex items-center justify-between px-5 py-5 header-animate">
                  <button
                    onClick={handleBack}
                    className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 -ml-2 hover:-translate-x-1"
                    aria-label="Go back"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleClose}
                    className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:rotate-90"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Section Title */}
                <div
                  className="px-5 pt-4 pb-2 submenu-item"
                  style={{ animationDelay: '50ms' }}
                >
                  <h2 className="text-base font-medium text-gray-500">{currentSection.label}</h2>
                </div>

                {/* Submenu Items */}
                <div className="flex-1 px-5">
                  {currentSection.items.map((item, index) => (
                    <div
                      key={index}
                      className="py-4 submenu-item"
                      style={{ animationDelay: `${index * 80 + 100}ms` }}
                    >
                      <div className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-all duration-200">
                        <div className="flex-shrink-0 text-gray-900 transition-transform duration-200 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                            {item.comingSoon && (
                              <span className="px-2.5 py-0.5 text-xs font-medium text-cyan-600 bg-cyan-50 border border-cyan-200 rounded-full">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="p-5 mt-auto">
                  <Link
                    href={currentSection.ctaHref}
                    onClick={handleClose}
                    className="cta-button block w-full py-4 px-6 text-center text-white bg-gray-900 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ animationDelay: `${currentSection.items.length * 80 + 200}ms` }}
                  >
                    {currentSection.ctaText}
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsLoginModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-[scaleIn_0.3s_ease-out]">
            {/* Close Button */}
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo/Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30" />
                <div className="absolute inset-2 rounded-full border-4 border-cyan-500/50" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">3</span>
                </div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-4 bg-cyan-400 rounded-t-full opacity-60" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-4 bg-cyan-400 rounded-b-full opacity-60" />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                We&apos;re preparing something exceptional.
              </h2>
              <p className="text-gray-500">
                MyWay is launching soon in Lagos.<br />
                Join the waitlist to get early access when we go live.
              </p>
            </div>

            {/* CTA Button */}
            <ButtonLink
              href="/waitlist"
              variant="dark"
              size="xl"
              className="w-full rounded-xl font-medium"
              onClick={() => setIsLoginModalOpen(false)}
            >
              Join the Waitlist
            </ButtonLink>
          </div>
        </div>
      )}
    </>
  );
}
