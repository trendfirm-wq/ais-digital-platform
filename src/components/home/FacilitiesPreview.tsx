"use client";

import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/animations/Reveal";
import ImageReveal from "@/components/animations/ImageReveal";
import Parallax from "@/components/animations/Parallax";
import Stagger from "@/components/animations/Stagger";

const facilities = [
  {
    number: "01",
    title: "Learning Spaces",
    description:
      "Purposeful environments designed to support learning, collaboration and discovery.",
  },
  {
    number: "02",
    title: "Sports",
    description:
      "Spaces that encourage movement, teamwork and an active school experience.",
  },
  {
    number: "03",
    title: "Creative Spaces",
    description:
      "Environments where students can explore creativity, expression and culture.",
  },
  {
    number: "04",
    title: "Campus Community",
    description:
      "Spaces that bring students, staff and the wider AIS community together.",
  },
];

export default function FacilitiesPreview() {
  return (
    <section className="relative overflow-hidden bg-[var(--ais-blue-dark)] text-white">
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
          bottom-[-150px]
          left-[-150px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--ais-peach)]/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 lg:px-12 lg:py-36">
        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal
            direction="left"
            className="lg:col-span-8"
          >
            <div>
              {/* Eyebrow */}

              <div className="mb-7 flex items-center gap-4">
                <span className="h-[2px] w-14 bg-[var(--ais-peach)]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--ais-peach)]">
                  Our Campus
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  max-w-5xl
                  text-5xl
                  font-medium
                  leading-[0.92]
                  tracking-[-0.055em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[88px]
                "
              >
                Spaces that make
                <br />

                <span className="text-white/35">
                  learning come alive.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={0.15}
            className="lg:col-span-4 lg:col-start-9"
          >
            <div className="border-l border-white/20 pl-6 lg:pl-8">
              <p className="max-w-md text-base leading-8 text-white/60 sm:text-lg">
                Explore the environments that form part of the AIS
                experience — spaces designed for learning, creativity,
                movement and community.
              </p>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            IMAGE COMPOSITION
        ====================================================== */}

        <div className="relative mt-16 min-h-[650px] sm:mt-20 lg:mt-28 lg:min-h-[800px]">
          {/* =================================================
              PEACH ACCENT BLOCK
          ================================================== */}

          <Reveal
            direction="left"
            delay={0.2}
          >
            <div
              aria-hidden="true"
              className="
                absolute
                left-[4%]
                top-[7%]
                z-0
                h-[100px]
                w-[100px]
                bg-[var(--ais-peach)]
                sm:h-[135px]
                sm:w-[135px]
                lg:h-[180px]
                lg:w-[180px]
              "
            />
          </Reveal>

          {/* =================================================
              MAIN CAMPUS IMAGE
          ================================================== */}

          <ImageReveal
            direction="left"
            duration={1.15}
            className="
              absolute
              left-0
              top-0
              h-[400px]
              w-[92%]
              overflow-hidden
              sm:h-[510px]
              sm:w-[87%]
              lg:h-[690px]
              lg:w-[76%]
            "
          >
            <div className="group relative h-full w-full overflow-hidden">
              <Image
                src="/images/facilities/campus.jpg"
                alt="T.I. Ahmadiyya International School campus"
                fill
                priority={false}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 87vw, 76vw"
                className="
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  group-hover:scale-[1.04]
                "
              />

              {/* Image gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Image information */}

              <div className="absolute bottom-0 left-0 p-7 sm:p-9 lg:p-11">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ais-peach)]">
                  AIS Campus
                </span>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                  An environment designed to give students room to learn,
                  grow and belong.
                </p>
              </div>
            </div>
          </ImageReveal>

          {/* =================================================
              SECONDARY IMAGE
          ================================================== */}

          <ImageReveal
            direction="right"
            delay={0.2}
            duration={1.15}
            className="
              absolute
              bottom-0
              right-0
              z-10
              h-[245px]
              w-[63%]
              overflow-hidden
              border-[8px]
              border-[var(--ais-blue-dark)]
              sm:h-[330px]
              sm:w-[53%]
              sm:border-[10px]
              lg:h-[430px]
              lg:w-[39%]
              lg:border-[14px]
            "
          >
            <div className="group relative h-full w-full overflow-hidden">
              <Image
                src="/images/facilities/learning-space.jpg"
                alt="Learning space at AIS"
                fill
                sizes="(max-width: 640px) 63vw, (max-width: 1024px) 53vw, 39vw"
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

          {/* =================================================
              PEACH NUMBER BLOCK
          ================================================== */}

          <Reveal
            direction="up"
            delay={0.5}
          >
            <div
              className="
                absolute
                bottom-[21%]
                left-[7%]
                z-20
                flex
                h-20
                w-20
                items-center
                justify-center
                bg-[var(--ais-peach)]
                text-[var(--ais-black)]
                shadow-xl
                sm:h-24
                sm:w-24
                lg:h-28
                lg:w-28
              "
            >
              <span className="text-2xl font-semibold tracking-[-0.04em] lg:text-3xl">
                01
              </span>
            </div>
          </Reveal>

          {/* =================================================
              FLOATING INFORMATION CARD
          ================================================== */}

          <Reveal
            direction="right"
            delay={0.55}
          >
            <div
              className="
                absolute
                right-[5%]
                top-[13%]
                z-20
                hidden
                w-[245px]
                border
                border-white/15
                bg-[var(--ais-blue)]/85
                p-6
                shadow-2xl
                backdrop-blur-xl
                lg:block
                xl:w-[270px]
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--ais-peach)]">
                  AIS
                </span>

                <span className="text-lg text-white/30">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-xl font-medium tracking-[-0.03em]">
                Explore our spaces.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Discover environments created around the student
                experience.
              </p>
            </div>
          </Reveal>

          {/* =================================================
              VERTICAL LABEL
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[3%]
              right-0
              z-20
              hidden
              lg:block
            "
          >
            <span
              className="
                block
                rotate-90
                origin-right
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              Learning • Community • Discovery
            </span>
          </div>
        </div>

        {/* =====================================================
            FACILITY FEATURES
        ====================================================== */}

        <Stagger
          className="
            relative
            z-10
            mt-20
            grid
            border-t
            border-white/10
            sm:grid-cols-2
            lg:mt-28
            lg:grid-cols-4
          "
          stagger={0.12}
        >
          {facilities.map((facility) => (
            <div
              key={facility.number}
              className="
                group
                relative
                min-h-[230px]
                border-b
                border-white/10
                px-0
                py-8
                sm:border-r
                sm:px-7
                lg:py-10
                lg:first:pl-0
                lg:last:border-r-0
              "
            >
              {/* Hover surface */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  -z-10
                  origin-bottom
                  scale-y-0
                  bg-white/[0.035]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-y-100
                "
              />

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--ais-peach)]">
                  {facility.number}
                </span>

                <span
                  className="
                    text-lg
                    text-white/20
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-[var(--ais-peach)]
                  "
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-7 text-xl font-medium tracking-[-0.025em]">
                {facility.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                {facility.description}
              </p>
            </div>
          ))}
        </Stagger>

        {/* =====================================================
            CTA
        ====================================================== */}

        <Reveal
          direction="up"
          delay={0.2}
        >
          <div
            className="
              mt-12
              flex
              flex-col
              gap-7
              border-t
              border-white/10
              pt-8
              sm:flex-row
              sm:items-center
              sm:justify-between
              lg:mt-16
            "
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--ais-peach)]">
                Discover AIS
              </span>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/45">
                Take a closer look at the spaces that support life and
                learning across the AIS campus.
              </p>
            </div>

            <Link
              href="/facilities"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-4
                text-sm
                font-bold
                uppercase
                tracking-[0.08em]
                text-white
              "
            >
              <span className="relative pb-2">
                Explore our facilities

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

              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--ais-peach)]
                  text-lg
                  text-[var(--ais-black)]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:bg-white
                "
              >
                →
              </span>
            </Link>
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
          right-[-20px]
          hidden
          lg:block
        "
      >
        <div
          className="
            select-none
            text-[190px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-white/[0.025]
            xl:text-[250px]
          "
        >
          SPACE
        </div>
      </Parallax>
    </section>
  );
}