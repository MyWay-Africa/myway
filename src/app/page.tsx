"use client";

import { useState } from "react";
import { Hero, RealitySlider, WhatIsMyWay, HowMyWayWorks, DriverSection, WhyInevitable, CTASection } from "@/components/sections";
import { Footer } from "@/components/layout";
import {
  SlideUp,
} from "@/components/ui";
import { useModal } from "@/hooks";

export default function Home() {
  const { isOpen, open, close } = useModal();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section with integrated navbar */}
      <SlideUp>
        <Hero />
      </SlideUp>

      {/* Reality Slider Section */}
      <SlideUp delay={0.3}>
        <RealitySlider />
      </SlideUp>

      {/* What is MyWay Section */}
      <SlideUp delay={0.3}>
        <WhatIsMyWay />
      </SlideUp>

      {/* How MyWay Works Section */}
      <SlideUp delay={0.3}>
        <HowMyWayWorks />
      </SlideUp>

      {/* Driver Section */}
      <SlideUp delay={0.3}>
        <DriverSection />
      </SlideUp>

      {/* Why MyWay Is Inevitable Section */}
      <SlideUp delay={0.3}>
        <WhyInevitable />
      </SlideUp>

      {/* CTA Section */}
      <SlideUp delay={0.3}>
        <CTASection />
      </SlideUp>

      {/* Footer */}
      <SlideUp delay={0.3}>
        <Footer />
      </SlideUp>
    </div>
  );
}
