"use client";

import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/animations/Reveal";
import ImageReveal from "@/components/animations/ImageReveal";
import Parallax from "@/components/animations/Parallax";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[var(--ais-blue)] py-28 text-white lg:py-40">
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--ais-blue-light)]/20
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-160px]
          left-[-160px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--ais-peach)]/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-12 lg:gap-12">
          {/* =================================================
              LEFT — IMAGE COMPOSITION
          ================================================== */}

          <div className="relative min-h-[540px] lg:col-span-7 lg:min-h-[650px]">
            {/* Peach accent block */}

            <Reveal
              direction="left"
              delay={0.2}
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[5%]
                  top-0
                  z-0
                  h-24
                  w-24
                  bg-[var(--ais-peach)]
                  sm:h-32
                  sm:w-32
                  lg:h-40
                  lg:w-40
                "
              />
            </Reveal>

            {/* Main image */}

            <ImageReveal
              direction="left"
              duration={1.15}
              className="
                absolute
                left-0
                top-10
                h-[380px]
                w-[82%]
                overflow-hidden
                sm:h-[470px]
                sm:w-[76%]
                lg:top-14
                lg:h-[570px]
                lg:w-[74%]
              "
            >
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src="/images/home/ais-learning.jpg"
                  alt="Students learning at T.I. Ahmadiyya International School"
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 76vw, 52vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-[1.04]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* Image caption */}

                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ais-peach)]">
                    Learning at AIS
                  </span>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/70">
                    Learning that develops the whole student.
                  </p>
                </div>
              </div>
            </ImageReveal>

            {/* Secondary image */}

            <ImageReveal
              direction="right"
              delay={0.2}
              duration={1.1}
              className="
                absolute
                bottom-0
                right-0
                z-10
                h-[215px]
                w-[48%]
                overflow-hidden
                border-[8px]
                border-[var(--ais-blue)]
                sm:h-[270px]
                sm:w-[45%]
                sm:border-[10px]
                lg:h-[315px]
                lg:w-[43%]
                lg:border-[12px]
              "
            >
              <div className="group relative h-full w-full overflow-hidden">
                <Image
                  src="/images/home/ais-students.jpg"
                  alt="Students at T.I. Ahmadiyya International School"
                  fill
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 45vw, 30vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-[1.05]
                  "
                />

                <div className="absolute inset-0 bg-[var(--ais-blue)]/10 mix-blend-multiply" />
              </div>
            </ImageReveal>

            {/* Peach number block */}

            <Reveal
              direction="up"
              delay={0.65}
            >
              <div
                className="
                  absolute
                  bottom-[19%]
                  left-[8%]
                  z-20
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  bg-[var(--ais-peach)]
                  text-[var(--ais-black)]
                  shadow-xl
                  sm:h-20
                  sm:w-20
                  lg:h-24
                  lg:w-24
                "
              >
                <span className="text-xl font-bold tracking-[-0.04em] lg:text-2xl">
                  01
                </span>
              </div>
            </Reveal>

            {/* Vertical label */}

            <Reveal
              direction="left"
              delay={0.3}
              className="
                absolute
                left-0
                top-0
                z-20
                hidden
                -translate-x-full
                pr-5
                lg:block
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-white/35
                  [writing-mode:vertical-rl]
                "
              >
                Discover AIS
              </span>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT — CONTENT
          ================================================== */}

          <div className="lg:col-span-5 lg:pl-8 xl:pl-14">
            <Reveal direction="right">
              <div>
                {/* Eyebrow */}

                <div className="mb-7 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-[var(--ais-peach)]" />

                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--ais-peach)]">
                    Who We Are
                  </span>
                </div>

                {/* Heading */}

                <h2
                  className="
                    max-w-xl
                    text-4xl
                    font-medium
                    leading-[0.98]
                    tracking-[-0.045em]
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-7xl
                  "
                >
                  More than a school.
                  <br />

                  <span className="text-white/35">
                    A foundation for life.
                  </span>
                </h2>

                {/* Main paragraph */}

                <p className="mt-9 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
                  T.I. Ahmadiyya International School provides an
                  environment where learning, character and personal
                  development come together.
                </p>

                {/* Secondary paragraph */}

                <p className="mt-5 max-w-lg text-base leading-8 text-white/45">
                  Explore our story, educational philosophy and the values
                  that shape the AIS experience.
                </p>

                {/* CTA */}

                <Link
                  href="/about"
                  className="
                    group
                    mt-10
                    inline-flex
                    items-center
                    gap-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-white
                  "
                >
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--ais-peach)]
                      text-[var(--ais-black)]
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:bg-white
                    "
                  >
                    →
                  </span>

                  <span className="relative pb-2">
                    Discover AIS

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-full
                        origin-left
                        bg-[var(--ais-peach)]
                        transition-transform
                        duration-300
                        group-hover:scale-x-0
                      "
                    />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <Reveal
          direction="up"
          delay={0.25}
        >
          <div
            className="
              mt-20
              grid
              gap-6
              border-t
              border-white/10
              pt-8
              lg:mt-28
              lg:grid-cols-12
              lg:items-center
            "
          >
            <div className="lg:col-span-7">
              <p className="text-sm leading-7 text-white/40">
                A school community built around learning, character,
                confidence and opportunity.
              </p>
            </div>

            <div className="flex items-center gap-4 lg:col-span-5 lg:justify-end">
              <span className="h-px w-16 bg-[var(--ais-peach)]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
                T.I. Ahmadiyya International School
              </span>
            </div>
          </div>
        </Reveal>
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
        <div
          className="
            select-none
            text-[220px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-white/[0.025]
            xl:text-[280px]
          "
        >
          AIS
        </div>
      </Parallax>
    </section>
  );
}