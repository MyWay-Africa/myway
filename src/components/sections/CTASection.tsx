"use client";

import { Button, ButtonLink } from "@/components/ui";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background decorative airplane illustration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] text-gray-900"
          viewBox="0 0 800 400"
          fill="none"
        >
          {/* Simplified airplane outline */}
          <path
            d="M400 50 L500 150 L750 200 L500 250 L400 350 L300 250 L50 200 L300 150 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="400" cy="200" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M200 200 L600 200" stroke="currentColor" strokeWidth="1" />
          <path d="M400 100 L400 300" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-64 h-64 text-cyan-400/15" viewBox="0 0 200 200" fill="none">
          <path d="M-20 100 L100 -20" stroke="currentColor" strokeWidth="1" />
          <path d="M-20 120 L120 -20" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-amber-400/15" viewBox="0 0 200 200" fill="none">
          <path d="M220 100 L100 220" stroke="currentColor" strokeWidth="1" />
          <path d="M220 80 L80 220" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-3 lg:px-4 text-center relative z-10">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: '#E6F7FD' }}
        >
          <svg
            className="w-4 h-4"
            style={{ color: '#005E7F' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <span className="text-sm font-medium" style={{ color: '#005E7F' }}>
            Be First To Experience MyWay
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          This is how airport travel should
          <br />
          have always been.
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Join the early waitlist to experience safer shared airport rides, verified travelers,
          professional drivers, and fair pricing built for Africa&apos;s busiest airports.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button variant="dark" size="lg" className="min-w-[200px] font-semibold">
            Join the Waitlist
          </Button>
          <ButtonLink href="/partner" variant="outlineDark" size="lg" className="min-w-[200px] font-semibold">
            I&apos;d like to partner / Invest
          </ButtonLink>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-sm">
          Built thoughtfully. Built for travelers.
        </p>
      </div>
    </section>
  );
}
