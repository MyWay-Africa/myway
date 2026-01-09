"use client";

import Image from "next/image";

// Features data
const features = [
  {
    title: "Airport-Only Network",
  },
  {
    title: "Work premium airport routes, not chaotic random trips.",
  },
  {
    title: "Verified Riders Only",
  },
  {
    title: "No unknown passengers. No fear",
  },
  {
    title: "Higher Guaranteed Earnings",

  },
  {
    title: "Shared rides = consistent trips = better economics.",
  }
];

export default function DriverSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gray-950 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left decorative lines */}
        <svg
          className="absolute top-0 left-0 w-64 h-64 text-cyan-500/20"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M-20 100 L100 -20" stroke="currentColor" strokeWidth="1" />
          <path d="M-20 120 L120 -20" stroke="currentColor" strokeWidth="1" />
          <path d="M-20 140 L140 -20" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Bottom right decorative lines */}
        <svg
          className="absolute bottom-0 right-0 w-64 h-64 text-amber-500/20"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M220 100 L100 220" stroke="currentColor" strokeWidth="1" />
          <path d="M220 80 L80 220" stroke="currentColor" strokeWidth="1" />
          <path d="M220 60 L60 220" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              <span className="text-white text-sm font-medium">
                MyWay Driver
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Built for Professional
              <br />
              Drivers
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Airport routes are premium routes.
              <br />
              Drivers deserve structure, safety, and reliable earnings.
            </p>

            {/* Features Card with Glass Effect */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Feature Content */}
                    <div>
                      {/* <h4 className="text-white font-semibold">
                        {feature.title}
                      </h4> */}
                      <p className="text-gray-300 text-sm">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Join Driver Waitlist
            </button>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/banner.jpg"
                alt="Professional MyWay Driver"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
