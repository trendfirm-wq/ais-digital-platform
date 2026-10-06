"use client";

import { useCallback, useEffect, useState } from "react";
import HeroSlide from "./HeroSlide";
import CarouselControls from "./CarouselControls";
import { HeroSlideData } from "@/types";

interface HeroCarouselProps {
  slides: HeroSlideData[];
  interval?: number;
  autoPlay?: boolean;
}

export default function HeroCarousel({
  slides,
  interval = 7000,
  autoPlay = true,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;

  const next = useCallback(() => {
    setCurrent((previous) =>
      previous === total - 1 ? 0 : previous + 1
    );
  }, [total]);

  const previous = useCallback(() => {
    setCurrent((previous) =>
      previous === 0 ? total - 1 : previous - 1
    );
  }, [total]);

  useEffect(() => {
    if (!autoPlay || paused || total <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      next();
    }, interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    autoPlay,
    paused,
    interval,
    next,
    total,
  ]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [next, previous]);

  if (!slides.length) {
    return null;
  }

  return (
    <section
      className="
        relative
        h-[720px]
        min-h-[680px]
        overflow-hidden
        bg-[var(--ais-navy)]
        sm:h-[760px]
        lg:h-[calc(100vh-0px)]
        lg:min-h-[720px]
      "
      aria-label="Featured AIS stories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          active={index === current}
        />
      ))}

      {/* Navigation */}
      {total > 1 && (
        <CarouselControls
          current={current}
          total={total}
          onPrevious={previous}
          onNext={next}
          onSelect={setCurrent}
        />
      )}

      {/* Scroll indicator */}
      
    </section>
  );
}