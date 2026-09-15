"use client";

import FeatureCard from "@/components/cards/FeatureCard";
import Reveal from "@/components/animations/Reveal";
import Parallax from "@/components/animations/Parallax";

const experiences = [
  {
    number: "01",
    category: "Student Life",
    title: "Growing together",
    description:
      "A vibrant school experience where students build friendships, confidence and a strong sense of belonging.",
    image: "/images/school-life/student-life.jpg",
    href: "/school-life",
  },
  {
    number: "02",
    category: "Sports",
    title: "Energy beyond the classroom",
    description:
      "Opportunities to develop teamwork, discipline, resilience and healthy competition through sport.",
    image: "/images/school-life/sports.jpg",
    href: "/school-life/sports",
  },
  {
    number: "03",
    category: "Arts & Culture",
    title: "Creativity has a place here",
    description:
      "Students explore creativity, expression and culture through the arts and shared experiences.",
    image: "/images/school-life/arts.jpg",
    href: "/school-life/arts",
  },
  {
    number: "04",
    category: "Leadership",
    title: "Preparing young leaders",
    description:
      "Students are encouraged to take responsibility, serve others and develop the confidence to lead.",
    image: "/images/school-life/leadership.jpg",
    href: "/school-life/leadership",
  },
];

export default function SchoolLife() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-24 md:py-32">
      <Parallax
        className="pointer-events-none absolute right-[-4%] top-20 hidden select-none text-[12rem] font-black uppercase leading-none tracking-[-0.08em] text-[#174a70]/[0.035] lg:block xl:text-[18rem]"
        y={100}
      >
        LIFE
      </Parallax>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal direction="left">
            <div>
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#f2a07a]">
                Life at AIS
              </span>

              <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-[#174a70] md:text-5xl lg:text-6xl">
                Learning doesn't stop at the classroom.
              </h2>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6367]">
              School life is about discovering interests, building
              relationships, developing character and creating experiences
              that stay with students long after the school day ends.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <FeatureCard
              key={experience.number}
              {...experience}
              index={index}
            />
          ))}
        </div>

        <Reveal direction="up" delay={0.2}>
          <div className="mt-14 flex justify-center">
            <a
              href="/school-life"
              className="group inline-flex items-center gap-4 rounded-full bg-[#174a70] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#f2a07a]"
            >
              Discover School Life
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}