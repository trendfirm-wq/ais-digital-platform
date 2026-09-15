import Link from "next/link";

const exploreLinks = [
  { label: "About AIS", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "School Life", href: "/school-life" },
  { label: "Facilities", href: "/facilities" },
  { label: "News & Events", href: "/news-events" },
  { label: "Gallery", href: "/gallery" },
];

const admissionsLinks = [
  { label: "Admissions", href: "/admissions" },
  { label: "How to Apply", href: "/admissions/how-to-apply" },
  { label: "Enquire", href: "/contact" },
  { label: "Visit AIS", href: "/admissions/visit" },
  { label: "FAQs", href: "/admissions/faqs" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d2f4a] text-white">
      {/* Large background word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-35px] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.025]"
      >
        AIS
      </div>

      {/* Main footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-8 lg:pt-28">
        {/* Top statement */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <span className="mb-5 block text-sm font-bold uppercase tracking-[0.25em] text-[#f2a07a]">
              T.I. Ahmadiyya International School
            </span>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Inspiring students to become their best.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="mb-6 max-w-md text-base leading-7 text-white/60">
              Discover an educational environment built around learning,
              character, confidence and opportunity.
            </p>

            <Link
              href="/admissions"
              className="group inline-flex items-center gap-4 rounded-full bg-[#f2a07a] px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#174a70]"
            >
              Explore Admissions
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-lg font-black tracking-tight">
                AIS
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em]">
                  T.I. Ahmadiyya
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  International School
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/50">
              Best Among Equals
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#f2a07a]">
              Explore
            </h3>

            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-0 w-0 overflow-hidden text-[#f2a07a] transition-all duration-300 group-hover:mr-2 group-hover:w-3">
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#f2a07a]">
              Admissions
            </h3>

            <ul className="space-y-3">
              {admissionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-0 w-0 overflow-hidden text-[#f2a07a] transition-all duration-300 group-hover:mr-2 group-hover:w-3">
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#f2a07a]">
              Contact
            </h3>

            <div className="space-y-5 text-sm text-white/60">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Address
                </p>
                <p className="leading-6">
                  T.I. Ahmadiyya International School
                  <br />
                  Ghana
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Email
                </p>

                <a
                  href="mailto:info@ais.edu.gh"
                  className="transition-colors hover:text-white"
                >
                  info@ais.edu.gh
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Phone
                </p>

                <a
                  href="tel:+233000000000"
                  className="transition-colors hover:text-white"
                >
                  +233 XX XXX XXXX
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} T.I. Ahmadiyya International School.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Use
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}