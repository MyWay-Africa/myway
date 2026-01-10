"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout";
import { Button, SlideUp } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar variant="solid" />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl w-full text-center">
          <SlideUp>
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
              We&apos;re building the future of airport mobility. This page is currently under construction or doesn&apos;t exist.
            </p>

            <Link href="/">
              <Button size="lg" className="min-w-[200px]">
                Return Home
              </Button>
            </Link>
          </SlideUp>
        </div>
      </main>

      <Footer />
    </div>
  );
}
