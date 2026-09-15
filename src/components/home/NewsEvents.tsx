"use client";

import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: "01",
    type: "News",
    date: "Latest",
    title: "News and announcements from AIS",
    excerpt:
      "Keep up with the latest stories, announcements and developments from the school community.",
    image: "/images/home/learning.jpg",
    href: "/news",
  },
  {
    id: "02",
    type: "Event",
    date: "Upcoming",
    title: "School events and important dates",
    excerpt:
      "Discover upcoming activities, programmes and events happening across the AIS community.",
    image: "/images/home/student.jpg",
    href: "/events",
  },
  {
    id: "03",
    type: "Community",
    date: "Featured",
    title: "Celebrating our school community",
    excerpt:
      "Explore moments and experiences that bring students, families, staff and the wider community together.",
    image: "/images/home/leadership.jpg",
    href: "/community",
  },
];

export default function NewsEvents() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.25em] text-[#e8752b]">
              News & Events
            </span>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-[#0d2238] md:text-5xl lg:text-6xl">
              What's happening at AIS.
            </h2>
          </div>

          <Link
            href="/news"
            className="group inline-flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0d2238]"
          >
            View all news

            <span className="text-[#e8752b] transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        {/* FEATURED GRID */}
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

          {/* FEATURED STORY */}
          <Link
            href={newsItems[0].href}
            className="group relative min-h-[520px] overflow-hidden bg-[#0d2238]"
          >
            <Image
              src={newsItems[0].image}
              alt={newsItems[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#081827] via-[#081827]/30 to-transparent" />

            <div className="absolute left-7 top-7 flex items-center gap-3">
              <span className="bg-[#e8752b] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                {newsItems[0].type}
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                {newsItems[0].date}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 max-w-2xl p-7 md:p-10">
              <span className="mb-4 block text-sm font-bold tracking-[0.2em] text-white/40">
                {newsItems[0].id}
              </span>

              <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                {newsItems[0].title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                {newsItems[0].excerpt}
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-white">
                Read more
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </Link>

          {/* SIDE STORIES */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {newsItems.slice(1).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group relative overflow-hidden bg-[#0d2238]"
              >
                <div className="relative h-full min-h-[250px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081827] via-[#081827]/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#e8752b]">
                        {item.type}
                      </span>

                      <span className="text-xs text-white/40">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                      {item.title}
                    </h3>

                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                      Explore
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* EVENTS BAR */}
        <div className="mt-6 grid border border-[#dfe4e8] bg-white md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-center gap-5 p-6 md:p-8">
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center bg-[#0d2238] text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                AIS
              </span>
              <span className="text-xl font-bold">→</span>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8752b]">
                Events
              </span>

              <h3 className="mt-1 text-lg font-bold text-[#0d2238] md:text-xl">
                Explore the AIS events calendar
              </h3>

              <p className="mt-1 text-sm text-[#68737d]">
                Find upcoming school activities and important dates.
              </p>
            </div>
          </div>

          <Link
            href="/events"
            className="flex items-center justify-center border-t border-[#dfe4e8] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-[#0d2238] transition-colors hover:bg-[#e8752b] hover:text-white md:border-l md:border-t-0"
          >
            View Calendar →
          </Link>
        </div>
      </div>
    </section>
  );
}