import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
  badge?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { href: "/how-myway-works", label: "How MyWay Works" },
      { href: "/for-travelers", label: "For Travelers" },
      { href: "/safety-trust", label: "Safety & Trust", badge: "Coming Soon" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/partnerships", label: "Partnerships / Investors" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal / Trust",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy" },
      { href: "/booking-policy", label: "Booking Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Blue accent line at the top */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400" />

      <div className="max-w-[1440px] mx-auto px-3 lg:px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.png"
                alt="MyWay"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Airport rides, finally done right.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-3">
              <h3 className="text-white font-medium text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-transparent border border-blue-400 text-blue-400 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 MyWay Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
