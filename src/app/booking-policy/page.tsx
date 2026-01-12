"use client";

import { Navbar, Footer } from "@/components/layout";

export default function BookingPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar variant="solid" />

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Booking Policy
          </h1>
          <p className="text-gray-500 italic mb-12">
            Last updated: November 9th, 2025
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Booking scope</h2>
              <p className="leading-relaxed">
                Airport rides, flight-based ride sharing, and related local trips in supported
                cities such as Lagos, Abuja, Port Harcourt, etc.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Pricing and estimates</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Upfront price includes base fare, airport fees, tolls, taxes, and MyWay fees
                  when applicable.
                </li>
                <li>
                  Final price may change if route, stops, wait time, or demand changes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Identification and verification</h2>
              <p className="leading-relaxed">
                For flight-based ride sharing, we may request flight booking reference or
                related details to match co-passengers and schedule pickups.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cancellations and changes</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Free cancellation window: up to 10 minutes after booking if pickup is 30+
                  minutes away; otherwise until driver is en-route.
                </li>
                <li>
                  Late cancellation fee: ₦1,500 if canceled after driver is en-route or within
                  10 minutes of pickup time.
                </li>
                <li>
                  Driver cancellations: if a driver cancels, we’ll attempt to rematch or void
                  any pre-authorization.
                </li>
                <li>
                  Modifications: adding stops, changing destination, or extended wait times may
                  update fares.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. No-shows and wait time</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Standard wait time at pickup: 5 minutes. After that, ₦150 per minute wait fee
                  applies.
                </li>
                <li>
                  If unreachable and not present after 10 minutes, the trip may be marked
                  no-show and a ₦2,000 fee may apply.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Airport pickup rules</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Meet at designated pickup zones and follow airport and security
                  requirements.
                </li>
                <li>
                  Drivers may not wait or stop in prohibited areas; failure to meet at
                  designated areas can result in cancellation or fees.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Safety and conduct</h2>
              <p className="leading-relaxed">
                Respectful behavior required from all parties. Accounts may be suspended for
                unsafe conduct, fraud, harassment, or policy violations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Payments, holds, and refunds</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Payment is processed through third-party processors (e.g., Paystack).
                  Authorization holds may apply.
                </li>
                <li>
                  Refund eligibility depends on trip status, cause of cancellation, and
                  evidence of service failure.
                </li>
                <li>
                  Refunds are returned to the original payment method when approved.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Referrals and promotions</h2>
              <p className="leading-relaxed">
                Referral discounts or credits apply per offer terms and may be revoked for
                abuse or fraud.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Lost items</h2>
              <p className="leading-relaxed">
                Report items via in-app support. MyWay is not liable for loss; we facilitate
                contact where permissible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Support and disputes</h2>
              <p className="leading-relaxed">
                Contact in-app or email {" "}
                <a
                  href="mailto:support@myway.ng"
                  className="text-gray-900 underline font-medium hover:text-gray-600 transition-colors"
                >
                  support@myway.ng
                </a>{" "}
                for billing or service issues. Disputes are handled under the Terms of
                Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Changes</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We may update these rules with notice for material changes.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
