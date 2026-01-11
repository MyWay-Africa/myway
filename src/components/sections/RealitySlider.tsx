"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  headline: string;
  description: string;
  solution: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/slide-1.jpg",
    headline: "Paying more for the ride than the flight, shouldn't be normal.",
    description:
      "Airport taxis charge whatever they want. Prices fluctuate. Travelers feel trapped because they have no choice. It's unfair and everyone knows it.",
    solution: "MyWay makes airport pricing fair, predictable, and intelligent.",
  },
  {
    id: 2,
    image: "/images/slide-2.png",
    headline: "You shouldn't have to trust a stranger blindly — just to get home.",
    description:
      "Unknown drivers. No real verification. No shared accountability. That unsettling feeling in your chest? Every traveler feels it.",
    solution:
      "MyWay uses verified passengers, verified drivers, and secure shared journeys.",
  },
  {
    id: 3,
    image: "/images/slide-3.png",
    headline: "Airport travel shouldn't feel chaotic.",
    description:
      "Because airport transportation shouldn't feel like a gamble. With MyWay, routes are planned intelligently around flights not randomness. No stress. No chaos. Just clarity.",
    solution:
      "MyWay understands flights, delays, timing, and logistics so you don't have to.",
  },
  {
    id: 4,
    image: "/images/slide-4.png",
    headline: "Airport rides, finally done right.",
    description:
      "Premium shared rides. Fair pricing. Verified co-passengers. Built specifically for Africa's busiest airports.",
    solution:
      "This isn't an upgrade. It's a standard that should have always existed.",
  },
];

export default function RealitySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // // Auto-advance slides every 6 seconds (pause when dragging or at last slide)
  // useEffect(() => {
  //   if (isDragging || isLastSlide) return;
  //   const timer = setInterval(nextSlide, 6000);
  //   return () => clearInterval(timer);
  // }, [nextSlide, isDragging, isLastSlide]);

  // Handle mouse/touch drag
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setTranslateX(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold for slide change (100px)
    if (translateX > 100) {
      prevSlide();
    } else if (translateX < -100) {
      nextSlide();
    }

    setTranslateX(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-3 lg:px-4">
        {/* Section Header */}
        <div className="mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-blue-600 text-sm font-medium">
              The Reality Travelers Face
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Airport travel shouldn&apos;t
            <br />
            punish you.
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 max-w-2xl text-lg">
            For too long, getting home from the airport has meant stress, unfair
            pricing, anxiety, and uncertainty. MyWay fixes what travelers have
            silently accepted for years.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Cards Container - Draggable */}
          <div
            ref={carouselRef}
            className={`flex gap-6 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{
              transform: `translateX(calc(-${currentSlide} * (70% + 24px) + ${translateX}px))`,
              transition: isDragging ? "none" : "transform 0.5s ease-out",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-[85%] md:w-[70%] flex-shrink-0"
              >
                <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group select-none">
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    draggable={false}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 max-w-md leading-tight text-white">
                        {slide.headline}
                      </h3>
                      <p className="text-sm md:text-base max-w-sm leading-relaxed text-white/80">
                        {slide.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-lg md:text-xl font-semibold max-w-md text-white">
                        {slide.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-end gap-2 mt-8">
            <button
              onClick={prevSlide}
              disabled={isFirstSlide}
              className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${isFirstSlide
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
                }`}
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={isLastSlide}
              className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${isLastSlide
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
                }`}
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
