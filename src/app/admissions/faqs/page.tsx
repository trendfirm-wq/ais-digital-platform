"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const faqs = [
  {
    question: "How do I apply to AIS?",
    answer:
      "The AIS website will provide the application journey and the information required to begin an application. Official application requirements and procedures will be added once confirmed by AIS.",
  },
  {
    question: "Which programmes are available?",
    answer:
      "The website currently presents the AIS academic pathways as Nursery, Kindergarten, Primary and Junior High School. Detailed programme and placement information will be provided using approved AIS content.",
  },
  {
    question: "What documents are required for an application?",
    answer:
      "The specific documents required for admission will be confirmed by AIS. The application interface has been structured to support the submission of required supporting documents.",
  },
  {
    question: "Can I visit the school before applying?",
    answer:
      "Yes. Prospective families will be able to submit a campus visit request through the website. Visit dates and availability will be confirmed by the AIS admissions team.",
  },
  {
    question: "How can I contact the admissions team?",
    answer:
      "You can use the website enquiry form to send a question or request. The admissions contact details and response process will be connected once the official AIS contact information is finalized.",
  },
  {
    question: "Where can I find information about fees?",
    answer:
      "Official tuition and fee information will be published through the admissions section once the relevant AIS information has been confirmed.",
  },
  {
    question: "How will I know what happens after I apply?",
    answer:
      "The admissions workflow will provide applicants with information about the next stage of the process. The final workflow, notifications and timelines will be connected to the AIS admissions system.",
  },
  {
    question: "Can I ask a question before starting an application?",
    answer:
      "Yes. Prospective families can contact AIS before beginning an application. Use the enquiry option to send your question to the appropriate team.",
  },
];

export default function AdmissionsFAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFaq(index: number) {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  }

  return (
    <>
      <Header />

      <main className="bg-[#ffffff] text-[#090909]">

        {/* HERO */}
        <section className="bg-[#174a70] px-6 pb-20 pt-36 text-white md:px-12 lg:px-20 lg:pb-28">

          <div className="mx-auto max-w-7xl">

            <Link
              href="/admissions"
              className="text-sm font-semibold text-white/60 transition hover:text-[#f2a07a]"
            >
              ← Admissions
            </Link>

            <div className="mt-12 max-w-4xl">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
                Admissions FAQs
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Questions, answered.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-white/65 md:text-2xl">
                Find answers to common questions about the AIS admissions
                journey.
              </p>

            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 md:px-12 lg:px-20 lg:py-24">

          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            {/* LEFT */}
            <div className="lg:sticky lg:top-10 lg:self-start">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Need Help?
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#174a70] md:text-4xl">
                Everything starts with a question.
              </h2>

              <p className="mt-5 leading-7 text-[#5f6367]">
                If you cannot find the information you are looking for,
                contact AIS directly.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#174a70] px-6 py-3 font-semibold text-white transition hover:bg-[#0d2f4a]"
              >
                Contact AIS →
              </Link>

            </div>

            {/* RIGHT */}
            <div className="border-t border-[#e2e2e2]">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#e2e2e2]"
                  >

                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-8 py-7 text-left"
                    >

                      <div className="flex items-start gap-5">

                        <span className="pt-1 text-xs font-bold text-[#f2a07a]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-xl font-semibold text-[#174a70] md:text-2xl">
                          {faq.question}
                        </span>

                      </div>

                      <span
                        className={`
                          flex h-10 w-10 shrink-0 items-center justify-center
                          rounded-full
                          border border-[#e2e2e2]
                          text-xl
                          text-[#174a70]
                          transition-all duration-300
                          ${
                            isOpen
                              ? "rotate-45 bg-[#f2a07a] text-white"
                              : "group-hover:border-[#f2a07a]"
                          }
                        `}
                      >
                        +
                      </span>

                    </button>

                    <div
                      className={`
                        grid transition-all duration-300
                        ${
                          isOpen
                            ? "grid-rows-[1fr] pb-7 opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden pl-10 md:pl-12">

                        <p className="max-w-2xl leading-8 text-[#5f6367]">
                          {faq.answer}
                        </p>

                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
                Admissions
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#174a70] md:text-5xl">
                Ready to take the next step?
              </h2>

            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">

              <Link
                href="/admissions/apply"
                className="group rounded-3xl bg-[#174a70] p-7 text-white transition hover:-translate-y-1"
              >
                <span className="text-sm font-semibold text-[#f2a07a]">
                  01
                </span>

                <h3 className="mt-10 text-2xl font-semibold">
                  Apply to AIS
                </h3>

                <p className="mt-3 text-white/60">
                  Begin the application journey.
                </p>

                <span className="mt-8 block text-[#f2a07a]">
                  Start Application →
                </span>
              </Link>

              <Link
                href="/admissions/visit"
                className="group rounded-3xl border border-[#e2e2e2] bg-[#ffffff] p-7 transition hover:-translate-y-1 hover:border-[#f2a07a]"
              >
                <span className="text-sm font-semibold text-[#f2a07a]">
                  02
                </span>

                <h3 className="mt-10 text-2xl font-semibold text-[#174a70]">
                  Visit AIS
                </h3>

                <p className="mt-3 text-[#5f6367]">
                  Request a campus visit.
                </p>

                <span className="mt-8 block font-semibold text-[#174a70]">
                  Plan a Visit →
                </span>
              </Link>

              <Link
                href="/contact"
                className="group rounded-3xl border border-[#e2e2e2] bg-[#ffffff] p-7 transition hover:-translate-y-1 hover:border-[#f2a07a]"
              >
                <span className="text-sm font-semibold text-[#f2a07a]">
                  03
                </span>

                <h3 className="mt-10 text-2xl font-semibold text-[#174a70]">
                  Contact AIS
                </h3>

                <p className="mt-3 text-[#5f6367]">
                  Have another question?
                </p>

                <span className="mt-8 block font-semibold text-[#174a70]">
                  Send an Enquiry →
                </span>
              </Link>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f2a07a] px-6 py-20 md:px-12 lg:px-20">

          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Start Your Journey
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Still have questions?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Our enquiry experience will give prospective families another
                way to connect with AIS.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-[#174a70] px-7 py-4 font-bold text-white transition hover:bg-[#0d2f4a]"
            >
              Make an Enquiry →
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}