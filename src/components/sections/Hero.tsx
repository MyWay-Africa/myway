import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { Button, ButtonLink } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.jpg"
          alt="MyWay Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <Navbar variant="transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-3 lg:px-4">
        <div className="text-left sm:text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <svg
              className="w-4 h-4 text-purple-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white text-sm font-medium">
              Launching first in Lagos
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Shared Airport Rides
            <br />
            <span className="text-white">Built for Africa.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl sm:mx-auto leading-relaxed">
            Safe verified co-passengers, flight-aware matching, and
            <br className="hidden sm:block" />
            up to 70% savings without compromising comfort.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center">
            <Button
              variant="light"
              size="xl"
              className="text-center font-semibold shadow-lg hover:shadow-xl"
              onClick={() => {
                const el = document.getElementById("how-myway-works");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See How It Works
            </Button>
            <ButtonLink
              href="/waitlist"
              variant="outlineLight"
              size="xl"
              className="text-center font-semibold border-white"
            >
              Join the Waitlist
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
