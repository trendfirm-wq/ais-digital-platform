import Link from "next/link";

export default function LeadershipPreview() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#174a70]">

          {/* Decorative elements */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#0d2f4a]/40" />

          <div className="relative grid min-h-[380px] lg:grid-cols-[0.8fr_1.2fr]">

            {/* NUMBER */}
            <div className="relative flex items-center justify-center overflow-hidden border-b border-white/10 p-10 lg:border-b-0 lg:border-r">
              <span className="select-none text-[10rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.06] md:text-[13rem] lg:text-[15rem]">
                01
              </span>

              <div className="absolute">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#f2a07a]/50 bg-[#f2a07a]/10 md:h-36 md:w-36">
                  <div className="h-3 w-3 rounded-full bg-[#f2a07a]" />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
                Leadership &amp; Governance
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
                The people guiding
                <span className="block text-white/55">
                  AIS forward.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                Meet the Management Board and explore the governance
                structure supporting the continued development of
                Ahmadiyya International School.
              </p>

              <div className="mt-9">
                <Link
                  href="/about/leadership"
                  className="group inline-flex items-center rounded-full bg-[#f2a07a] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#174a70]"
                >
                  Explore Leadership
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}