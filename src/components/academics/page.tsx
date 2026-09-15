import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const programmes = [
  {
    number: "01",
    level: "Nursery",
    title: "Early Years",
    description:
      "A nurturing environment where young learners begin developing confidence, curiosity and a love of learning.",
    href: "/academics/nursery",
  },
  {
    number: "02",
    level: "KG",
    title: "Kindergarten",
    description:
      "An engaging foundation that supports children's development through exploration, discovery and purposeful learning.",
    href: "/academics/kg",
  },
  {
    number: "03",
    level: "Primary",
    title: "Primary School",
    description:
      "A broad learning experience designed to develop knowledge, independence, creativity and strong foundations.",
    href: "/academics/primary",
  },
  {
    number: "04",
    level: "JHS",
    title: "Junior High School",
    description:
      "Preparing students for the next stage through deeper learning, personal development and growing responsibility.",
    href: "/academics/jhs",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f5f1]">

        {/* HERO */}
        <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-[#0d2238]">
          <div
            aria-hidden="true"
            className="absolute right-[-10%] top-[-20%] h-[650px] w-[650px] rounded-full border-[100px] border-[#e8752b]/10"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-35%] left-[-8%] h-[500px] w-[500px] rounded-full border-[75px] border-white/[0.035]"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pb-28">
            <div className="max-w-5xl">
              <span className="mb-6 block text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Academics
              </span>

              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
                Learning with
                <br />
                purpose.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Explore the learning pathways, programmes and educational
                opportunities available across AIS.
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden text-xs font-bold uppercase tracking-[0.25em] text-white/30 lg:block">
            Academics
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Our Approach
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0d2238] md:text-5xl">
                  Education that develops the whole student.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-[#68737d]">
                <p>
                  AIS provides learning pathways across Nursery, Kindergarten,
                  Primary and Junior High School.
                </p>

                <p>
                  Each stage of the journey provides an opportunity for
                  students to build knowledge, develop skills and grow in
                  confidence.
                </p>

                <p>
                  The detailed curriculum, programmes and learning outcomes
                  will be presented using AIS-approved academic information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMMES */}
        <section className="bg-[#f7f5f1] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Learning Pathways
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#0d2238] md:text-6xl">
                  A pathway for every stage.
                </h2>
              </div>

              <p className="max-w-md text-base leading-7 text-[#68737d]">
                Explore each stage of the AIS academic journey.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {programmes.map((programme) => (
                <Link
                  key={programme.number}
                  href={programme.href}
                  className="group relative min-h-[330px] overflow-hidden bg-[#0d2238] p-8 transition-all duration-500 hover:bg-[#081827] md:p-10"
                >
                  {/* Number */}
                  <span className="absolute right-7 top-5 text-7xl font-black tracking-[-0.06em] text-white/[0.05] transition-colors duration-500 group-hover:text-[#e8752b]/10 md:text-9xl">
                    {programme.number}
                  </span>

                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                        {programme.level}
                      </span>

                      <h3 className="mt-5 max-w-md text-3xl font-bold text-white md:text-4xl">
                        {programme.title}
                      </h3>

                      <p className="mt-5 max-w-lg text-base leading-7 text-white/55">
                        {programme.description}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.15em] text-white">
                      Explore programme

                      <span className="text-[#e8752b] transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="bg-[#0d2238] py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Curriculum & Programmes
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                  Building knowledge.
                  <br />
                  Developing potential.
                </h2>

                <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
                  Detailed information about the AIS curriculum, academic
                  programmes, subjects and learning approach will be added
                  here from approved school content.
                </p>

                <Link
                  href="/academics/curriculum"
                  className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#e8752b] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#0d2238]"
                >
                  Explore Curriculum

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* VISUAL BLOCK */}
              <div className="relative min-h-[450px] overflow-hidden bg-[#081827] p-8 md:p-12">

                <div
                  aria-hidden="true"
                  className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-[50px] border-[#e8752b]/15"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border-[45px] border-white/[0.04]"
                />

                <div className="relative flex h-full flex-col justify-end">
                  <span className="text-[5rem] font-black uppercase leading-none tracking-[-0.07em] text-white/[0.06] md:text-[8rem]">
                    GROW
                  </span>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      "Knowledge",
                      "Skills",
                      "Character",
                      "Confidence",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="border border-white/10 p-4"
                      >
                        <span className="text-xs font-bold text-[#e8752b]">
                          0{index + 1}
                        </span>

                        <p className="mt-2 text-sm font-semibold text-white/75">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ACADEMIC EXPERIENCE */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-16">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Academic Experience
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#0d2238] md:text-6xl">
                More than what happens in a textbook.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "Encouraging curiosity and a desire to understand.",
                },
                {
                  number: "02",
                  title: "Develop",
                  text: "Building knowledge, skills and confidence over time.",
                },
                {
                  number: "03",
                  title: "Lead",
                  text: "Preparing students to use what they learn with purpose.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="min-h-[280px] border border-[#dfe4e8] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#e8752b]"
                >
                  <span className="text-sm font-bold tracking-[0.2em] text-[#e8752b]">
                    {item.number}
                  </span>

                  <h3 className="mt-16 text-3xl font-bold text-[#0d2238]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#68737d]">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#e8752b]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                  Continue Exploring
                </span>

                <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  Discover life beyond academics.
                </h2>
              </div>

              <Link
                href="/school-life"
                className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-full bg-[#081827] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#081827]"
              >
                Explore School Life

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}