import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import Stagger from "@/components/animations/Stagger";

const pathways = [
  {
    number: "01",
    title: "Academics",
    text: "Explore our learning pathways and educational programmes.",
    href: "/academics",
  },
  {
    number: "02",
    title: "Admissions",
    text: "Discover how to begin your journey with AIS.",
    href: "/admissions",
  },
  {
    number: "03",
    title: "School Life",
    text: "See what learning and community life looks like beyond the classroom.",
    href: "/school-life",
  },
  {
    number: "04",
    title: "Community",
    text: "Stay connected with the latest AIS news, events and stories.",
    href: "/community",
  },
];

export default function DiscoverAIS() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* =====================================================
          SUBTLE BACKGROUND DETAIL
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-160px]
          top-[-160px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[var(--ais-peach)]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end lg:mb-20">
          <Reveal
            direction="left"
            className="lg:col-span-8"
          >
            <div>
              {/* Eyebrow */}

              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[var(--ais-peach)]" />

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--ais-blue)]">
                  Discover AIS
                </span>
              </div>

              <h2
                className="
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.05em]
                  text-[var(--ais-blue-dark)]
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Everything you need
                <br />
                <span className="text-[var(--ais-blue)]/30">
                  to know, in one place.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={0.15}
            className="lg:col-span-4 lg:col-start-9"
          >
            <div className="border-l-2 border-[var(--ais-peach)]/50 pl-6 lg:pl-8">
              <p className="max-w-md text-base leading-8 text-[var(--ais-muted)] sm:text-lg">
                Explore the people, programmes, experiences and
                opportunities that make AIS a distinctive educational
                community.
              </p>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            PATHWAYS
        ====================================================== */}

        <Stagger
          className="
            relative
            grid
            border-t
            border-[var(--ais-border)]
            md:grid-cols-2
            lg:grid-cols-4
          "
          stagger={0.1}
        >
          {pathways.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="
                group
                relative
                min-h-[340px]
                overflow-hidden
                border-b
                border-[var(--ais-border)]
                bg-white
                p-7
                transition-all
                duration-500
                hover:bg-[var(--ais-blue)]
                sm:p-9
                lg:border-r
                lg:p-10
                lg:first:border-l
                lg:last:border-r-0
              "
            >
              {/* =================================================
                  PEACH HOVER SLICE
              ================================================== */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-full
                  origin-left
                  scale-x-0
                  bg-[var(--ais-peach)]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              {/* =================================================
                  NUMBER + ARROW
              ================================================== */}

              <div className="flex items-start justify-between">
                <span
                  className="
                    text-xs
                    font-black
                    tracking-[0.2em]
                    text-[var(--ais-blue)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--ais-peach)]
                  "
                >
                  {item.number}
                </span>

               
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="mt-20">
                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-[-0.035em]
                    text-[var(--ais-blue-dark)]
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-7
                    text-[var(--ais-muted)]
                    transition-colors
                    duration-300
                    group-hover:text-white/65
                  "
                >
                  {item.text}
                </p>
              </div>

              {/* =================================================
                  EXPLORE
              ================================================== */}

              <div className="absolute bottom-9 left-7 sm:left-9 lg:left-10">
                <span
                  className="
                    relative
                    inline-block
                    pb-1
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-[var(--ais-blue)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--ais-peach)]
                  "
                >
                  Explore

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[1px]
                      w-full
                      origin-left
                      bg-current
                      transition-transform
                      duration-300
                      group-hover:scale-x-0
                    "
                  />
                </span>
              </div>

              {/* =================================================
                  LARGE BACKGROUND NUMBER
              ================================================== */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -right-4
                  select-none
                  text-[150px]
                  font-black
                  leading-none
                  tracking-[-0.08em]
                  text-[var(--ais-blue)]/[0.035]
                  transition-all
                  duration-500
                  group-hover:translate-x-3
                  group-hover:text-white/[0.04]
                "
              >
                {item.number}
              </span>
            </Link>
          ))}
        </Stagger>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <Reveal
          direction="up"
          delay={0.25}
        >
          <div className="mt-12 flex flex-col gap-5 border-t border-[var(--ais-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-[var(--ais-muted)]">
              A closer look at the pathways, experiences and community
              that shape life at T.I. Ahmadiyya International School.
            </p>

            <span className="hidden h-px w-20 bg-[var(--ais-peach)] sm:block" />
          </div>
        </Reveal>
      </div>

      {/* =====================================================
          BACKGROUND WORD
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-45px]
          left-[-15px]
          hidden
          select-none
          lg:block
        "
      >
        <span
          className="
            text-[180px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-[var(--ais-blue)]/[0.025]
            xl:text-[230px]
          "
        >
          AIS
        </span>
      </div>
    </section>
  );
}