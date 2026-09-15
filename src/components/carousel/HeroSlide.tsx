"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroSlideData } from "@/types";

interface HeroSlideProps {
  slide: HeroSlideData;
  active: boolean;
}

export default function HeroSlide({
  slide,
  active,
}: HeroSlideProps) {
  return (
    <div
      className={`
        absolute inset-0
        transition-opacity
        duration-[1200ms]
        ease-in-out
        ${
          active
            ? "z-10 opacity-100"
            : "z-0 opacity-0"
        }
      `}
      aria-hidden={!active}
    >
      {/* Background image */}
      <Image
        src={slide.image}
        alt=""
        fill
        priority={active}
        sizes="100vw"
        className={`
          object-cover
          transition-transform
          duration-[7000ms]
          ease-out
          ${active ? "scale-105" : "scale-100"}
        `}
      />

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Left gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#07192d]
          via-[#07192d]/75
          via-45%
          to-transparent
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-[#07192d]/80
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          max-w-[1500px]
          items-end
          px-6
          pb-28
          sm:pb-32
          lg:px-10
          lg:pb-36
        "
      >
        <div className="max-w-[720px] text-white">

          {/* Eyebrow */}
          <div
            className={`
              mb-5
              flex
              items-center
              gap-4
              transition-all
              delay-200
              duration-700
              ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <span className="h-[2px] w-12 bg-[var(--ais-orange)]" />

            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--ais-orange)] sm:text-sm">
              {slide.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`
              max-w-[720px]
              text-5xl
              font-medium
              leading-[0.98]
              tracking-[-0.035em]
              transition-all
              delay-300
              duration-700
              sm:text-6xl
              lg:text-[76px]
              xl:text-[88px]
              ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            className={`
              mt-7
              max-w-[560px]
              text-base
              leading-7
              text-white/80
              transition-all
              delay-500
              duration-700
              sm:text-lg
              ${
                active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
          >
            {slide.description}
          </p>

          {/* Buttons */}
          {(slide.primaryAction || slide.secondaryAction) && (
            <div
              className={`
                mt-8
                flex
                flex-wrap
                gap-3
                transition-all
                delay-700
                duration-700
                ${
                  active
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              {slide.primaryAction && (
                <Link
                  href={slide.primaryAction.href}
                  className="
                    rounded-full
                    bg-[var(--ais-orange)]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[var(--ais-orange-dark)]
                  "
                >
                  {slide.primaryAction.label}
                </Link>
              )}

              {slide.secondaryAction && (
                <Link
                  href={slide.secondaryAction.href}
                  className="
                    rounded-full
                    border
                    border-white/40
                    bg-white/5
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[var(--ais-navy)]
                  "
                >
                  {slide.secondaryAction.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}