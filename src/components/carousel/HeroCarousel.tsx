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
      <div
        className="
          absolute
          bottom-9
          right-6
          z-30
          hidden
          items-center
          gap-4
          lg:flex
        "
      >
        <div
          className="
            flex
            h-12
            w-7
            items-start
            justify-center
            rounded-full
            border
            border-white/50
            p-1.5
          "
        >
          <span
            className="
              h-2
              w-1
              animate-bounce
              rounded-full
              bg-white
            "
          />
        </div>

        <span className="max-w-[90px] text-xs leading-4 text-white/70">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}