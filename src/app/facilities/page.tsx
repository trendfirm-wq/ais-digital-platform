import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

const facilities = [
  {
    number: "01",
    title: "Campus",
    description:
      "Discover the spaces and environment that provide the setting for the AIS learning experience.",
    image: "/images/facilities/campus.jpg",
  },
  {
    number: "02",
    title: "Learning Spaces",
    description:
      "Purposeful spaces designed to support teaching, learning, collaboration and discovery.",
    image: "/images/facilities/learning-space.jpg",
  },
];

const facilityAreas = [
  "Learning environments",
  "Student spaces",
  "Academic facilities",
  "Recreation & activity spaces",
  "Community spaces",
  "Campus services",
];

export default function FacilitiesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#ffffff] text-[#090909]">

        {/* HERO */}
        <section className="relative min-h-[68vh] overflow-hidden bg-[#174a70]">
          <Image
            src="/images/facilities/campus.jpg"
            alt="AIS campus"
            fill
            priority
            className="object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#174a70] via-[#174a70]/80 to-transparent" />

          <div className="relative flex min-h-[68vh] items-end px-6 py-20 md:px-12 lg:px-20 lg:py-28">
            <div className="mx-auto w-full max-w-7xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
                Facilities
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Spaces designed for possibility.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl">
                Explore the environments that support learning, connection,
                creativity and school life at AIS.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Our Environment
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#174a70] md:text-5xl">
                The environment matters.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-[#5f6367]">
                The AIS campus and facilities will form an important part of
                the school experience, providing spaces where students can
                learn, collaborate, participate and grow.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#5f6367]">
                Detailed information about individual facilities will be added
                using approved AIS content and photography.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED FACILITIES */}
        <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Explore
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#174a70] md:text-5xl">
                Designed around the student experience.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {facilities.map((facility) => (
                <div
                  key={facility.number}
                  className="group overflow-hidden rounded-[2rem] bg-[#174a70]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#174a70] via-transparent to-transparent opacity-90" />

                    <span className="absolute left-7 top-7 text-sm font-semibold text-[#f2a07a] md:left-9 md:top-9">
                      {facility.number}
                    </span>
                  </div>

                  <div className="p-7 md:p-9">
                    <h3 className="text-3xl font-semibold text-white">
                      {facility.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-white/65">
                      {facility.description}
                    </p>

                    <div className="mt-7 h-px w-10 bg-[#f2a07a] transition-all duration-300 group-hover:w-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITY AREAS */}
        <section className="bg-[#174a70] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Facility Areas
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Spaces for every part of school life.
              </h2>
            </div>

            <div className="grid gap-x-8 sm:grid-cols-2">
              {facilityAreas.map((area, index) => (
                <div
                  key={area}
                  className="border-t border-white/15 py-6"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-sm font-semibold text-[#f2a07a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-lg font-medium text-white/90">
                      {area}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE FEATURE */}
        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white lg:grid-cols-2">

            <div className="relative min-h-[24rem]">
              <Image
                src="/images/facilities/learning-space.jpg"
                alt="AIS learning space"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Learning Spaces
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#174a70] md:text-4xl">
                Places that encourage students to learn and explore.
              </h2>

              <p className="mt-6 leading-8 text-[#5f6367]">
                Approved information about classrooms, specialist spaces,
                resources and other learning environments will be presented
                here as the AIS facilities information is finalized.
              </p>
            </div>

          </div>
        </section>

        {/* CAMPUS CTA */}
        <section className="bg-[#f2a07a] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Visit AIS
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Come and experience the environment.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Campus visit information and requests will be available
                through the AIS admissions experience.
              </p>
            </div>

            <Link
              href="/admissions"
              className="inline-flex w-fit items-center rounded-full bg-[#174a70] px-7 py-4 font-semibold text-white transition hover:bg-[#0d2f4a]"
            >
              Plan a Visit →
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}