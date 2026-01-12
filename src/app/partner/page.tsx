import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="solid" />

      <section className="pt-8 pb-16">
        <div className="max-w-[1440px] mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Future of Airport Mobility
                <br />
                Is Verified, Secure, and
                <br />
                Premium.
              </h1>

              <p className="mt-6 text-gray-600 text-lg max-w-xl">
                MyWay is building Lagos’ first flight-aware, airport-ready shared and solo
                ride platform built for travelers who demand reliability, safety, and premium
                service.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <ButtonLink
                  href="/partner"
                  variant="outlineDark"
                  size="lg"
                  className="min-w-[200px] font-semibold text-center"
                >
                  Partner With Us
                </ButtonLink>
                <ButtonLink
                  href="/contact"
                  variant="dark"
                  size="lg"
                  className="min-w-[200px] font-semibold text-center"
                >
                  Speak With The Team
                </ButtonLink>
              </div>
            </div>

            <div className="relative w-full aspect-[603/655] max-w-[603px] mx-auto">
              <Image
                src="/images/future.png"
                alt="Future of Airport Mobility"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Airport Rides Are Broken Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-3 lg:px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 text-center max-w-4xl mx-auto leading-tight mb-16">
            Airport rides are broken. MyWay is the logical evolution.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Trust collapses */}
            <div className="relative overflow-hidden rounded-3xl aspect-[320/450] group">
              <Image
                src="/images/partner-1.png"
                alt="Trust collapses at the airport curb"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">
                  Trust collapses at the airport curb.
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Airport rides rely on anonymous drivers, opaque verification, and informal accountability.
                </p>
                <p className="text-sm text-gray-200 leading-relaxed mt-2">
                  In a high-risk, high-value environment, trust becomes guesswork not infrastructure.
                </p>
              </div>
            </div>

            {/* Card 2 - Coordination fails */}
            <div className="relative overflow-hidden rounded-3xl aspect-[320/450] group">
              <Image
                src="/images/partner-2.png"
                alt="Airport travel fails because coordination fails"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-100/80 via-transparent to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Airport travel fails because coordination fails.
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Flights are precise. Airport mobility is not. Passengers arrive in synchronized waves, yet rides are matched blindly without flight context, timing awareness, or shared intent.
                </p>
              </div>
            </div>

            {/* Card 3 - Inefficiency is priced in */}
            <div className="relative overflow-hidden rounded-3xl aspect-[320/450] group">
              <Image
                src="/images/partner-3.png"
                alt="Inefficiency is priced into the system"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">
                  Inefficiency is priced into the system.
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  When demand spikes without coordination, pricing becomes volatile. Passengers overpay.
                </p>
                <p className="text-sm text-gray-200 leading-relaxed mt-2">
                  Drivers earn unpredictably. The system optimizes for extraction not efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Airports Section */}
      <section className="bg-white">
        {/* Dark header bar */}
        {/* <div className="bg-gray-900 py-3" /> */}

        <div className="max-w-[1440px] mx-auto px-3 lg:px-4 py-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Built for airports. Built for real travelers.
          </h2>

          <p className="text-gray-600 text-lg max-w-5xl leading-relaxed mb-16">
            MyWay is a premium shared ride network built specifically for airport travelers - combining verified co-passengers, flight-aware matching, professional drivers, and intelligent cost optimization to make airport rides fair, safe, and stress-free.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Flight Awareness */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Flight Awareness & Real-Time Sync
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your ride understands your flight, not the other way round.
              </p>
            </div>

            {/* Feature 2 - Verified Drivers */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Verified Drivers Only
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strict onboarding. Zero tolerance safety policy.
              </p>
            </div>

            {/* Feature 3 - Smart Shared Ride Matching */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Smart Shared Ride Matching
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Safe co-passengers. Lower cost. Higher confidence.
              </p>
            </div>

            {/* Feature 4 - Premium Solo Ride */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Premium Solo Ride Experience
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Because sometimes comfort and privacy matter.
              </p>
            </div>
          </div>
        </div>

        {/* Dark footer bar */}
        <div className="bg-gray-900 py-3" />
      </section>

      {/* Trust & Safety Section */}
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

        <div className="max-w-[1440px] mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/woman.png"
                  alt="Professional MyWay Driver"
                  fill
                  className="object-cover object-center"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent" />
              </div>
            </div>

            {/* Right side - Content */}
            <div>
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span className="text-white text-sm font-medium">
                  Trust & Safety
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Safety isn&apos;t a feature.
                <br />
                It&apos;s the foundation.
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Airport routes are premium routes.
                <br />
                Drivers deserve structure, safety, and reliable earnings.
              </p>

              {/* Features Card with Glass Effect */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
                <div className="space-y-4">
                  {[
                    "Verified identities. No anonymous drivers.",
                    "Strict background & vehicle standards",
                    "Airport-first compliance approach",
                    "Secure rider accountability framework",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {/* Check Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-green-400"
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
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Logic Section */}
      <section className="bg-white">
        {/* Dark header bar */}
        <div className="bg-gray-900 py-3" />

        <div className="max-w-[1440px] mx-auto px-3 lg:px-4 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-8">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span className="text-blue-600 text-sm font-medium">
              Commercial Logic That Actually Makes Sense
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            A premium platform with clear
            <br />
            commercial logic.
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
            MyWay intelligently brings verified travelers together, aligns timing around flights, and creates a calm shared journey all while reducing the cost.
          </p>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Column 1 - Rider Revenue */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Rider Revenue
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold text-gray-900">Shared rides • Solo premium rides • Prime subscription.</span>{" "}
                High-frequency travelers who value reliability create predictable economics.
              </p>
            </div>

            {/* Column 2 - Ecosystem Partnerships */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Ecosystem Partnerships
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold text-gray-900">Airports • Airlines • Hospitality • Corporate travel.</span>{" "}
                Strategic integrations drive recurring demand not random orders.
              </p>
            </div>

            {/* Column 3 - Growth Advantage */}
            <div className="flex flex-col">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Growth Advantage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold text-gray-900">Trust compounds. Verified systems retain users.</span>{" "}
                Airport travelers return and loyalty turns into lifetime value.
              </p>
            </div>
          </div>
        </div>

        {/* Dark footer bar */}
        <div className="bg-gray-900 py-3" />
      </section>

      {/* Premium Travel Infrastructure Section */}
      <section className="relative bg-black overflow-hidden">
        {/* Background Earth Image */}
        <div className="absolute inset-x-0 bottom-0 top-[250px] sm:top-[280px] md:top-[300px]">
          <Image
            src="/images/earth.png"
            alt="MyWay expanding across Africa's travel hubs"
            fill
            className="object-contain object-bottom"
          />
          {/* Decorative horizontal dashed line */}
          <div className="absolute left-0 right-0 top-[65%] z-10 pointer-events-none">
            <div className="max-w-[900px] mx-auto px-8">
              <div className="border-t border-dashed border-cyan-500/40" />
            </div>
          </div>
          {/* Decorative vertical dashed line */}
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 h-32 z-10 pointer-events-none">
            <div className="w-px h-full border-l border-dashed border-cyan-500/40" />
          </div>
        </div>

        {/* Text Content - on top */}
        <div className="relative z-20 pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-[400px] sm:pb-[500px] md:pb-[600px] lg:pb-[700px] text-center">
          <div className="max-w-[1440px] mx-auto px-3 lg:px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
              MyWay isn&apos;t an app. It&apos;s
              <br />
              premium travel infrastructure.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;re building the trusted mobility layer for airport cities starting in Lagos, expanding to Africa&apos;s busiest travel hubs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        {/* Faint airplane background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[400px]"
            viewBox="0 0 600 400"
            fill="none"
          >
            <path
              d="M50 350 L300 200 L550 100 M300 200 L280 320 M300 200 L320 320 M200 250 L300 200 L400 250"
              stroke="currentColor"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            />
          </svg>
        </div>

        {/* Content with dashed border */}
        <div className="max-w-[800px] mx-auto px-4">
          <div className="px-6 py-12 md:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
              Let&apos;s Build The Future of Premium Airport Mobility.
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <ButtonLink
                href="/contact"
                variant="outlineDark"
                size="lg"
                className="min-w-[200px] font-semibold text-center"
              >
                Speak With The Team
              </ButtonLink>
              <ButtonLink
                href="/partner"
                variant="dark"
                size="lg"
                className="min-w-[200px] font-semibold text-center"
              >
                Partner With Us
              </ButtonLink>
            </div>

            {/* Tagline */}
            <p className="text-gray-500 text-sm">
              Built thoughtfully. Built for travelers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
