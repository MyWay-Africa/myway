"use client";

import Image from "next/image";

// Feature data
const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Verified People",
    description: "Passengers + Drivers are verified. You're not dealing with anonymous strangers. This is shared travel with accountability.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Flight-Aware Matching",
    description: "MyWay is designed for airport travel. It understands flights, timelines, delays, grouping logic, not just \"point A to B.\"",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Fair Predictable Pricing",
    description: "People shouldn't pay more for rides than flights. MyWay creates cost fairness via shared intelligent grouping.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Premium Experience",
    description: "Professional drivers. Comfortable rides. Calm, airport-ready experience. This isn't chaos transportation. It's dignified mobility.",
  },
];


export default function WhatIsMyWay() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left decorative lines */}
        <svg className="absolute top-0 left-0 w-64 h-64 text-yellow-400/30" viewBox="0 0 200 200" fill="none">
          <path d="M-20 100 L100 -20" stroke="currentColor" strokeWidth="2" />
          <path d="M-20 120 L120 -20" stroke="currentColor" strokeWidth="2" />
          <path d="M-20 140 L140 -20" stroke="currentColor" strokeWidth="2" />
          <path d="M-20 160 L160 -20" stroke="currentColor" strokeWidth="2" />
        </svg>
        {/* Bottom right decorative lines */}
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-yellow-400/30" viewBox="0 0 200 200" fill="none">
          <path d="M220 100 L100 220" stroke="currentColor" strokeWidth="2" />
          <path d="M220 80 L80 220" stroke="currentColor" strokeWidth="2" />
          <path d="M220 60 L60 220" stroke="currentColor" strokeWidth="2" />
          <path d="M220 40 L40 220" stroke="currentColor" strokeWidth="2" />
        </svg>
        {/* Center left decorative lines */}
        <svg className="absolute top-1/2 -left-10 w-48 h-48 text-cyan-400/20" viewBox="0 0 200 200" fill="none">
          <path d="M0 50 L150 200" stroke="currentColor" strokeWidth="2" />
          <path d="M0 70 L130 200" stroke="currentColor" strokeWidth="2" />
          <path d="M0 90 L110 200" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-3 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Feature Images */}
          <div className="relative order-2 lg:order-1">
            {/* Desktop Image - hidden on mobile */}
            <div className="hidden md:block">
              <Image
                src="/images/what-is-myway-desktop.png"
                alt="MyWay Features - Flight verification, verified passengers, intelligent grouping, and fair pricing"
                width={600}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Mobile Image - shown only on mobile */}
            <div className="block md:hidden">
              <Image
                src="/images/what-is-myway-mobile.png"
                alt="MyWay Features - Flight verification, verified passengers, intelligent grouping, and fair pricing"
                width={400}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: '#E6F7FD' }}
            >
              <svg 
                className="w-4 h-4" 
                style={{ color: '#005E7F' }} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-medium" style={{ color: '#005E7F' }}>What MyWay is Really Is</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What is MyWay?
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              MyWay is a premium shared ride network built specifically for airport travelers
              combining verified co-passengers, flight-aware matching, professional drivers,
              and intelligent cost optimization to make airport rides fair, safe, and stress-free.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-gray-700">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
