import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const featuredStories = [
  {
    category: "School News",
    date: "Coming Soon",
    title: "Latest news from AIS",
    description:
      "Updates, announcements and stories from the T.I. Ahmadiyya International School community.",
    image: "/images/home/ais-students.jpg",
  },
  {
    category: "Academic",
    date: "Coming Soon",
    title: "Learning at AIS",
    description:
      "Discover learning experiences, programmes and academic developments across the school.",
    image: "/images/home/ais-learning.jpg",
  },
  {
    category: "Community",
    date: "Coming Soon",
    title: "Our school community",
    description:
      "Explore moments, achievements and activities that bring the AIS community together.",
    image: "/images/school-life/student-life.jpg",
  },
];

const eventTypes = [
  {
    label: "Upcoming",
    title: "Upcoming Events",
    description:
      "Important dates, school activities and events will appear here.",
  },
  {
    label: "Ongoing",
    title: "Ongoing Events",
    description:
      "Follow events currently taking place and explore their latest updates.",
  },
  {
    label: "Past",
    title: "Past Events",
    description:
      "Revisit previous events, moments and published event materials.",
  },
];

export default function NewsEventsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f5f1] text-[#17212b]">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0d2238] text-white">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#e8752b]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-[#e8752b]">
              AIS Journal
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-[0.94] tracking-[-0.04em] md:text-7xl lg:text-[92px]">
              News.
              <br />
              Events.
              <br />
              Moments.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
              Stay connected with what is happening across the T.I. Ahmadiyya
              International School community.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#e8752b] to-transparent" />
        </section>

        {/* FEATURED NEWS */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                Latest
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                From AIS
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#68737d]">
              News, announcements and stories will be managed through the AIS
              content system as the platform grows.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredStories.map((story, index) => (
              <article
                key={story.title}
                className={`group overflow-hidden bg-white ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081827]/60 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 rounded-full bg-[#e8752b] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {story.category}
                  </span>
                </div>

                <div className="p-7 lg:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#68737d]">
                    {story.date}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight">
                    {story.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#68737d]">
                    {story.description}
                  </p>

                  <button
                    disabled
                    className="mt-7 inline-flex cursor-default items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0d2238]/40"
                  >
                    Read story
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EVENTS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Stay involved
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  What&apos;s happening?
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-[#68737d]">
                  From major school occasions to everyday community activities,
                  the events area will keep families and visitors connected.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#0d2238] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#e8752b]"
                >
                  Contact AIS
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div className="divide-y divide-[#dfe4e8] border-y border-[#dfe4e8]">
                {eventTypes.map((event, index) => (
                  <div
                    key={event.title}
                    className="group grid gap-5 py-8 md:grid-cols-[100px_1fr_auto] md:items-center"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8752b]">
                      0{index + 1}
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#68737d]">
                        {event.label}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold tracking-tight">
                        {event.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-[#68737d]">
                        {event.description}
                      </p>
                    </div>

                    <span className="hidden text-2xl text-[#e8752b] transition-transform group-hover:translate-x-1 md:block">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ONGOING EVENT FEATURE */}
        <section className="bg-[#0d2238] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/school-life/leadership.jpg"
                  alt="AIS school community"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[#081827]/20" />

                <div className="absolute bottom-6 left-6 rounded-full bg-[#e8752b] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em]">
                  Live / Ongoing
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8752b]">
                  Follow the moment
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Experience events as they happen.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
                  The ongoing events area will provide a dedicated space for
                  event updates, photographs and published documents such as
                  speeches and programmes.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                    Photos
                  </span>

                  <span className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                    Documents
                  </span>

                  <span className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                    Updates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALENDAR CTA */}
        <section className="bg-[#f7f5f1]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="rounded-[2rem] bg-[#e8752b] px-7 py-14 text-white md:px-12 lg:px-16">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Plan ahead
                  </p>

                  <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                    Keep AIS in your calendar.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
                    The full school calendar and event details will be
                    available through the platform.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="w-fit rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#0d2238] transition hover:bg-[#0d2238] hover:text-white"
                >
                  Get in touch
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