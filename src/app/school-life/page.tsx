import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const experiences = [
  {
    number: "01",
    title: "Student Life",
    description:
      "A school experience that extends beyond lessons, creating opportunities for students to connect, participate and grow.",
    image: "/images/school-life/student-life.jpg",
    href: "/school-life/student-life",
  },
  {
    number: "02",
    title: "Sports",
    description:
      "Opportunities for students to develop teamwork, discipline, confidence and a healthy competitive spirit.",
    image: "/images/school-life/sports.jpg",
    href: "/school-life/sports",
  },
  {
    number: "03",
    title: "Arts & Culture",
    description:
      "Spaces for creativity, expression and appreciation of culture through a wide range of experiences.",
    image: "/images/school-life/arts.jpg",
    href: "/school-life/arts-culture",
  },
  {
    number: "04",
    title: "Leadership",
    description:
      "Opportunities for students to take responsibility, serve others and develop leadership qualities.",
    image: "/images/school-life/leadership.jpg",
    href: "/school-life/leadership",
  },
];

export default function SchoolLifePage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f5f1] text-[#17212b]">

        {/* HERO */}
        <section className="relative min-h-[70vh] overflow-hidden bg-[#0d2238]">
          <Image
            src="/images/school-life/student-life.jpg"
            alt="AIS student life"
            fill
            priority
            className="object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2238] via-[#0d2238]/80 to-transparent" />

          <div className="relative flex min-h-[70vh] items-end px-6 py-20 md:px-12 lg:px-20 lg:py-28">
            <div className="mx-auto w-full max-w-7xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#e8752b]">
                School Life
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Where learning becomes life.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl">
                Discover the experiences, relationships and opportunities that
                make up life at AIS.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                The AIS Experience
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#0d2238] md:text-5xl">
                More than the classroom.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-[#68737d]">
                School life at AIS will bring together the activities,
                experiences and communities that help students develop beyond
                their academic work.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#68737d]">
                As the school&apos;s official programmes and activities are
                confirmed, this section will become the central place to
                discover what students can experience throughout their AIS
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE GRID */}
        <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                Explore School Life
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0d2238] md:text-5xl">
                Discover what happens beyond lessons.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {experiences.map((experience) => (
                <Link
                  key={experience.number}
                  href={experience.href}
                  className="group relative overflow-hidden rounded-[2rem] bg-[#0d2238]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2238] via-[#0d2238]/40 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-semibold text-[#e8752b]">
                        {experience.number}
                      </span>

                      <span className="text-2xl text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-16 text-2xl font-semibold text-white md:text-3xl">
                      {experience.title}
                    </h3>

                    <p className="mt-3 max-w-lg leading-7 text-white/70">
                      {experience.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITY STRIP */}
        <section className="bg-[#0d2238] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                Community
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Growing together.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/70">
                AIS school life will provide opportunities for students,
                families, staff and the wider school community to connect,
                participate and contribute.
              </p>

              <Link
                href="/community"
                className="mt-8 inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0d2238]"
              >
                Explore Community →
              </Link>
            </div>
          </div>
        </section>

        {/* GALLERY TEASER */}
        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                  Moments
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0d2238] md:text-5xl">
                  Life at AIS.
                </h2>
              </div>

              <Link
                href="/gallery"
                className="font-semibold text-[#0d2238] underline decoration-[#e8752b] decoration-2 underline-offset-8"
              >
                View Gallery →
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/school-life/student-life.jpg"
                  alt="Student life"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl md:mt-10">
                <Image
                  src="/images/school-life/sports.jpg"
                  alt="Sports"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/school-life/arts.jpg"
                  alt="Arts and culture"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square overflow-hidden rounded-2xl md:mt-10">
                <Image
                  src="/images/school-life/leadership.jpg"
                  alt="Student leadership"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#e8752b] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Admissions
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Ready to discover AIS?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Learn more about joining the AIS community.
              </p>
            </div>

            <Link
              href="/admissions"
              className="inline-flex w-fit items-center rounded-full bg-[#0d2238] px-7 py-4 font-semibold text-white transition hover:bg-[#081827]"
            >
              Explore Admissions →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}