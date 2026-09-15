"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Academics",
    href: "/academics",
  },
  { label: "Calendar", href: "/events" },
  {
    label: "Facilities",
    href: "/facilities",
  },
  {
    label: "Community",
    href: "/community",
  },
];

const utilityLinks = [
  {
    label: "Apply",
    href: "/admissions/apply",
  },
  {
    label: "Visit",
    href: "/admissions/visit",
  },
  {
    label: "Calendar",
    href: "/events",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1500px] items-start justify-between px-5 py-5 sm:px-8 lg:px-10">

          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="relative h-16 w-16 shrink-0 sm:h-[72px] sm:w-[72px]">
  <Image
    src="/images/brand/ais-logo.png"
    alt="T.I. Ahmadiyya International School"
    fill
    priority
    className="object-contain"
  />
</div>

            <div className="text-white">
              <div className="text-sm font-bold uppercase tracking-[0.12em] sm:text-base">
                T.I. Ahmadiyya
              </div>

              <div className="text-[10px] uppercase tracking-[0.16em] text-white/70 sm:text-xs">
                International School
              </div>

              <div className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--ais-orange)]">
                Best Among Equals
              </div>
            </div>
          </Link>

          {/* DESKTOP CONTROLS */}
          <div className="hidden items-center gap-2 lg:flex">

            <nav className="flex items-center rounded-full bg-[#174568]/95 px-2 py-1.5 backdrop-blur-md">
              {navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    rounded-full px-5 py-2.5
                    text-sm font-semibold text-white
                    transition-all
                    hover:bg-white/10
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="
                rounded-full
                bg-[var(--ais-orange)]
                px-6 py-3
                text-sm font-bold text-white
                shadow-lg
                transition-all
                hover:-translate-y-0.5
                hover:bg-[var(--ais-orange-dark)]
              "
            >
              Enquire
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="
                rounded-full
                bg-[#e3292d]
                px-6 py-3
                text-sm font-bold text-white
                shadow-lg
                transition-all
                hover:-translate-y-0.5
              "
              aria-label="Open menu"
            >
              Menu
              <span className="ml-2 tracking-widest">
                •••
              </span>
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="
              rounded-full
              bg-[var(--ais-orange)]
              px-5 py-3
              text-sm font-bold text-white
              shadow-lg
              lg:hidden
            "
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* =====================================================
          BACKDROP
      ===================================================== */}

      <div
        className={`
          fixed inset-0 z-[90]
          bg-black/55
          transition-opacity duration-500
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={() => setMenuOpen(false)}
      />

      {/* =====================================================
          FULL MENU EXPERIENCE
      ===================================================== */}

      <div
        className={`
          fixed inset-0 z-[100]
          flex
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* =================================================
            IMAGE SIDE
        ================================================= */}

        <div className="relative hidden flex-1 overflow-hidden lg:block">

          <Image
            src="/images/school-life/student-life.jpg"
            alt="Life at T.I. Ahmadiyya International School"
            fill
            className="
              object-cover
              scale-105
              transition-transform
              duration-[1200ms]
            "
            priority
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-[#0d2238]/20" />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d2238]/80 via-transparent to-transparent p-12">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ais-orange)]">
              T.I. Ahmadiyya International School
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight text-white">
              Discover a place to learn, grow and lead.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
              Best Among Equals
            </p>

          </div>
        </div>

        {/* =================================================
            MENU SIDE
        ================================================= */}

        <div className="relative flex h-full w-full flex-col bg-[var(--ais-navy)] lg:w-[52%] lg:max-w-[900px]">

          {/* TOP BAR */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-10 lg:px-12">

            {/* UTILITY LINKS */}
            <div className="hidden items-center gap-8 md:flex">
              {utilityLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    text-sm font-semibold text-white
                    transition-colors
                    hover:text-[var(--ais-orange)]
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* MOBILE BRAND */}
            <span className="text-sm font-bold text-white md:hidden">
              AIS
            </span>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="
                ml-auto
                flex items-center gap-3
                rounded-full
                bg-[#e3292d]
                px-5 py-3
                text-sm font-bold text-white
                transition-all
                hover:bg-[#c91f23]
              "
              aria-label="Close menu"
            >
              Close
              <span className="tracking-widest">
                •••
              </span>
            </button>
          </div>

          {/* SEARCH */}
          <Link
            href="/search"
            onClick={() => setMenuOpen(false)}
            className="
              flex items-center gap-4
              border-b border-white/10
              px-6 py-5
              text-[var(--ais-orange)]
              sm:px-10
              lg:px-12
            "
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>

            <span className="font-semibold">
              Search
            </span>
          </Link>

          {/* MAIN NAV */}
          <nav className="flex-1 overflow-y-auto px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

            <div className="space-y-2">

              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    py-3
                    text-white
                    transition-all
                    duration-300
                    sm:py-4
                  "
                >
                  <span
                    className="
                      text-3xl
                      font-light
                      tracking-tight
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                      sm:text-4xl
                      lg:text-[2.7rem]
                    "
                  >
                    {item.label}
                  </span>

                  <span
                    className="
                      mr-2
                      text-xl
                      text-white/25
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[var(--ais-orange)]
                    "
                  >
                    ↗
                  </span>
                </Link>
              ))}

            </div>

            {/* MOBILE ACTIONS */}
            <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 md:hidden">

              {utilityLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-full
                    border border-white/15
                    px-5 py-4
                    text-center
                    font-semibold text-white
                  "
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </nav>

          {/* BOTTOM */}
          <div className="hidden border-t border-white/10 px-12 py-6 md:block">

            <div className="flex items-center justify-between">

              <span className="text-xs uppercase tracking-[0.25em] text-white/35">
                Best Among Equals
              </span>

              <Link
                href="/admissions/apply"
                onClick={() => setMenuOpen(false)}
                className="
                  text-sm font-semibold
                  text-[var(--ais-orange)]
                  transition-colors
                  hover:text-white
                "
              >
                Apply to AIS →
              </Link>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}