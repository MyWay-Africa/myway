"use client";

import { Navbar, Footer } from "@/components/layout";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <Navbar variant="solid" />

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 italic mb-12">
            Last updated: November 9th, 2025
          </p>

          <div className="space-y-8 text-gray-700">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                1. Overview
              </h2>
              <p className="leading-relaxed">
                This Privacy Policy explains what personal data we collect, how we use it, and your rights. It applies to the MyWay app, website, and related services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                2. Data we collect
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account data:</strong> name, email, phone number, profile details.</li>
                <li><strong>Identity and verification:</strong> optional IDs or flight info to match co-passengers.</li>
                <li><strong>Trip and booking data:</strong> pickup and dropoff, route, time, price, wait time, cancellations.</li>
                <li><strong>Device and usage data:</strong> app logs, IP address, device identifiers, crash reports.</li>
                <li><strong>Payment data:</strong> handled by processors (e.g., Paystack). We receive tokens and transaction metadata, not full card numbers.</li>
                <li><strong>Communications:</strong> support requests, ratings, feedback, referral activity.</li>
                <li><strong>Cookies</strong> and similar technologies on our sites and dashboards.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                3. How we use your data
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Provide core features:</strong> account, search, booking, routing, payments, receipts.</li>
                <li><strong>Safety and trust:</strong> verification, fraud detection, driver and co-passenger matching, incident response.</li>
                <li><strong>Improve and analyze:</strong> product analytics with providers such as Segment, Amplitude, and Google Analytics.</li>
                <li><strong>Communications:</strong> transactional emails and notifications about trips, receipts, and changes.</li>
                <li><strong>Marketing:</strong> with your consent and subject to opt-out controls, including referrals and promotions.</li>
                <li><strong>Legal compliance:</strong> tax, regulatory, airport rules, and lawful requests.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. Legal bases
              </h2>
              <p className="leading-relaxed">
                Contract performance, legitimate interests, consent where required, and legal obligations.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5. Sharing your data
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Drivers and co-passengers:</strong> limited trip info for coordination and safety.</li>
                <li><strong>Payment processors:</strong> to complete transactions (e.g., Paystack).</li>
                <li><strong>Service providers:</strong> cloud hosting, analytics, customer support, fraud prevention.</li>
                <li><strong>Law enforcement or regulators:</strong> when required by applicable law.</li>
                <li><strong>Business transfers:</strong> in connection with mergers, acquisitions, or financing.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                6. Data retention
              </h2>
              <p className="leading-relaxed">
                We retain data as needed for service provision, safety, legal, and tax obligations, then delete or anonymize.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                7. International transfers
              </h2>
              <p className="leading-relaxed">
                If data is transferred outside your country, we use appropriate safeguards where required by law.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Your rights
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access, correction, deletion, portability, and objection or restriction where applicable.</li>
                <li>Marketing opt-out via in-app controls or unsubscribe links.</li>
                <li>Manage location and notification permissions in device settings.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                9. Children
              </h2>
              <p className="leading-relaxed">
                MyWay is not directed to children under 18, and we do not knowingly collect their data.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                10. Security
              </h2>
              <p className="leading-relaxed">
                We use administrative, technical, and organizational measures to protect data. No method is 100% secure.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                11. Changes
              </h2>
              <p className="leading-relaxed">
                We may update this Policy and will notify you of material changes.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                12. Contact
              </h2>
              <p className="leading-relaxed">
                MYWAY TECHNOLOGIES LIMITED
              </p>
              <p className="leading-relaxed">
                DPO/Privacy:{" "}
                <a
                  href="mailto:privacy@myway.ng"
                  className="text-gray-900 underline font-medium hover:text-gray-600 transition-colors"
                >
                  privacy@myway.ng
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
