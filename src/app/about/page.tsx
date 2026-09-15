import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f5f1]">
        {/* HERO */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#0d2238]">
          <div
            aria-hidden="true"
            className="absolute right-[-8%] top-[-15%] h-[600px] w-[600px] rounded-full border-[90px] border-[#e8752b]/10"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[-30%] left-[-10%] h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.035]"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pb-28">
            <div className="max-w-4xl">
              <span className="mb-6 block text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                About AIS
              </span>

              <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
                More than a school.
                <br />
                A foundation for life.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Discover the identity, philosophy and people behind
                T.I. Ahmadiyya International School.
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden text-xs font-bold uppercase tracking-[0.25em] text-white/30 lg:block">
            About AIS
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Our School
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0d2238] md:text-5xl">
                  An environment designed for growth.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-[#68737d]">
                <p>
                  T.I. Ahmadiyya International School is presented as a
                  values-driven educational community where students are
                  encouraged to learn, grow and develop their potential.
                </p>

                <p>
                  This section will contain the approved institutional
                  introduction supplied by AIS, including the school's
                  history, educational context and distinctive identity.
                </p>

                <p>
                  Our content and messaging will be developed around the
                  school's approved institutional information rather than
                  introducing unverified claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="bg-[#0d2238] py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Purpose
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                What guides us.
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2">
              <div className="bg-[#0d2238] p-8 md:p-12 lg:p-16">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                  01 — Vision
                </span>

                <h3 className="mt-6 text-3xl font-bold md:text-4xl">
                  A clear direction for the future.
                </h3>

                <p className="mt-6 text-base leading-7 text-white/55">
                  Approved AIS vision statement will appear here.
                </p>
              </div>

              <div className="bg-[#081827] p-8 md:p-12 lg:p-16">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                  02 — Mission
                </span>

                <h3 className="mt-6 text-3xl font-bold md:text-4xl">
                  Turning purpose into action.
                </h3>

                <p className="mt-6 text-base leading-7 text-white/55">
                  Approved AIS mission statement will appear here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-[#f7f5f1] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Core Values
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0d2238] md:text-6xl">
                Principles that shape our community.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#68737d]">
                AIS-approved core values and their descriptions will be
                presented here.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Value One",
                "Value Two",
                "Value Three",
                "Value Four",
              ].map((value, index) => (
                <div
                  key={value}
                  className="group min-h-[250px] border border-[#dfe4e8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e8752b]"
                >
                  <span className="text-sm font-bold tracking-[0.2em] text-[#e8752b]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-16 text-2xl font-bold text-[#0d2238]">
                    {value}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68737d]">
                    Approved description will appear here.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATIONAL PHILOSOPHY */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Educational Philosophy
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0d2238] md:text-6xl">
                  How we think about learning.
                </h2>

                <p className="mt-7 max-w-xl text-lg leading-8 text-[#68737d]">
                  This section will explain the educational philosophy of AIS,
                  using the school's approved language and principles.
                </p>
              </div>

              <div className="relative min-h-[420px] overflow-hidden bg-[#0d2238] p-8 md:p-12 lg:min-h-[500px]">
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-[#e8752b]/20"
                />

                <div className="relative flex h-full flex-col justify-end">
                  <span className="text-7xl font-black tracking-[-0.06em] text-white/[0.08] md:text-9xl">
                    LEARN
                  </span>

                  <p className="mt-5 max-w-md text-lg leading-8 text-white/60">
                    Approved educational philosophy content will be integrated
                    here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="bg-[#f7f5f1] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Leadership & Governance
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#0d2238] md:text-6xl">
                  The people who help guide AIS.
                </h2>
              </div>

              <Link
                href="/about/leadership"
                className="group inline-flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0d2238]"
              >
                Meet the leadership

                <span className="text-[#e8752b] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {[
                "Leadership",
                "Governance",
                "School Administration",
              ].map((item, index) => (
                <div
                  key={item}
                  className="min-h-[260px] bg-white p-8"
                >
                  <span className="text-sm font-bold tracking-[0.2em] text-[#e8752b]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-16 text-2xl font-bold text-[#0d2238]">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68737d]">
                    Approved AIS leadership and governance information will
                    appear here.
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
                  Discover AIS
                </span>

                <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  See how learning comes to life.
                </h2>
              </div>

              <Link
                href="/academics"
                className="group inline-flex shrink-0 items-center justify-center gap-4 rounded-full bg-[#081827] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#081827]"
              >
                Explore Academics

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