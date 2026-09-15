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
      "Purposeful spaces designed to support learning, collaboration and discovery.",
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
    <section className="relative overflow-hidden bg-[var(--ais-navy)] py-28 text-white lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

          <Reveal
            direction="left"
            className="lg:col-span-7"
          >
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[var(--ais-orange)]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--ais-orange)]">
                  Our Campus
                </span>
              </div>

              <h2 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Spaces that make
                <br />
                <span className="text-white/40">
                  learning come alive.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={0.2}
            className="lg:col-span-4 lg:col-start-9"
          >
            <p className="max-w-lg text-base leading-8 text-white/60 sm:text-lg">
              Explore the facilities and environments that form part
              of the AIS experience.
            </p>
          </Reveal>

        </div>

        {/* =====================================================
            IMAGE COMPOSITION
        ====================================================== */}

        <div className="relative mt-16 min-h-[600px] lg:mt-24 lg:min-h-[720px]">

          {/* Main campus image */}

          <ImageReveal
            direction="left"
            className="
              absolute
              left-0
              top-0
              h-[430px]
              w-[82%]
              sm:h-[520px]
              lg:h-[650px]
              lg:w-[76%]
            "
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/facilities/campus.jpg"
                alt="T.I. Ahmadiyya International School campus"
                fill
                sizes="(max-width: 1024px) 82vw, 76vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ais-navy)]/60 via-transparent to-transparent" />
            </div>
          </ImageReveal>

          {/* Supporting image */}

          <ImageReveal
            direction="right"
            delay={0.2}
            className="
              absolute
              bottom-0
              right-0
              z-10
              h-[250px]
              w-[48%]
              border-[10px]
              border-[var(--ais-navy)]
              sm:h-[320px]
              lg:h-[390px]
              lg:w-[38%]
            "
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/facilities/learning-space.jpg"
                alt="Learning space at AIS"
                fill
                sizes="(max-width: 1024px) 48vw, 38vw"
                className="object-cover"
              />
            </div>
          </ImageReveal>

          {/* Orange accent */}

          <Reveal
            direction="up"
            delay={0.7}
          >
            <div
              className="
                absolute
                bottom-16
                left-[7%]
                z-20
                h-16
                w-16
                bg-[var(--ais-orange)]
                sm:h-20
                sm:w-20
              "
            />
          </Reveal>

          {/* Floating label */}

          <Reveal
            direction="right"
            delay={0.5}
          >
            <div
              className="
                absolute
                right-[8%]
                top-[15%]
                z-20
                hidden
                border
                border-white/20
                bg-[var(--ais-navy)]/80
                px-6
                py-5
                backdrop-blur-md
                lg:block
              "
            >
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--ais-orange)]">
                AIS Campus
              </span>

              <span className="mt-2 block text-sm text-white/70">
                Explore our spaces
              </span>
            </div>
          </Reveal>

        </div>

        {/* =====================================================
            FACILITY FEATURES
        ====================================================== */}

        <Stagger
          className="
            mt-20
            grid
            border-t
            border-white/10
            sm:grid-cols-2
            lg:grid-cols-4
          "
          stagger={0.12}
        >
          {facilities.map((facility) => (
            <div
              key={facility.number}
              className="
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
              <span className="text-xs font-bold tracking-[0.2em] text-[var(--ais-orange)]">
                {facility.number}
              </span>

              <h3 className="mt-5 text-xl font-medium text-white">
                {facility.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
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
          <div className="mt-12 flex justify-start lg:justify-end">
            <Link
              href="/about/facilities"
              className="
                group
                inline-flex
                items-center
                gap-4
                text-sm
                font-bold
                text-white
              "
            >
              <span className="border-b-2 border-[var(--ais-orange)] pb-1">
                Explore our facilities
              </span>

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--ais-orange)]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
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
          -bottom-20
          left-0
          hidden
          lg:block
        "
      >
        <div className="select-none text-[230px] font-black leading-none text-white/[0.025]">
          SPACE
        </div>
      </Parallax>

    </section>
  );
}