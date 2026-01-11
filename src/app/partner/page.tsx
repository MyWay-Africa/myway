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
    </main>
  );
}
