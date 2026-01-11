"use client";

import Image from "next/image";

// Steps data
const steps = [
  {
    number: 1,
    title: "Request your airport ride or reserve ahead.",
    description:
      "Tell us your flight, destination, and timing. MyWay understands flights, arrivals, and travel patterns so your experience starts calm, not rushed.",
    image: "/images/how-1.png",
  },
  {
    number: 2,
    title: "You're matched with verified travelers going your way.",
    description:
      "MyWay groups you with travelers who share similar arrival windows and direction balancing timing, distance, and convenience automatically.",
    image: "/images/how-2.png",
  },
  {
    number: 3,
    title: "A professional, airport-ready driver is assigned.",
    description:
      "Your driver is verified, trained for airport operations, and prepared before you even step outside. Vehicles are comfortable, secure, and reliable.",
    image: "/images/how-3.png",
  },
  {
    number: 4,
    title: "A shared journey that feels calm and costs less.",
    description:
      "Travel together, save significantly, and get home safely. No unpredictable pricing. No intimidation. No airport exploitation.",
    image: "/images/how-4.png",
  },
];

export default function HowMyWayWorks() {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative accent lines on sides */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent" />
      <div className="absolute right-0 top-1/3 w-1 h-32 bg-gradient-to-b from-amber-400 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-3 lg:px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <svg
              className="w-4 h-4 text-gray-600"
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
            <span className="text-gray-700 text-sm font-medium">
              How MyWay Works
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seamless, shared airport rides
            <br />
            without the chaos.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            MyWay intelligently brings verified travelers together, aligns
            timing around flights, and creates a calm shared journey all while
            reducing the cost.
          </p>
        </div>

        {/* Steps Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              {/* Step Number */}
              <div className="mb-4">
                <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-emerald-400 to-amber-400 p-[2px]">
                  <div className="flex items-center justify-center w-full h-full rounded-full bg-gray-50 text-gray-700 font-semibold">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Step Image */}
              <div className="flex-1 flex items-end justify-center">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="max-w-md h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
