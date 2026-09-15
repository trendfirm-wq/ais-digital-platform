import Link from "next/link";

const pathways = [
  {
    number: "01",
    title: "Academics",
    text: "Explore our learning pathways and educational programmes.",
    href: "/academics",
  },
  {
    number: "02",
    title: "Admissions",
    text: "Discover how to begin your journey with AIS.",
    href: "/admissions",
  },
  {
    number: "03",
    title: "School Life",
    text: "See what learning and community life looks like beyond the classroom.",
    href: "/school-life",
  },
  {
    number: "04",
    title: "Community",
    text: "Stay connected with the latest AIS news, events and stories.",
    href: "/community",
  },
];

export default function DiscoverAIS() {
  return (
    <section className="bg-[var(--ais-cream)] py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ais-orange)]">
              Discover AIS
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-[var(--ais-navy)] sm:text-5xl lg:text-6xl">
              Everything you need to know, in one place.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[var(--ais-muted)]">
            Explore the people, programmes, experiences and opportunities
            that make AIS a distinctive educational community.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--ais-border)] bg-[var(--ais-border)] md:grid-cols-2 lg:grid-cols-4">
          {pathways.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group bg-white p-8 transition-colors hover:bg-[var(--ais-navy)] sm:p-10"
            >
              <div className="flex h-full flex-col">
                <span className="text-sm font-bold text-[var(--ais-orange)]">
                  {item.number}
                </span>

                <h3 className="mt-16 text-2xl font-bold text-[var(--ais-navy)] transition-colors group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[var(--ais-muted)] transition-colors group-hover:text-white/65">
                  {item.text}
                </p>

                <span className="mt-8 text-sm font-bold text-[var(--ais-orange)]">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}