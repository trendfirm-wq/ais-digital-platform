import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const pathways = [
  {
    number: "01",
    title: "Nursery",
    description:
      "Early learning and development within a nurturing foundation for the AIS journey.",
    href: "/academics/nursery",
  },
  {
    number: "02",
    title: "Kindergarten",
    description:
      "Building strong foundations through curiosity, exploration and growing independence.",
    href: "/academics/kg",
  },
  {
    number: "03",
    title: "Primary",
    description:
      "Developing knowledge, skills, creativity and confidence for the years ahead.",
    href: "/academics/primary",
  },
  {
    number: "04",
    title: "Junior High School",
    description:
      "Deeper learning, responsibility and preparation for the next stage of education.",
    href: "/academics/jhs",
  },
];

const learningAreas = [
  {
    number: "01",
    title: "Knowledge",
    text: "Building a strong foundation of knowledge and understanding.",
  },
  {
    number: "02",
    title: "Skills",
    text: "Developing the practical and intellectual skills students need to progress.",
  },
  {
    number: "03",
    title: "Creativity",
    text: "Creating opportunities for curiosity, exploration and original thinking.",
  },
  {
    number: "04",
    title: "Character",
    text: "Supporting the development of confidence, responsibility and positive values.",
  },
  {
    number: "05",
    title: "Independence",
    text: "Encouraging students to become increasingly confident and capable learners.",
  },
  {
    number: "06",
    title: "Leadership",
    text: "Creating opportunities for students to take responsibility and contribute.",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <Header />

      <main className="bg-[#ffffff] text-[#090909]">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#174a70] px-6 py-28 text-white md:px-12 lg:px-20 lg:py-36">
          <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#f2a07a]/20 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#f2a07a]" />

          <div className="relative mx-auto max-w-7xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
              Academics
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Curriculum & Programmes
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl">
              A learning journey designed to help every student discover,
              develop and lead.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Our Approach
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#174a70] md:text-5xl">
                Learning with purpose.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-[#5f6367]">
                The AIS academic experience will bring together the school&apos;s
                approved curriculum, learning programmes and wider educational
                experiences across every stage of the student journey.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#5f6367]">
                Detailed curriculum information will be added as official AIS
                academic content is confirmed and approved.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS */}
        <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Learning Pathways
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#174a70] md:text-5xl">
                Every stage has a purpose.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {pathways.map((pathway) => (
                <Link
                  key={pathway.number}
                  href={pathway.href}
                  className="group rounded-3xl border border-[#e2e2e2] bg-[#ffffff] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-sm font-semibold text-[#f2a07a]">
                      {pathway.number}
                    </span>

                    <span className="text-xl text-[#5f6367] transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-14 text-2xl font-semibold text-[#174a70] md:text-3xl">
                    {pathway.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-[#5f6367]">
                    {pathway.description}
                  </p>

                  <div className="mt-8 h-px w-10 bg-[#f2a07a] transition-all duration-300 group-hover:w-20" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING EXPERIENCE */}
        <section className="bg-[#174a70] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  The Learning Experience
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  More than what happens in a classroom.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-8 text-white/70">
                  The final AIS academic framework will connect classroom
                  learning with the broader experiences that help students
                  develop knowledge, confidence, character and responsibility.
                </p>

                <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                  {learningAreas.map((area) => (
                    <div
                      key={area.number}
                      className="border-t border-white/15 pt-5"
                    >
                      <span className="text-sm font-semibold text-[#f2a07a]">
                        {area.number}
                      </span>

                      <h3 className="mt-4 text-xl font-semibold">
                        {area.title}
                      </h3>

                      <p className="mt-3 leading-7 text-white/60">
                        {area.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM DETAILS PLACEHOLDER */}
        <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#e2e2e2] md:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                    Curriculum Details
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#174a70] md:text-4xl">
                    Official academic information will live here.
                  </h2>
                </div>

                <div className="space-y-6 text-[#5f6367]">
                  <p className="text-lg leading-8">
                    This section is intentionally structured for the approved
                    AIS curriculum content.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Curriculum structure",
                      "Subjects & learning areas",
                      "Academic programmes",
                      "Assessment approach",
                      "Learning resources",
                      "Academic support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-[#ffffff] px-5 py-4"
                      >
                        <span className="font-medium text-[#174a70]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f2a07a] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Explore AIS
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                See how learning connects with school life.
              </h2>
            </div>

            <Link
              href="/school-life"
              className="inline-flex w-fit items-center rounded-full bg-[#174a70] px-7 py-4 font-semibold text-white transition hover:bg-[#0d2f4a]"
            >
              Explore School Life →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}