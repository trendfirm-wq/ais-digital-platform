import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const eventData: Record<
  string,
  {
    category: string;
    status: string;
    title: string;
    date: string;
    location: string;
    description: string;
    hero: string;
    moments: string[];
    documents: {
      title: string;
      description: string;
    }[];
  }
> = {
  "national-ijtemaa-2026": {
    category: "Ongoing Event",
    status: "Live",
    title: "National Ijtema'a 2026",
    date: "Date to be confirmed",
    location: "T.I. Ahmadiyya International School",
    description:
      "Follow the latest moments, updates and published materials from this event. Event photographs, speeches, programmes and other approved materials can be added here as they become available.",
    hero: "/images/hero/ais-students.jpg",
    moments: [
      "/images/hero/ais-students.jpg",
      "/images/hero/ais-community.jpg",
      "/images/school-life/student-life.jpg",
      "/images/school-life/leadership.jpg",
      "/images/school-life/sports.jpg",
      "/images/school-life/arts.jpg",
    ],
    documents: [
      {
        title: "Event Programme",
        description: "Official programme document.",
      },
      {
        title: "Latest Speech",
        description: "Published speech or address.",
      },
      {
        title: "Event Information",
        description: "Additional event information.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(eventData).map((slug) => ({
    slug,
  }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = eventData[slug];

  if (!event) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-[#f7f5f1] text-[#17212b]">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative min-h-[75vh] overflow-hidden bg-[#0d2238] text-white">
          <Image
            src={event.hero}
            alt={event.title}
            fill
            priority
            className="object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081827] via-[#081827]/75 to-[#081827]/20" />

          <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
            <div className="max-w-5xl">

              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#e8752b] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em]">
                  {event.category}
                </span>

                {event.status === "Live" && (
                  <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8752b]" />
                    Live
                  </span>
                )}
              </div>

              <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.04em] md:text-7xl lg:text-[90px]">
                {event.title}
              </h1>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
                <span>{event.date}</span>
                <span className="hidden text-white/20 md:block">/</span>
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EVENT INTRO
        ===================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e8752b]">
                About this event
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Stay close to the moment.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#68737d]">
                {event.description}
              </p>

              <div className="mt-10">
                <Link
                  href="/events"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#0d2238] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#e8752b]"
                >
                  ← All events
                  <span className="hidden transition-transform group-hover:-translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EVENT MOMENTS
        ===================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e8752b]">
                Event coverage
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Moments from the event.
              </h2>
            </div>

            <div className="grid auto-rows-[260px] grid-cols-2 gap-4 md:grid-cols-4">

              {event.moments.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`group relative overflow-hidden ${
                    index === 0
                      ? "col-span-2 row-span-2"
                      : index === 3
                        ? "row-span-2"
                        : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${event.title} moment ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081827]/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-[#081827]/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white opacity-0 backdrop-blur transition duration-500 group-hover:opacity-100">
                    Moment {index + 1}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            DOCUMENTS
        ===================================================== */}
        <section className="bg-[#0d2238] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e8752b]">
                  Documents & speeches
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Read the published materials.
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-white/50">
                  Approved event programmes, speeches and supporting documents
                  can be made available here as downloadable or viewable PDFs.
                </p>
              </div>

              <div className="space-y-3">
                {event.documents.map((document, index) => (
                  <button
                    key={document.title}
                    className="group flex w-full items-center gap-5 border border-white/10 p-5 text-left transition-all duration-300 hover:border-[#e8752b] hover:bg-white/[0.04]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#e8752b] text-[10px] font-black">
                      PDF
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                        Document 0{index + 1}
                      </p>

                      <h3 className="mt-1 text-lg font-bold">
                        {document.title}
                      </h3>

                      <p className="mt-1 text-sm text-white/40">
                        {document.description}
                      </p>
                    </div>

                    <span className="text-xl text-[#e8752b] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            EVENT FOOTER
        ===================================================== */}
        <section className="bg-[#f7f5f1]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

            <div className="flex flex-col gap-8 border-t border-[#dfe4e8] pt-10 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#68737d]">
                  Continue exploring
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Discover more from AIS.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/gallery"
                  className="rounded-full border border-[#0d2238]/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-[#e8752b] hover:text-[#e8752b]"
                >
                  Gallery
                </Link>

                <Link
                  href="/news-events"
                  className="rounded-full border border-[#0d2238]/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-[#e8752b] hover:text-[#e8752b]"
                >
                  News & Events
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