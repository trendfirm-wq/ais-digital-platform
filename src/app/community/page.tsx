import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const communityAreas = [
  {
    number: "01",
    title: "Parents & Families",
    description:
      "A strong relationship between school and home helps create an environment where students can thrive.",
  },
  {
    number: "02",
    title: "Alumni",
    description:
      "A growing network connecting former students with the school and with one another.",
  },
  {
    number: "03",
    title: "Partnerships",
    description:
      "Opportunities to build meaningful relationships with organisations and members of the wider community.",
  },
  {
    number: "04",
    title: "Community Life",
    description:
      "Shared experiences, activities and events that bring the AIS community together.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f5f1] text-[#17212b]">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative min-h-[75vh] overflow-hidden bg-[#0d2238] text-white">
          <Image
            src="/images/hero/ais-community.jpg"
            alt="AIS community"
            fill
            priority
            className="object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081827] via-[#081827]/80 to-[#081827]/20" />

          <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-[#e8752b]">
                AIS Community
              </p>

              <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.04em] md:text-7xl lg:text-[90px]">
                A school
                <br />
                is more
                <br />
                than a place.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                It is a community of people learning, contributing, supporting
                and growing together.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Together
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Everyone has a part to play.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#68737d]">
                AIS is shaped not only by what happens in classrooms, but also
                by the relationships between students, families, staff,
                partners and the wider community.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#68737d]">
                This section will grow into a central place for community
                information, stories, opportunities and engagement.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMUNITY AREAS
        ===================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

            <div className="mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Our community
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Connected by purpose.
              </h2>
            </div>

            <div className="divide-y divide-[#dfe4e8] border-y border-[#dfe4e8]">
              {communityAreas.map((area) => (
                <div
                  key={area.number}
                  className="group grid gap-6 py-9 md:grid-cols-[100px_0.8fr_1fr_auto] md:items-center"
                >
                  <span className="text-xs font-bold tracking-[0.15em] text-[#e8752b]">
                    {area.number}
                  </span>

                  <h3 className="text-2xl font-bold tracking-tight">
                    {area.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-7 text-[#68737d]">
                    {area.description}
                  </p>

                  <span className="text-xl text-[#e8752b] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMUNITY IMAGE
        ===================================================== */}
        <section className="bg-[#f7f5f1]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-6 md:grid-cols-2">

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/hero/ais-students.jpg"
                  alt="AIS students"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden md:translate-y-16">
                <Image
                  src="/images/school-life/student-life.jpg"
                  alt="AIS student life"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            COMMUNITY STORIES
        ===================================================== */}
        <section className="bg-[#0d2238] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Community stories
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  The people behind AIS.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Student Stories",
                  "Parent Voices",
                  "Alumni Stories",
                  "Community Updates",
                ].map((story, index) => (
                  <div
                    key={story}
                    className="group border border-white/10 p-7 transition duration-300 hover:border-[#e8752b] hover:bg-white/[0.03]"
                  >
                    <span className="text-xs font-bold text-[#e8752b]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-8 text-xl font-bold">
                      {story}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      Stories and updates from the AIS community will appear
                      here.
                    </p>

                    <span className="mt-7 inline-block text-[#e8752b] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            GET INVOLVED
        ===================================================== */}
        <section className="bg-[#f7f5f1]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

            <div className="overflow-hidden rounded-[2rem] bg-[#e8752b] px-7 py-14 text-white md:px-12 lg:px-16 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                    Get involved
                  </p>

                  <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                    Be part of the AIS community.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
                    Have a question, an idea or an opportunity to share?
                    Connect with the school.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-fit rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#0d2238] transition hover:bg-[#0d2238] hover:text-white"
                >
                  Contact AIS →
                </Link>

              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}