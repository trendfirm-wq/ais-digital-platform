"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type EventTab = "upcoming" | "ongoing" | "day1" | "day2" | "past";

const tabs: { id: EventTab; label: string }[] = [
  { id: "upcoming", label: "Upcoming" },
  { id: "ongoing", label: "Ongoing" },
  { id: "day1", label: "Day 1" },
  { id: "day2", label: "Day 2" },
  { id: "past", label: "Past Events" },
];

const events = {
  upcoming: [
    {
      title: "Upcoming AIS Event",
      category: "Upcoming",
      date: "Date to be announced",
      description:
        "Important upcoming school events and activities will appear here.",
      image: "/images/hero/ais-community.jpg",
    },
  ],

  ongoing: [
    {
      title: "National Ijtema'a",
      category: "Ongoing",
      date: "Live Event",
      description:
        "Follow the latest moments, photographs and published materials from the event.",
      image: "/images/hero/ais-students.jpg",
      documents: [
        {
          title: "Event Programme",
          type: "PDF",
        },
        {
          title: "Latest Speech",
          type: "PDF",
        },
      ],
    },
  ],

  day1: [
    {
      title: "Day 1",
      category: "Event Day",
      date: "Day 1",
      description:
        "Explore photographs, highlights and published documents from the first day.",
      image: "/images/school-life/leadership.jpg",
      documents: [
        {
          title: "Day 1 Programme",
          type: "PDF",
        },
      ],
    },
  ],

  day2: [
    {
      title: "Day 2",
      category: "Event Day",
      date: "Day 2",
      description:
        "Explore photographs, highlights and published documents from the second day.",
      image: "/images/school-life/student-life.jpg",
      documents: [
        {
          title: "Day 2 Programme",
          type: "PDF",
        },
      ],
    },
  ],

  past: [
    {
      title: "Past AIS Events",
      category: "Archive",
      date: "Previous Events",
      description:
        "Past events, programmes and selected highlights will be preserved here.",
      image: "/images/facilities/campus.jpg",
    },
  ],
};

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<EventTab>("ongoing");

  const activeEvents = events[activeTab];

  return (
    <>
      <Header />

      <main className="bg-[#ffffff] text-[#090909]">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#174a70] text-white">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#f2a07a]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-[#f2a07a]">
              AIS Events
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[92px]">
              Be part
              <br />
              of the
              <br />
              moment.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
              Discover what is happening at AIS, follow ongoing events and
              revisit moments from the school community.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#f2a07a] to-transparent" />
        </section>

        {/* =====================================================
            EVENT NAVIGATION
        ===================================================== */}
        <section className="sticky top-0 z-30 border-b border-[#e2e2e2] bg-[#ffffff]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 lg:px-8">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                    active
                      ? "bg-[#174a70] text-white"
                      : "text-[#5f6367] hover:bg-white hover:text-[#174a70]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            ACTIVE EVENT SECTION
        ===================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2a07a]">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                {activeTab === "ongoing"
                  ? "Happening now."
                  : activeTab === "past"
                    ? "Event archive."
                    : "Stay connected."}
              </h2>
            </div>

            <span className="hidden text-sm text-[#5f6367] md:block">
              {activeEvents.length}{" "}
              {activeEvents.length === 1 ? "event" : "events"}
            </span>
          </div>

          {/* =================================================
              EVENT CARDS
          ================================================= */}
    <div className="space-y-8">
  {activeEvents.map((event, index) => (
    <Link
      key={`${activeTab}-${event.title}-${index}`}
      href="/events/national-ijtemaa-2026"
      className="block overflow-hidden bg-white transition-shadow duration-500 hover:shadow-2xl"
    >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] min-h-[320px] lg:aspect-auto">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                    />

                    {activeTab === "ongoing" && (
                      <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-[#f2a07a] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                        Live
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2a07a]">
                      {event.category}
                    </p>

                    <h3 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                      {event.title}
                    </h3>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#5f6367]">
                      {event.date}
                    </p>

                    <p className="mt-7 max-w-xl text-base leading-8 text-[#5f6367]">
                      {event.description}
                    </p>

                    {/* DOCUMENTS */}
                    {"documents" in event && event.documents && (
                      <div className="mt-10">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#174a70]">
                          Event materials
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {event.documents.map((document) => (
                            <button
                              key={document.title}
                              className="group flex items-center gap-4 border border-[#e2e2e2] p-4 text-left transition-all duration-300 hover:border-[#f2a07a] hover:bg-[#fff1eb]"
                            >
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#174a70] text-xs font-black text-white transition group-hover:bg-[#f2a07a]">
                                PDF
                              </div>

                              <div>
                                <p className="text-sm font-bold">
                                  {document.title}
                                </p>

                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5f6367]">
                                  Open document →
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================
            LIVE EVENT MEDIA
        ===================================================== */}
        {activeTab === "ongoing" && (
          <section className="bg-[#174a70] text-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

              <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f2a07a]">
                    Live event coverage
                  </p>

                  <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                    Follow the latest moments.
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-7 text-white/50">
                    As events take place, this area can become a live media
                    stream containing photographs, updates and published
                    documents.
                  </p>
                </div>

                {/* MEDIA GRID */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "/images/hero/ais-students.jpg",
                    "/images/hero/ais-community.jpg",
                    "/images/school-life/sports.jpg",
                    "/images/school-life/arts.jpg",
                  ].map((image, index) => (
                    <div
                      key={image}
                      className={`relative overflow-hidden ${
                        index === 0 ? "aspect-square" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Event moment ${index + 1}`}
                        fill
                        className="object-cover transition duration-700 hover:scale-105"
                      />

                      <div className="absolute bottom-3 left-3 rounded-full bg-[#0d2f4a]/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] backdrop-blur">
                        Moment {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-[#ffffff]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="rounded-[2rem] bg-[#f2a07a] px-7 py-14 text-white md:px-12 lg:px-16 lg:py-16">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Stay connected
                  </p>

                  <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                    Want to know more about AIS?
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
                    Get in touch with the school or explore our admissions
                    information.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-fit rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#174a70] transition hover:bg-[#174a70] hover:text-white"
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