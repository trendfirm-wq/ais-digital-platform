"use client";

import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/animations/Reveal";
import ImageReveal from "@/components/animations/ImageReveal";
import Parallax from "@/components/animations/Parallax";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[var(--ais-navy)] py-28 text-white lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">

          {/* =====================================================
              LEFT — IMAGE COMPOSITION
          ====================================================== */}
          <div className="relative min-h-[520px] lg:col-span-7">

            {/* Main image */}
            <ImageReveal
              direction="left"
              className="
                absolute
                left-0
                top-10
                h-[380px]
                w-[72%]
                sm:h-[470px]
                lg:h-[520px]
              "
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/home/ais-learning.jpg"
                  alt="Students learning at T.I. Ahmadiyya International School"
                  fill
                  sizes="(max-width: 1024px) 70vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ImageReveal>

            {/* Secondary image */}
            <ImageReveal
              direction="right"
              className="
                absolute
                bottom-0
                right-0
                z-10
                h-[210px]
                w-[42%]
                border-[10px]
                border-[var(--ais-navy)]
                sm:h-[260px]
                lg:h-[300px]
              "
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/home/ais-students.jpg"
                  alt="Students at AIS"
                  fill
                  sizes="(max-width: 1024px) 40vw, 30vw"
                  className="object-cover"
                />
              </div>
            </ImageReveal>

            {/* Orange accent */}
            <Reveal
              direction="up"
              delay={0.7}
              duration={0.8}
            >
              <div className="absolute bottom-8 left-[10%] z-20 h-16 w-16 bg-[var(--ais-orange)] sm:h-20 sm:w-20" />
            </Reveal>

            {/* Vertical label */}
            <Reveal
              direction="left"
              delay={0.3}
              className="absolute left-0 top-0 z-20 hidden -translate-x-full pr-5 lg:block"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]">
                Discover AIS
              </span>
            </Reveal>
          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}
          <div className="lg:col-span-5 lg:pl-8 xl:pl-14">

            <Reveal direction="right">
              <div>

                {/* Eyebrow */}
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-[var(--ais-orange)]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--ais-orange)]">
                    Who We Are
                  </span>
                </div>

                {/* Heading */}
                <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl xl:text-7xl">
                  More than a school.
                  <br />

                  <span className="text-white/45">
                    A foundation for life.
                  </span>
                </h2>

                {/* Paragraph */}
                <p className="mt-8 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
                  T.I. Ahmadiyya International School provides an
                  environment where learning, character and personal
                  development come together.
                </p>

                <p className="mt-5 max-w-lg text-base leading-8 text-white/65">
                  Explore our story, our educational philosophy and
                  the values that shape the AIS experience.
                </p>

                {/* CTA */}
                <Link
                  href="/about"
                  className="
                    mt-9
                    inline-flex
                    items-center
                    gap-4
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:gap-6
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--ais-orange)]
                      transition-transform
                      duration-300
                      hover:scale-110
                    "
                  >
                    →
                  </span>

                  Discover AIS
                </Link>

              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* =====================================================
          BACKGROUND PARALLAX
      ====================================================== */}
      <Parallax
        amount={100}
        className="
          pointer-events-none
          absolute
          -bottom-16
          right-0
          hidden
          lg:block
        "
      >
        <div className="select-none text-[220px] font-black leading-none text-white/[0.025]">
          AIS
        </div>
      </Parallax>
    </section>
  );
}