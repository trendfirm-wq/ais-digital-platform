import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Discover AIS",
    description:
      "Learn about the school, academic pathways, community and student experience.",
  },
  {
    number: "02",
    title: "Make an Enquiry",
    description:
      "Connect with the admissions team and ask questions about joining AIS.",
  },
  {
    number: "03",
    title: "Visit the School",
    description:
      "Request a campus visit and experience the school environment.",
  },
  {
    number: "04",
    title: "Apply",
    description:
      "Begin the application process and provide the required information.",
  },
];

const admissionsLinks = [
  {
    number: "01",
    title: "How to Apply",
    description:
      "Explore the admissions journey and the information required to begin.",
    href: "/admissions/apply",
  },
  {
    number: "02",
    title: "Request a Visit",
    description:
      "Arrange an opportunity to visit the AIS campus.",
    href: "/admissions/visit",
  },
  {
    number: "03",
    title: "Make an Enquiry",
    description:
      "Send a question or request to the admissions team.",
    href: "/contact",
  },
  {
    number: "04",
    title: "Admissions FAQs",
    description:
      "Find answers to common questions about admissions.",
    href: "/admissions/faqs",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f5f1] text-[#17212b]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative min-h-[72vh] overflow-hidden bg-[#0d2238]">

          <Image
            src="/images/home/ais-students.jpg"
            alt="Students at T.I. Ahmadiyya International School"
            fill
            priority
            className="object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2238] via-[#0d2238]/80 to-transparent" />

          <div className="relative flex min-h-[72vh] items-end px-6 py-20 md:px-12 lg:px-20 lg:py-28">

            <div className="mx-auto w-full max-w-7xl">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e8752b]">
                Admissions
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-white md:text-6xl lg:text-7xl">
                Start your AIS journey.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl">
                Discover the school, explore your options and take the next
                step towards joining the AIS community.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center justify-center rounded-full bg-[#e8752b] px-7 py-4 font-bold text-white transition hover:bg-[#c95d1c]"
                >
                  Apply to AIS →
                </Link>

                <Link
                  href="/admissions/visit"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0d2238]"
                >
                  Plan a Visit
                </Link>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                Your Journey
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#0d2238] md:text-5xl">
                Choosing a school is a big decision.
              </h2>
            </div>

            <div className="max-w-3xl">

              <p className="text-lg leading-8 text-[#68737d]">
                The AIS admissions experience is designed to make it easier
                for prospective families to discover the school, understand
                the available pathways and connect with the admissions team.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#68737d]">
                Official admissions requirements, dates, fees, documentation
                and application information will be added here once confirmed
                by AIS.
              </p>

            </div>
          </div>
        </section>

        {/* =====================================================
            ADMISSIONS JOURNEY
        ===================================================== */}

        <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                Admissions Journey
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0d2238] md:text-5xl">
                Four steps to get started.
              </h2>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group rounded-3xl border border-[#dfe4e8] bg-[#f7f5f1] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <span className="text-sm font-semibold text-[#e8752b]">
                    {step.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-semibold text-[#0d2238]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#68737d]">
                    {step.description}
                  </p>

                  <div className="mt-8 h-px w-10 bg-[#e8752b] transition-all duration-300 group-hover:w-20" />

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            EXPLORE ADMISSIONS
        ===================================================== */}

        <section className="bg-[#0d2238] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                Explore Admissions
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Everything you need to take the next step.
              </h2>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">

              {admissionsLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 md:p-10"
                >

                  <div className="flex items-start justify-between">

                    <span className="text-sm font-semibold text-[#e8752b]">
                      {item.number}
                    </span>

                    <span className="text-xl text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#e8752b]">
                      ↗
                    </span>

                  </div>

                  <h3 className="mt-12 text-2xl font-semibold md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-white/60">
                    {item.description}
                  </p>

                </Link>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAMMES
        ===================================================== */}

        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">

                <Image
                  src="/images/academics/primary.jpg"
                  alt="AIS academic experience"
                  fill
                  className="object-cover"
                />

              </div>

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                  Academic Pathways
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#0d2238] md:text-5xl">
                  Find the right pathway for your child.
                </h2>

                <p className="mt-7 text-lg leading-8 text-[#68737d]">
                  Explore the AIS academic pathways from Nursery through
                  Junior High School.
                </p>

                <Link
                  href="/academics"
                  className="mt-8 inline-flex items-center rounded-full bg-[#0d2238] px-7 py-4 font-semibold text-white transition hover:bg-[#081827]"
                >
                  Explore Academics →
                </Link>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            IMPORTANT INFORMATION
        ===================================================== */}

        <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-28">

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                Admissions Information
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#0d2238] md:text-5xl">
                Official information will be available here.
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Admission requirements",
                "Application process",
                "Required documents",
                "Fees & tuition",
                "Important dates",
                "Placement information",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f7f5f1] px-6 py-5"
                >
                  <span className="font-medium text-[#0d2238]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="bg-[#e8752b] px-6 py-20 md:px-12 lg:px-20">

          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Begin
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Ready to take the next step?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Start your application or speak with the admissions team.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <Link
                href="/admissions/apply"
                className="rounded-full bg-[#0d2238] px-7 py-4 text-center font-bold text-white transition hover:bg-[#081827]"
              >
                Apply to AIS →
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-[#e8752b]"
              >
                Make an Enquiry
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}