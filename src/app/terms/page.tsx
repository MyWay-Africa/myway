"use client";

import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar variant="solid" />

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 italic mb-12">
            Last updated: November 9th, 2025
          </p>

          <div className="space-y-8 text-gray-700">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                1. Who we are and what we do
              </h2>
              <p className="leading-relaxed">
                MyWay is a platform by MYWAY TECHNOLOGIES LIMITED that helps passengers connect with vetted drivers and co-passengers, including flight-based ride sharing for airport transport in Lagos and other supported cities.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                2. Your relationship with MyWay
              </h2>
              <p className="leading-relaxed">
                By creating an account or using the app, you agree to these Terms. If you use MyWay on behalf of an organization, you confirm you are authorized to bind that organization.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                3. Eligibility and accounts
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must be at least 18.</li>
                <li>Keep your account information accurate and secure. You are responsible for all activity under your account.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. The MyWay service
              </h2>
              <p className="leading-relaxed">
                MyWay facilitates bookings between passengers and independent drivers. MyWay is not a transportation carrier and does not provide transport services.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5. User Conduct
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No unlawful, abusive, or unsafe behavior.</li>
                <li>Comply with local laws and airport rules.</li>
                <li>No fraud, false identities, or unjustified chargebacks.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                6. Pricing, fees, and payments
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You agree to pay fares, tolls, airport fees, surcharges, taxes, and applicable MyWay service fees shown at checkout.</li>
                <li>Payment is processed by third-party providers (e.g., Paystack). MyWay does not store full card details.</li>
                <li>We may place authorization holds and adjust fares for route changes, wait time, extra stops, no-shows, or dynamic demand.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                7. Cancellations and no-shows
              </h2>
              <p className="leading-relaxed">
                See the{" "}
                <Link href="/booking-policy" className="text-gray-900 underline font-medium hover:text-gray-600 transition-colors">
                  Booking Policy
                </Link>{" "}
                for detailed rules. Administrative fees may apply for late cancellations or no-shows.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Safety and verification
              </h2>
              <p className="leading-relaxed">
                MyWay may verify drivers, vehicles, and co-passengers (including matching to flight details) to improve safety. You acknowledge inherent risks in ridesharing and agree to follow in-app safety guidance.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                9. Referrals, promotions, and subscriptions
              </h2>
              <p className="leading-relaxed">
                Referral and promo codes are subject to specific terms, expiry, geographic limits, and fraud review. Abuse may void credits.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                10. Third-party services
              </h2>
              <p className="leading-relaxed">
                Third-party terms may apply (e.g., payment processors, mapping and navigation providers). You agree to comply with their terms where applicable.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                11. Content and IP
              </h2>
              <p className="leading-relaxed">
                MyWay owns the app, brand, and content except user-generated content you submit. You grant MyWay a worldwide, royalty-free license to use submitted content to operate and improve the service.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                12. Reviews and feedback
              </h2>
              <p className="leading-relaxed">
                You may submit feedback; we may use it without obligation or compensation.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                13. Suspension and termination
              </h2>
              <p className="leading-relaxed">
                We may suspend or terminate accounts for policy violations, fraud, or safety concerns, with or without notice as allowed by law. You may delete your account anytime.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                14. Disclaimers
              </h2>
              <p className="leading-relaxed">
                The service is provided &quot;as is.&quot; To the maximum extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                15. Limitation of liability
              </h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, MyWay is not liable for indirect, incidental, special, or consequential damages. Our aggregate liability will not exceed the amounts you paid to MyWay in the past 6 months.
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                16. Indemnity
              </h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold MyWay harmless from claims arising from your misuse, violation of laws, or breach of these Terms.
              </p>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                17. Governing law and dispute resolution
              </h2>
              <p className="leading-relaxed mb-2">
                Governing law: Nigeria
              </p>
              <p className="leading-relaxed">
                Disputes will be resolved through good-faith negotiation, then binding arbitration seated in Lagos, except claims that must be brought in court by law.
              </p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                18. Changes
              </h2>
              <p className="leading-relaxed">
                We may update these Terms. Material changes will be notified in-app or by email and become effective upon posting or as stated.
              </p>
            </section>

            {/* Section 19 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                19. Contact
              </h2>
              <p className="leading-relaxed">
                MYWAY TECHNOLOGIES LIMITED
              </p>
              <p className="leading-relaxed">
                Support:{" "}
                <a
                  href="mailto:Support@myway.ng"
                  className="text-gray-900 underline font-medium hover:text-gray-600 transition-colors"
                >
                  Support@myway.ng
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
