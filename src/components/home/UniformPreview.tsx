"use client";

import Image from "next/image";
import Link from "next/link";

export default function UniformPreview() {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
              The AIS Look
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#0d2f4a] md:text-5xl lg:text-6xl">
              A Smart Look for a Greater Tomorrow.
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-8 text-slate-600 md:text-lg">
              Our school uniform gives every student a distinctive identity
              while reflecting the values of Ahmadiyya International School:
              knowledge, discipline and service.
            </p>
          </div>
        </div>

        {/* Uniform Content */}
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

          {/* =========================
              GIRLS' UNIFORM
          ========================== */}
          <div className="group relative overflow-hidden rounded-3xl bg-white">
            <Image
              src="/images/uniform/girls-uniform-pattern.jpg"
              alt="Girls wearing the AIS school uniform"
              width={1200}
              height={1400}
              priority={false}
              className="h-full min-h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d2f4a]/90 via-[#0d2f4a]/30 to-transparent p-8 pt-24">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#f2a07a]">
                Girls
              </p>

              
             
            </div>
          </div>

          {/* =========================
              RIGHT COLUMN
          ========================== */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">

            {/* =========================
                BOYS' UNIFORM
            ========================== */}
            <div className="group relative overflow-hidden rounded-3xl bg-white">
              <Image
                src="/images/uniform/boys-uniform.jpg"
                alt="Boys wearing the AIS school uniform"
                width={1000}
                height={850}
                priority={false}
                className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-[380px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d2f4a]/90 to-transparent p-7 pt-20">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f2a07a]">
                  Boys
                </p>

                <h3 className="mt-1 text-2xl font-semibold text-white">
                  Boys' Uniform
                </h3>
              </div>
            </div>

            {/* =========================
                CALL TO ACTION
            ========================== */}
            <div className="flex min-h-[220px] flex-col justify-between rounded-3xl bg-[#0d2f4a] p-8 md:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                  School Life
                </p>

                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">
                  Discover the official AIS uniform.
                </h3>
              </div>

              <Link
                href="/school-life/uniform"
                className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold text-white"
              >
                <span>Explore Uniform</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2a07a] text-[#0d2f4a] transition-transform duration-300 group-hover:rotate-45">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}