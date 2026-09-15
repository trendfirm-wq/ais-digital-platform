import Link from "next/link";

export default function AdmissionsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#e8752b]">
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border-[60px] border-white/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[60px] border-[#081827]/[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          
          {/* CONTENT */}
          <div>
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              Admissions
            </span>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-7xl">
              Your child's journey starts here.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Discover what makes T.I. Ahmadiyya International School a place
              where students can learn, grow, lead and prepare for the future.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/admissions"
              className="group inline-flex items-center justify-center gap-5 rounded-full bg-[#081827] px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#081827]"
            >
              Explore Admissions

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-5 rounded-full border border-white/40 px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#081827]"
            >
              Make an Enquiry

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* LOWER INFORMATION */}
        <div className="mt-16 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Step 01
            </p>
            <p className="mt-2 font-semibold text-white">
              Discover AIS
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Step 02
            </p>
            <p className="mt-2 font-semibold text-white">
              Submit an Enquiry
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Step 03
            </p>
            <p className="mt-2 font-semibold text-white">
              Begin Your Application
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}