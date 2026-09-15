import Image from "next/image";
import Link from "next/link";

export interface ExperienceData {
  category: string;
  title: string;
  intro: string;
  description: string;
  image: string;
  highlights: string[];
  previous?: {
    label: string;
    href: string;
  };
  next?: {
    label: string;
    href: string;
  };
}

export default function ExperiencePage({
  experience,
}: {
  experience: ExperienceData;
}) {
  return (
    <main className="bg-[#f7f5f1] text-[#17212b]">

      {/* HERO */}
      <section className="relative min-h-[65vh] overflow-hidden bg-[#0d2238]">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          priority
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2238] via-[#0d2238]/75 to-transparent" />

        <div className="relative flex min-h-[65vh] items-end px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e8752b]">
              {experience.category}
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              {experience.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl">
              {experience.intro}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
              The Experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#0d2238] md:text-5xl">
              An important part of the AIS journey.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#68737d]">
              {experience.description}
            </p>

            <p className="mt-6 text-lg leading-8 text-[#68737d]">
              Official AIS information, activities and programmes will be added
              to this page as they are confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
            Highlights
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0d2238] md:text-5xl">
            What this area will cover.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experience.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="rounded-3xl border border-[#dfe4e8] bg-[#f7f5f1] p-7"
              >
                <span className="text-sm font-semibold text-[#e8752b]">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-xl font-semibold text-[#0d2238]">
                  {highlight}
                </h3>

                <div className="mt-6 h-px w-10 bg-[#e8752b]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT PLACEHOLDER */}
      <section className="bg-[#0d2238] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
              AIS Information
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Official content will appear here.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/65">
              This area is structured for approved information, images,
              schedules, activities, stories and other media relating to{" "}
              {experience.title.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* PREVIOUS / NEXT */}
      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {experience.previous ? (
            <Link
              href={experience.previous.href}
              className="rounded-2xl border border-[#dfe4e8] bg-white px-6 py-5 transition hover:border-[#e8752b]"
            >
              <span className="block text-xs uppercase tracking-wider text-[#68737d]">
                Previous
              </span>

              <span className="mt-1 block font-semibold text-[#0d2238]">
                ← {experience.previous.label}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {experience.next ? (
            <Link
              href={experience.next.href}
              className="rounded-2xl bg-[#e8752b] px-6 py-5 text-white transition hover:bg-[#c95d1c]"
            >
              <span className="block text-xs uppercase tracking-wider text-white/70">
                Next
              </span>

              <span className="mt-1 block font-semibold">
                {experience.next.label} →
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e8752b] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Explore the wider AIS experience.
          </h2>

          <Link
            href="/admissions"
            className="inline-flex w-fit rounded-full bg-[#0d2238] px-7 py-4 font-semibold text-white"
          >
            Explore Admissions →
          </Link>
        </div>
      </section>
    </main>
  );
}