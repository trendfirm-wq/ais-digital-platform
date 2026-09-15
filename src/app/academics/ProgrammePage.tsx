import Link from "next/link";

export interface ProgrammeData {
  level: string;
  title: string;
  intro: string;
  description: string;
  ageRange: string;
  focus: string[];
  href: string;
  previous?: {
    label: string;
    href: string;
  };
  next?: {
    label: string;
    href: string;
  };
}

interface ProgrammePageProps {
  programme: ProgrammeData;
}

export default function ProgrammePage({
  programme,
}: ProgrammePageProps) {
  return (
    <>
      <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-[#0d2238]">
        <div
          aria-hidden="true"
          className="absolute right-[-10%] top-[-20%] h-[650px] w-[650px] rounded-full border-[100px] border-[#e8752b]/10"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-35%] left-[-8%] h-[500px] w-[500px] rounded-full border-[75px] border-white/[0.035]"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pb-28">
          <Link
            href="/academics"
            className="mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
          >
            ← Back to Academics
          </Link>

          <div className="max-w-5xl">
            <span className="mb-6 block text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
              {programme.level}
            </span>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              {programme.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
              {programme.intro}
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-xs font-bold uppercase tracking-[0.25em] text-white/30 lg:block">
          {programme.level}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Programme Overview
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0d2238] md:text-5xl">
                Supporting every stage of the journey.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#68737d]">
                {programme.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-[#f7f5f1] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-[#0d2238] p-8 md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                Age / Stage
              </span>

              <p className="mt-5 text-3xl font-bold text-white">
                {programme.ageRange}
              </p>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Final age and placement information will be confirmed by AIS.
              </p>
            </div>

            <div className="bg-[#081827] p-8 md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                Focus
              </span>

              <p className="mt-5 text-3xl font-bold text-white">
                {programme.focus[0]}
              </p>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Programme focus and learning priorities will be expanded using
                approved AIS academic content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING FOCUS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
              Learning Focus
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#0d2238] md:text-6xl">
              Developing knowledge, skills and confidence.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programme.focus.map((item, index) => (
              <div
                key={item}
                className="min-h-[230px] border border-[#dfe4e8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e8752b]"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-[#e8752b]">
                  0{index + 1}
                </span>

                <h3 className="mt-16 text-xl font-bold text-[#0d2238]">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#68737d]">
                  Approved programme information will be added here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM PLACEHOLDER */}
      <section className="bg-[#0d2238] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Curriculum
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                A curriculum designed for growth.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
                Detailed subjects, curriculum structure, learning outcomes and
                programme-specific information will be integrated here from
                approved AIS content.
              </p>

              <Link
                href="/academics/curriculum"
                className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#e8752b] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#0d2238]"
              >
                View Curriculum

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-[#081827] p-8 md:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-[#e8752b]/15"
              />

              <div className="relative flex h-full flex-col justify-end">
                <span className="text-7xl font-black tracking-[-0.07em] text-white/[0.06] md:text-9xl">
                  LEARN
                </span>

                <p className="mt-5 max-w-md text-base leading-7 text-white/50">
                  Programme curriculum information will be displayed here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="bg-[#f7f5f1]">
        <div className="mx-auto grid max-w-7xl border-x border-[#dfe4e8] md:grid-cols-2">
          {programme.previous ? (
            <Link
              href={programme.previous.href}
              className="group border-b border-[#dfe4e8] p-8 transition-colors hover:bg-white md:border-b-0 md:border-r md:p-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                Previous
              </span>

              <div className="mt-4 flex items-center justify-between gap-5">
                <span className="text-xl font-bold text-[#0d2238]">
                  {programme.previous.label}
                </span>

                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  ←
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}

          {programme.next && (
            <Link
              href={programme.next.href}
              className="group p-8 text-right transition-colors hover:bg-white md:p-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                Next
              </span>

              <div className="mt-4 flex items-center justify-end gap-5">
                <span className="text-xl font-bold text-[#0d2238]">
                  {programme.next.label}
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e8752b]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                Admissions
              </span>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                Interested in joining AIS?
              </h2>
            </div>

            <Link
              href="/admissions"
              className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-full bg-[#081827] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#081827]"
            >
              Explore Admissions

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}