"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

import {
  managementBoard,
  leadershipCommittees,
} from "@/lib/leadership";

function getInitials(name: string) {
  const words = name
    .replace(/[().]/g, "")
    .split(" ")
    .filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${
    words[words.length - 1][0]
  }`.toUpperCase();
}

export default function LeadershipPage() {
  const chairman = managementBoard.find(
    (person) => person.designation === "Board Chairman"
  );

  const otherBoardMembers = managementBoard.filter(
    (person) => person.designation !== "Board Chairman"
  );

  const administration = managementBoard.find(
    (person) => person.designation === "Ag. Head Mistress"
  );

  return (
    <>
      <Header />

      <main className="bg-[#ffffff] text-[#090909]">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative min-h-[65vh] overflow-hidden bg-[#174a70]">

          <Image
            src="/images/school-life/leadership.jpg"
            alt="AIS leadership"
            fill
            priority
            className="object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#174a70] via-[#174a70]/90 to-[#174a70]/40" />

          <div className="relative flex min-h-[65vh] items-end px-6 py-20 md:px-12 lg:px-20 lg:py-28">
            <div className="mx-auto w-full max-w-7xl">

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
                About AIS
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Leadership &amp;
                <span className="block">
                  Governance.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl">
                The leadership and governance structure supporting the
                continued development of Ahmadiyya International School.
              </p>

            </div>
          </div>
        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Governance
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#174a70] md:text-5xl">
                Leadership with purpose.
              </h2>
            </div>

            <div className="max-w-3xl">

              <p className="text-lg leading-8 text-[#5f6367]">
                The AIS Management Board brings together its members
                to provide institutional leadership and support the
                continued development of the school.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#5f6367]">
                The Board works through dedicated committees covering
                key areas of governance and institutional development.
              </p>

            </div>
          </div>
        </section>


        {/* =====================================================
            GOVERNANCE STRUCTURE
        ===================================================== */}
        <section className="bg-[#ffffff] px-6 pb-20 md:px-12 lg:px-20 lg:pb-28">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Structure
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#174a70] md:text-5xl">
                How AIS is governed.
              </h2>

            </div>


            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {/* BOARD */}
              <div className="rounded-[2rem] bg-[#174a70] p-8 text-white md:p-9">

                <span className="text-sm font-semibold text-[#f2a07a]">
                  01
                </span>

                <h3 className="mt-16 text-2xl font-semibold">
                  Management Board
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  Provides institutional leadership and oversight
                  for the school.
                </p>

              </div>


              {/* COMMITTEES */}
              <div className="rounded-[2rem] bg-[#f7f7f7] p-8 md:p-9">

                <span className="text-sm font-semibold text-[#f2a07a]">
                  02
                </span>

                <h3 className="mt-16 text-2xl font-semibold text-[#174a70]">
                  Board Committees
                </h3>

                <p className="mt-4 leading-7 text-[#5f6367]">
                  Dedicated committees supporting important areas
                  of governance.
                </p>

              </div>


              {/* ADMINISTRATION */}
              <div className="rounded-[2rem] bg-[#f7f7f7] p-8 md:p-9">

                <span className="text-sm font-semibold text-[#f2a07a]">
                  03
                </span>

                <h3 className="mt-16 text-2xl font-semibold text-[#174a70]">
                  School Administration
                </h3>

                <p className="mt-4 leading-7 text-[#5f6367]">
                  Leadership supporting the daily academic and
                  operational life of the school.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            CHAIRMAN FEATURE
        ===================================================== */}
        {chairman && (
          <section className="bg-[#174a70] px-6 py-20 md:px-12 lg:px-20 lg:py-28">

            <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#0d2f4a] lg:grid-cols-[0.8fr_1.2fr]">

              {/* PHOTO / PLACEHOLDER */}
              <div className="relative min-h-[360px] overflow-hidden">

                <Image
                  src="/images/leadership/chairman.jpg"
                  alt={chairman.name}
                  fill
                  className="object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center bg-[#174a70]">

                  <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl font-semibold text-white">
                    {getInitials(chairman.name)}
                  </div>

                </div>

              </div>


              {/* CONTENT */}
              <div className="flex flex-col justify-center p-8 text-white md:p-12 lg:p-16">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  Board Chairman
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
                  {chairman.name}
                </h2>

                <p className="mt-4 text-lg text-white/60">
                  {chairman.designation}
                </p>

                <div className="mt-8 h-px w-16 bg-[#f2a07a]" />

                <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                  Leadership and oversight in support of the continued
                  development of Ahmadiyya International School.
                </p>

              </div>

            </div>
          </section>
        )}


        {/* =====================================================
            MANAGEMENT BOARD
        ===================================================== */}
        <section className="bg-[#ffffff] px-6 py-20 md:px-12 lg:px-20 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  The Board
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#174a70] md:text-5xl">
                  Management Board
                </h2>

              </div>

              <p className="max-w-xl text-lg leading-8 text-[#5f6367]">
                Members of the Management Board supporting the leadership
                and governance of AIS.
              </p>

            </div>


            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {otherBoardMembers.map((person, index) => (

                <article
                  key={`${person.name}-${person.designation}`}
                  className="group relative overflow-hidden rounded-[2rem] bg-[#f7f7f7] p-7 transition duration-500 hover:-translate-y-1 hover:bg-[#174a70]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#174a70] text-sm font-semibold text-white transition duration-300 group-hover:bg-[#f2a07a]">
                      {getInitials(person.name)}
                    </div>

                    <span className="text-sm font-semibold text-[#f2a07a]">
                      {String(index + 2).padStart(2, "0")}
                    </span>

                  </div>


                  <div className="mt-12">

                    <h3 className="text-xl font-semibold leading-7 text-[#174a70] transition group-hover:text-white">
                      {person.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#5f6367] transition group-hover:text-white/70">
                      {person.designation}
                    </p>

                  </div>


                  <div className="mt-10 flex items-center justify-between">

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#5f6367] transition group-hover:text-white/50">
                      Management Board
                    </span>

                    <span className="text-xl text-[#174a70] transition duration-300 group-hover:translate-x-1 group-hover:text-[#f2a07a]">
                      ↗
                    </span>

                  </div>

                </article>

              ))}

            </div>
          </div>
        </section>


        {/* =====================================================
            COMMITTEES
        ===================================================== */}
        <section className="bg-[#174a70] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  Governance
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Board Committees
                </h2>

                <p className="mt-6 max-w-md text-lg leading-8 text-white/70">
                  The Management Board works through dedicated
                  committees covering key areas identified by AIS.
                </p>

              </div>


              <div className="divide-y divide-white/15 border-y border-white/15">

                {leadershipCommittees.map((committee, index) => (

                  <details
                    key={committee.name}
                    className="group"
                  >

                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">

                      <div className="flex items-center gap-5">

                        <span className="text-sm font-semibold text-[#f2a07a]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-lg font-semibold md:text-xl">
                          {committee.name}
                        </h3>

                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 transition duration-300 group-open:rotate-45 group-open:bg-[#f2a07a] group-open:text-[#174a70]">
                        +
                      </span>

                    </summary>


                    <div className="grid gap-8 pb-8 md:grid-cols-[0.8fr_1.2fr]">

                      {committee.chairperson && (

                        <div>

                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                            Chairperson
                          </p>

                          <p className="mt-3 font-medium text-white">
                            {committee.chairperson}
                          </p>

                        </div>

                      )}


                      {committee.members.length > 0 && (

                        <div>

                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                            Members
                          </p>

                          <div className="mt-3 grid gap-2 sm:grid-cols-2">

                            {committee.members.map((member) => (

                              <p
                                key={`${committee.name}-${member}`}
                                className="text-sm leading-6 text-white/70"
                              >
                                {member}
                              </p>

                            ))}

                          </div>

                        </div>

                      )}

                    </div>

                  </details>

                ))}

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            SCHOOL ADMINISTRATION
        ===================================================== */}
        {administration && (

          <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">

            <div className="mx-auto max-w-7xl">

              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                    School Administration
                  </p>

                  <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#174a70] md:text-5xl">
                    School Leadership
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f6367]">
                    The school administration supports the daily academic
                    and operational life of AIS.
                  </p>

                </div>


                <div className="rounded-[2rem] bg-[#f7f7f7] p-8 md:p-10">

                  <div className="flex items-center gap-6">

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#174a70] text-lg font-semibold text-white">
                      {getInitials(administration.name)}
                    </div>

                    <div>

                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f2a07a]">
                        Administration
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-[#174a70]">
                        {administration.name}
                      </h3>

                      <p className="mt-2 text-[#5f6367]">
                        {administration.designation}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

        )}


        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-[#f2a07a] px-6 py-20 md:px-12 lg:px-20 lg:py-24">

          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                About AIS
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Discover the AIS community.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Learn more about the people, programmes and experiences
                that make up Ahmadiyya International School.
              </p>

            </div>


            <Link
              href="/about"
              className="inline-flex w-fit items-center rounded-full bg-[#174a70] px-7 py-4 font-semibold text-white transition hover:bg-[#0d2f4a]"
            >
              Explore About AIS →
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}