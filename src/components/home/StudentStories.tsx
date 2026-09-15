"use client";

import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    id: "01",
    name: "Student Story",
    role: "AIS Student",
    quote:
      "A place where learning, confidence and character grow together.",
    image: "/images/home/ais-students.jpg",
  },
  {
    id: "02",
    name: "Student Story",
    role: "AIS Student",
    quote:
      "Every experience creates an opportunity to discover something new.",
    image: "/images/school-life/student-life.jpg",
  },
  {
    id: "03",
    name: "Student Story",
    role: "AIS Student",
    quote:
      "Learning extends beyond the classroom and into the wider community.",
    image: "/images/school-life/leadership.jpg",
  },
];

export default function StudentStories() {
  return (
    <section className="relative overflow-hidden bg-[#174a70] py-24 text-white md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.25em] text-[#f2a07a]">
              Student Stories
            </span>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Every student has a story to tell.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/60">
            Discover the experiences, aspirations and moments that shape
            life at T.I. Ahmadiyya International School.
          </p>
        </div>

        {/* STORIES */}
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group relative overflow-hidden bg-[#0d2f4a]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2f4a]/70 to-transparent" />

                <span className="absolute left-6 top-6 text-sm font-bold tracking-[0.2em] text-white/70">
                  {story.id}
                </span>
              </div>

              <div className="p-7 md:p-8">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#f2a07a]">
                  {story.role}
                </span>

                <h3 className="mb-5 text-2xl font-bold">
                  {story.name}
                </h3>

                <blockquote className="text-base leading-7 text-white/65">
                  “{story.quote}”
                </blockquote>

                <div className="mt-7 h-px w-full bg-white/10" />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                    AIS
                  </span>

                  <span className="text-xl text-[#f2a07a] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FEATURED STORY */}
        <div className="mt-16 grid overflow-hidden bg-[#0d2f4a] lg:grid-cols-2">
          <div className="relative min-h-[380px] lg:min-h-[500px]">
            <Image
              src="/images/home/ais-learning.jpg"
              alt="Learning at AIS"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex h-full flex-col justify-center p-8 md:p-12 lg:p-16">
            <span className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#f2a07a]">
              The AIS Experience
            </span>

            <h3 className="max-w-lg text-3xl font-bold leading-tight md:text-4xl">
              Education that reaches beyond the classroom.
            </h3>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              From academic learning to relationships, activities,
              leadership and community, the AIS experience is designed to
              help students discover their strengths and grow with purpose.
            </p>

            <div className="mt-8">
              <Link
                href="/school-life"
                className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.15em] text-white"
              >
                Explore School Life

                <span className="text-[#f2a07a] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}