import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function UniformPage() {
  return (
    <main className="bg-white text-[#0d2f4a]">
 <Header />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0d2f4a]">
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">

          {/* Hero Copy */}
          <div className="relative z-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#f2a07a]">
              School Life
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
              A Smart Look
              <span className="block text-[#f2a07a]">
                for a Greater Tomorrow.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              Discover the distinctive uniforms and school essentials that
              represent the identity of Ahmadiyya International School.
            </p>

            <div className="mt-9">
              <Link
                href="#uniforms"
                className="inline-flex items-center rounded-full bg-[#f2a07a] px-7 py-4 text-sm font-semibold text-[#0d2f4a] transition-transform duration-300 hover:-translate-y-1"
              >
                Explore the Uniforms
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/uniform/girls-uniform-pattern.jpg"
                alt="AIS girls wearing the official school uniform"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full bg-[#f2a07a] lg:block" />
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="bg-[#f8f6f2] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
                The AIS Identity
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                A uniform that brings the AIS community together.
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-600 md:text-lg">
                The school uniform is an important part of student life at
                Ahmadiyya International School. Its distinctive colours,
                patterns and branding give students a shared identity while
                reflecting the character of the school.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                Explore the different uniform designs and school essentials
                below.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          UNIFORM NAVIGATION
      ========================================================== */}
      <section
        id="uniforms"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto py-6 text-sm font-semibold whitespace-nowrap">
            <a
              href="#girls"
              className="transition-colors hover:text-[#f2a07a]"
            >
              Girls' Uniform
            </a>

            <a
              href="#boys"
              className="transition-colors hover:text-[#f2a07a]"
            >
              Boys' Uniform
            </a>

            <a
              href="#cardigan"
              className="transition-colors hover:text-[#f2a07a]"
            >
              Cardigan
            </a>

            <a
              href="#essentials"
              className="transition-colors hover:text-[#f2a07a]"
            >
              School Essentials
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          GIRLS' UNIFORM
      ========================================================== */}
      <section
        id="girls"
        className="scroll-mt-20 bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
              Girls
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Girls' Uniform
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              The girls' uniform is presented in distinctive AIS colours and
              designs, including the school's patterned fabric and classic
              navy-and-peach design.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Classic Girls Uniform */}
            <article className="overflow-hidden rounded-[2rem] bg-[#f8f6f2]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/uniform/girls-classic.jpg"
                  alt="AIS classic girls school uniform"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  Design 01
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Classic Girls' Uniform
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  A navy-and-peach design featuring the AIS colour identity,
                  rounded collar and coordinated waist detail.
                </p>
              </div>
            </article>

            {/* Patterned Girls Uniform */}
            <article className="overflow-hidden rounded-[2rem] bg-[#0d2f4a]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/uniform/girls-pattern.jpg"
                  alt="AIS patterned girls school uniform"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="p-8 text-white md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  Design 02
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Patterned Girls' Uniform
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  The official AIS patterned fabric incorporates the school's
                  colours and identity throughout the dress.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================================
          GIRLS' DESIGN DETAILS
      ========================================================== */}
      <section className="bg-[#f8f6f2] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
                Design Details
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Details that make the uniform distinctly AIS.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                The official uniform reference highlights the collar, waist
                band and patterned fabric used in the girls' design.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white">
              <Image
                src="/images/uniform/girls-pattern.jpg"
                alt="AIS girls uniform design and fabric details"
                width={1400}
                height={1600}
                className="h-auto w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          BOYS' UNIFORM
      ========================================================== */}
      <section
        id="boys"
        className="scroll-mt-20 bg-white py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
              Boys
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Boys' Uniform
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              The boys' uniform includes both the patterned AIS shirt design
              and the classic peach-and-navy combination.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Patterned Boys Uniform */}
            <article className="overflow-hidden rounded-[2rem] bg-[#0d2f4a]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/uniform/boys-pattern.jpg"
                  alt="AIS patterned boys school uniform"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="p-8 text-white md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  Design 01
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Patterned Boys' Uniform
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  The patterned shirt features the AIS fabric design and is
                  paired with navy trousers.
                </p>
              </div>
            </article>

            {/* Classic Boys Uniform */}
            <article className="overflow-hidden rounded-[2rem] bg-[#f8f6f2]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/uniform/boys-classic.jpg"
                  alt="AIS classic boys school uniform"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  Design 02
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Classic Boys' Uniform
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  A peach shirt paired with navy bottoms and the AIS school
                  tie creates the classic boys' uniform look.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================================
          BOYS' DESIGN DETAILS
      ========================================================== */}
      <section className="bg-[#f8f6f2] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">

            <div className="overflow-hidden rounded-[2rem] bg-white">
              <Image
                src="/images/uniform/boys-pattern.jpg"
                alt="AIS boys patterned uniform design details"
                width={1400}
                height={1200}
                className="h-auto w-full"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
                Boys' Details
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                The pattern carries the AIS identity.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                The official boys' uniform reference presents the shirt,
                collar, buttons, fabric pattern and trousers as part of the
                complete design.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CARDIGAN
      ========================================================== */}
      <section
        id="cardigan"
        className="scroll-mt-20 bg-[#0d2f4a] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
              School Wear
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              AIS Cardigan
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              The AIS cardigan provides another recognizable part of the
              school's clothing identity, with coordinated navy and peach
              detailing and AIS branding.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white">
            <Image
              src="/images/uniform/cardigan-and-bag.jpg"
              alt="AIS boys and girls cardigans and school bag"
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>

        </div>
      </section>
{/* =========================================================
    BOYS' UNIFORM — OFFICIAL OUTFIT
========================================================== */}
<section
  id="boys-outfit"
  className="scroll-mt-20 bg-white py-24 md:py-32"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

      {/* Text */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
          Boys' Uniform
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          The Official Boys' Outfit
        </h2>

        <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          The AIS boys' uniform combines the school's distinctive patterned
          shirt with navy trousers, creating a smart and recognizable school
          identity.
        </p>

        <div className="mt-8 space-y-5">

          {/* Shirt */}
          <div className="border-l-2 border-[#f2a07a] pl-5">
            <p className="font-semibold text-[#0d2f4a]">
              Patterned Shirt
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              The shirt features the official AIS patterned fabric and school
              branding.
            </p>
          </div>

          {/* Trousers */}
          <div className="border-l-2 border-[#f2a07a] pl-5">
            <p className="font-semibold text-[#0d2f4a]">
              Navy Trousers
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              The patterned shirt is paired with coordinated navy trousers.
            </p>
          </div>

          {/* Details */}
          <div className="border-l-2 border-[#f2a07a] pl-5">
            <p className="font-semibold text-[#0d2f4a]">
              AIS Design Details
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              The official design reference highlights the collar, buttons,
              fabric pattern and trouser fabric.
            </p>
          </div>

        </div>

        {/* Small identity statement */}
        <div className="mt-10 rounded-2xl bg-[#0d2f4a] p-6 text-white">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#f2a07a]">
            Knowledge • Discipline • Service
          </p>

          <p className="mt-3 text-sm leading-7 text-white/70">
            A distinctive look that represents the AIS community.
          </p>
        </div>
      </div>

      {/* Official Uniform Reference Image */}
      <div className="overflow-hidden rounded-[2rem] bg-[#f8f6f2]">
        <Image
          src="/images/uniform/boys-classic.jpg"
          alt="Official AIS boys patterned uniform"
          width={1400}
          height={1200}
          className="h-auto w-full"
        />
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
          ADDITIONAL DESIGN
      ========================================================== */}
      <section className="bg-[#f8f6f2] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
                Additional Design
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Another AIS uniform design.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                This additional design has been included among the official
                uniform materials supplied to us. 
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white">
              <Image
                src="/images/uniform/additional-design.jpg"
                alt="Additional AIS uniform design"
                width={1000}
                height={1200}
                className="h-auto w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
              More Than Appearance
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Knowledge. Discipline. Service.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-[2rem] bg-[#0d2f4a] p-8 text-white md:p-10">
              <span className="text-4xl font-semibold text-[#f2a07a]">
                01
              </span>

              <h3 className="mt-8 text-2xl font-semibold">
                Knowledge
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                A school identity centred around learning and the development
                of each student.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f8f6f2] p-8 md:p-10">
              <span className="text-4xl font-semibold text-[#f2a07a]">
                02
              </span>

              <h3 className="mt-8 text-2xl font-semibold">
                Discipline
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                A shared identity that complements the values and standards of
                school life.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f2a07a] p-8 md:p-10">
              <span className="text-4xl font-semibold text-[#0d2f4a]">
                03
              </span>

              <h3 className="mt-8 text-2xl font-semibold text-[#0d2f4a]">
                Service
              </h3>

              <p className="mt-4 leading-7 text-[#0d2f4a]/70">
                Preparing students to carry the values of their school into
                the wider world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-[#0d2f4a] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
            Discover AIS
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            A school community built for tomorrow.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Explore the learning environment, student experience and
            opportunities that make Ahmadiyya International School distinctive.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/school-life"
              className="inline-flex items-center justify-center rounded-full bg-[#f2a07a] px-7 py-4 text-sm font-semibold text-[#0d2f4a] transition-transform duration-300 hover:-translate-y-1"
            >
              Explore School Life
            </Link>

            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0d2f4a]"
            >
              Admissions
            </Link>

          </div>
        </div>
      </section>

    </main>
    
  );
}