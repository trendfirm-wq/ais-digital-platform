"use client";

import Link from "next/link";

import ProgrammeCard from "@/components/cards/ProgrammeCard";

import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";

const programmes = [
  {
    number: "01",
    level: "Early Years",
    title: "Nursery",
    description:
      "A nurturing beginning where children are introduced to learning through exploration, discovery and meaningful experiences.",
    image: "/images/academics/nursery.jpg",
    href: "/academics/nursery",
  },
  {
    number: "02",
    level: "Early Years",
    title: "KG",
    description:
      "An engaging learning environment designed to develop curiosity, confidence and strong foundations for continued learning.",
    image: "/images/academics/kg.jpg",
    href: "/academics/kg",
  },
  {
    number: "03",
    level: "Basic Education",
    title: "Primary",
    description:
      "Building strong academic foundations while developing the skills, values and confidence students need to progress.",
    image: "/images/academics/primary.jpg",
    href: "/academics/primary",
  },
  {
    number: "04",
    level: "Basic Education",
    title: "JHS",
    description:
      "Preparing students for the next stage of their education through deeper learning, independence and personal development.",
    image: "/images/academics/jhs.jpg",
    href: "/academics/jhs",
  },
];

export default function AcademicsPreview() {
  return (
    <section className="overflow-hidden bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">

          {/* Heading */}
          <Reveal
            direction="left"
            className="lg:col-span-7"
          >
            <div>

              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[var(--ais-orange)]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--ais-orange)]">
                  Academics
                </span>
              </div>

              <h2 className="max-w-4xl text-5xl font-medium leading-[1] tracking-[-0.04em] text-[var(--ais-navy)] sm:text-6xl lg:text-7xl">
                An education designed{" "}
                <span className="text-[var(--ais-navy)]/35">
                  for every stage.
                </span>
              </h2>

            </div>
          </Reveal>

          {/* Description */}
          <Reveal
            direction="right"
            delay={0.2}
            className="lg:col-span-4 lg:col-start-9"
          >
            <p className="text-base leading-7 text-[var(--ais-muted)] sm:text-lg">
              From the earliest years through Junior High School,
              explore the learning pathways that form the AIS
              academic experience.
            </p>
          </Reveal>

        </div>

        {/* =====================================================
            PROGRAMME CARDS
        ====================================================== */}
        <Stagger
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.14}
          duration={0.9}
        >
          {programmes.map((programme) => (
            <ProgrammeCard
              key={programme.number}
              {...programme}
            />
          ))}
        </Stagger>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <Reveal
          direction="up"
          delay={0.25}
        >
          <div className="mt-10 flex justify-end">

            <Link
              href="/academics"
              className="
                group
                inline-flex
                items-center
                gap-4
                text-sm
                font-bold
                text-[var(--ais-navy)]
              "
            >
              <span className="border-b-2 border-[var(--ais-orange)] pb-1">
                Explore all academics
              </span>

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--ais-navy)]
                  text-white
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:bg-[var(--ais-orange)]
                "
              >
                →
              </span>
            </Link>

          </div>
        </Reveal>

      </div>
    </section>
  );
}