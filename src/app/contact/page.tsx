"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FormEvent, useState } from "react";

const enquiryTypes = [
  "General Enquiry",
  "Admissions Enquiry",
  "Campus Visit",
  "Careers",
  "Partnership / Community",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header />

      <main className="bg-[#ffffff] text-[#090909]">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#174a70] text-white">
          <div className="absolute inset-0">
            <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#f2a07a]/10 blur-3xl" />
            <div className="absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-white/[0.03] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-[#f2a07a]">
                Contact AIS
              </p>

              <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[92px]">
                Let&apos;s
                <br />
                connect.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                Whether you are exploring admissions, planning a visit,
                looking to work with us, or simply have a question, we would
                love to hear from you.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#f2a07a] via-[#f2a07a]/50 to-transparent" />
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f2a07a]">
                Start a conversation
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                We&apos;re here to help.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#5f6367]">
                Use the form below to send an enquiry to T.I. Ahmadiyya
                International School. Select the area that best describes
                your enquiry so that your message can be directed appropriately.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="rounded-full border border-[#174a70]/15 px-5 py-3 text-sm font-semibold transition hover:border-[#f2a07a] hover:text-[#f2a07a]"
                >
                  Explore Admissions
                </Link>

                <Link
                  href="/admissions/visit"
                  className="rounded-full border border-[#174a70]/15 px-5 py-3 text-sm font-semibold transition hover:border-[#f2a07a] hover:text-[#f2a07a]"
                >
                  Plan a Visit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FORM + CONTACT
        ===================================================== */}
        <section className="border-y border-[#e2e2e2] bg-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.35fr_0.65fr]">

            {/* FORM */}
            <div className="px-6 py-16 lg:px-12 lg:py-24">
              {!submitted ? (
                <>
                  <div className="mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2a07a]">
                      Send an enquiry
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                      How can we help?
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Enquiry type */}
                    <div>
                      <label
                        htmlFor="enquiryType"
                        className="mb-3 block text-sm font-semibold"
                      >
                        Enquiry type
                      </label>

                      <select
                        id="enquiryType"
                        name="enquiryType"
                        required
                        className="w-full appearance-none rounded-none border-0 border-b border-[#e2e2e2] bg-transparent px-0 py-4 text-base outline-none transition focus:border-[#f2a07a]"
                      >
                        <option value="">Select an enquiry type</option>

                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-semibold"
                        >
                          Full name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full border-0 border-b border-[#e2e2e2] bg-transparent px-0 py-4 text-base outline-none placeholder:text-[#5f6367]/50 focus:border-[#f2a07a]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-3 block text-sm font-semibold"
                        >
                          Phone number
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          className="w-full border-0 border-b border-[#e2e2e2] bg-transparent px-0 py-4 text-base outline-none placeholder:text-[#5f6367]/50 focus:border-[#f2a07a]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-semibold"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full border-0 border-b border-[#e2e2e2] bg-transparent px-0 py-4 text-base outline-none placeholder:text-[#5f6367]/50 focus:border-[#f2a07a]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-semibold"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us how we can help..."
                        className="w-full resize-none border-0 border-b border-[#e2e2e2] bg-transparent px-0 py-4 text-base outline-none placeholder:text-[#5f6367]/50 focus:border-[#f2a07a]"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-5 rounded-full bg-[#f2a07a] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#174a70]"
                    >
                      Send enquiry

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <p className="max-w-xl text-xs leading-5 text-[#5f6367]">
                      Please avoid including sensitive personal information
                      that is not necessary for your enquiry.
                    </p>
                  </form>
                </>
              ) : (
                /* SUCCESS */
                <div className="flex min-h-[560px] flex-col justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f2a07a] text-2xl text-white">
                    ✓
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#f2a07a]">
                    Message received
                  </p>

                  <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                    Thank you for getting in touch.
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f6367]">
                    Your enquiry has been received. A member of the AIS team
                    can follow up with you using the contact information you
                    provided.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/"
                      className="rounded-full bg-[#174a70] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#f2a07a]"
                    >
                      Back to home
                    </Link>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-[#174a70]/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition hover:border-[#f2a07a] hover:text-[#f2a07a]"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT PANEL */}
            <aside className="bg-[#174a70] px-6 py-16 text-white lg:px-10 lg:py-24">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2a07a]">
                Contact information
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight">
                T.I. Ahmadiyya
                <br />
                International School
              </h2>

              <div className="mt-12 space-y-10">

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                    Location
                  </p>

                  <p className="leading-7 text-white/65">
                    Ghana
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Official campus address to be added after confirmation.
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                    Email
                  </p>

                  <p className="text-white/65">
                    Official school email to be confirmed.
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                    Phone
                  </p>

                  <p className="text-white/65">
                    Official school telephone number to be confirmed.
                  </p>
                </div>

              </div>

              <div className="mt-16 border-t border-white/10 pt-8">
                <p className="text-sm leading-7 text-white/45">
                  Looking for admissions information?
                </p>

                <Link
                  href="/admissions"
                  className="mt-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:text-[#f2a07a]"
                >
                  Visit Admissions
                  <span>→</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            VISIT STRIP
        ===================================================== */}
        <section className="bg-[#ffffff]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#f2a07a] px-7 py-14 text-white md:px-12 lg:px-16 lg:py-16">

              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[40px] border-white/10" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65">
                    Experience AIS
                  </p>

                  <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                    Sometimes the best way to understand a school is to see it
                    for yourself.
                  </h2>
                </div>

                <Link
                  href="/admissions/visit"
                  className="group inline-flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#174a70] transition hover:bg-[#174a70] hover:text-white"
                >
                  Request a visit
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
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