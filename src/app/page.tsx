"use client";

import { useState } from "react";
import { Hero, RealitySlider, WhatIsMyWay, HowMyWayWorks, DriverSection, WhyInevitable, CTASection } from "@/components/sections";
import { Footer } from "@/components/layout";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Modal,
  Badge,
  Avatar,
} from "@/components/ui";
import { useModal } from "@/hooks";

export default function Home() {
  const { isOpen, open, close } = useModal();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section with integrated navbar */}
      <Hero />

      {/* Reality Slider Section */}
      <RealitySlider />

      {/* What is MyWay Section */}
      <WhatIsMyWay />

      {/* How MyWay Works Section */}
      <HowMyWayWorks />

      {/* Driver Section */}
      <DriverSection />

      {/* Why MyWay Is Inevitable Section */}
      <WhyInevitable />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
