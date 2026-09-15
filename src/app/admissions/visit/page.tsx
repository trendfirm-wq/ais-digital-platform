"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function VisitPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    visitors: "1",
    studentProgramme: "",
    message: "",
  });

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Temporary front-end behaviour.
    // Connect this to the admissions API later.
    setSubmitted(true);
  }

  return (
    <main className="bg-[#f7f5f1] text-[#17212b]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[65vh] overflow-hidden bg-[#0d2238]">

        <Image
          src="/images/facilities/campus.jpg"
          alt="T.I. Ahmadiyya International School campus"
          fill
          priority
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2238] via-[#0d2238]/80 to-transparent" />

        <div className="relative flex min-h-[65vh] items-end px-6 py-20 md:px-12 lg:px-20 lg:py-28">

          <div className="mx-auto w-full max-w-7xl">

            <Link
              href="/admissions"
              className="text-sm font-semibold text-white/60 transition hover:text-[#e8752b]"
            >
              ← Admissions
            </Link>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-[#e8752b]">
              Visit AIS
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Come and experience AIS.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/75 md:text-2xl">
              Request a campus visit and take a closer look at the environment
              where students learn, grow and connect.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
              Campus Visit
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#0d2238] md:text-5xl">
              See the school for yourself.
            </h2>

          </div>

          <div className="max-w-3xl">

            <p className="text-lg leading-8 text-[#68737d]">
              A campus visit can help prospective families get a better sense
              of the school environment, learning spaces and wider AIS
              experience.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#68737d]">
              Submit your preferred visit details below. The final visit
              schedule and availability will be confirmed by AIS.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          FORM + IMAGE
      ===================================================== */}

      <section className="bg-white px-6 py-16 md:px-12 lg:px-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">

          {/* SIDE INFORMATION */}

          <div className="relative min-h-[32rem] overflow-hidden rounded-[2rem] bg-[#0d2238]">

            <Image
              src="/images/facilities/learning-space.jpg"
              alt="AIS learning environment"
              fill
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2238] via-[#0d2238]/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                Your Visit
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">
                A closer look at the AIS experience.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Visit information, availability and arrangements will be
                confirmed by the AIS admissions team.
              </p>

            </div>

          </div>

          {/* FORM */}

          <div className="rounded-[2rem] border border-[#dfe4e8] bg-[#f7f5f1] p-6 md:p-10 lg:p-12">

            {submitted ? (
              <SuccessState />
            ) : (
              <form onSubmit={handleSubmit}>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
                    Request a Visit
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d2238] md:text-4xl">
                    Tell us when you would like to visit.
                  </h2>

                  <p className="mt-4 leading-7 text-[#68737d]">
                    Provide your details and preferred visit information.
                  </p>
                </div>

                {/* CONTACT DETAILS */}

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  <Input
                    label="Full name"
                    required
                    value={formData.name}
                    onChange={(value) =>
                      updateField("name", value)
                    }
                  />

                  <Input
                    label="Email address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(value) =>
                      updateField("email", value)
                    }
                  />

                  <Input
                    label="Phone number"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(value) =>
                      updateField("phone", value)
                    }
                  />

                  <Select
                    label="Number of visitors"
                    value={formData.visitors}
                    options={[
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "More than 5",
                    ]}
                    onChange={(value) =>
                      updateField("visitors", value)
                    }
                  />

                </div>

                {/* VISIT DETAILS */}

                <div className="mt-8 border-t border-[#dfe4e8] pt-8">

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#68737d]">
                    Preferred Visit
                  </p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">

                    <Input
                      label="Preferred date"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(value) =>
                        updateField("preferredDate", value)
                      }
                    />

                    <Select
                      label="Preferred time"
                      value={formData.preferredTime}
                      options={[
                        "Please select",
                        "Morning",
                        "Afternoon",
                      ]}
                      required
                      onChange={(value) =>
                        updateField("preferredTime", value)
                      }
                    />

                  </div>

                </div>

                {/* STUDENT */}

                <div className="mt-8 border-t border-[#dfe4e8] pt-8">

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#68737d]">
                    Student Information
                  </p>

                  <div className="mt-6">

                    <Select
                      label="Programme of interest"
                      value={formData.studentProgramme}
                      options={[
                        "Please select",
                        "Nursery",
                        "Kindergarten",
                        "Primary",
                        "Junior High School",
                      ]}
                      onChange={(value) =>
                        updateField("studentProgramme", value)
                      }
                    />

                  </div>

                </div>

                {/* MESSAGE */}

                <div className="mt-8">

                  <TextArea
                    label="Additional information"
                    value={formData.message}
                    onChange={(value) =>
                      updateField("message", value)
                    }
                  />

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    mt-8 w-full rounded-full
                    bg-[#e8752b]
                    px-7 py-4
                    font-bold text-white
                    transition
                    hover:bg-[#c95d1c]
                  "
                >
                  Request Campus Visit →
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[#68737d]">
                  Your preferred date and time are a request and will require
                  confirmation from AIS.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHAT TO EXPECT
      ===================================================== */}

      <section className="bg-[#0d2238] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
              Your Visit
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              What comes next?
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Submit your request",
                text: "Tell us about yourself and your preferred visit time.",
              },
              {
                number: "02",
                title: "AIS confirms",
                text: "The admissions team will review your request and confirm availability.",
              },
              {
                number: "03",
                title: "Visit the school",
                text: "Come to campus and experience the AIS environment.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t border-white/15 pt-6"
              >

                <span className="text-sm font-semibold text-[#e8752b]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="bg-[#e8752b] px-6 py-20 md:px-12 lg:px-20">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Admissions
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Have questions before your visit?
            </h2>

          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit rounded-full bg-[#0d2238] px-7 py-4 font-semibold text-white transition hover:bg-[#081827]"
          >
            Contact AIS →
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   FORM COMPONENTS
========================================================= */

function Input({
  label,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-sm font-semibold text-[#0d2238]">
        {label}
        {required && (
          <span className="ml-1 text-[#e8752b]">*</span>
        )}
      </span>

      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="
          w-full rounded-2xl
          border border-[#dfe4e8]
          bg-white
          px-5 py-4
          text-[#17212b]
          outline-none
          transition
          focus:border-[#e8752b]
          focus:ring-2
          focus:ring-[#e8752b]/10
        "
      />

    </label>
  );
}


function Select({
  label,
  options,
  required = false,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-sm font-semibold text-[#0d2238]">
        {label}
        {required && (
          <span className="ml-1 text-[#e8752b]">*</span>
        )}
      </span>

      <select
        required={required}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="
          w-full rounded-2xl
          border border-[#dfe4e8]
          bg-white
          px-5 py-4
          text-[#17212b]
          outline-none
          transition
          focus:border-[#e8752b]
          focus:ring-2
          focus:ring-[#e8752b]/10
        "
      >
        {options.map((option) => (
          <option
            key={option}
            value={option === "Please select" ? "" : option}
          >
            {option}
          </option>
        ))}
      </select>

    </label>
  );
}


function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-sm font-semibold text-[#0d2238]">
        {label}
      </span>

      <textarea
        rows={5}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="
          w-full resize-none rounded-2xl
          border border-[#dfe4e8]
          bg-white
          px-5 py-4
          text-[#17212b]
          outline-none
          transition
          focus:border-[#e8752b]
          focus:ring-2
          focus:ring-[#e8752b]/10
        "
      />

    </label>
  );
}


function SuccessState() {
  return (
    <div className="flex min-h-[32rem] flex-col items-center justify-center text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8752b] text-2xl font-bold text-white">
        ✓
      </div>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#e8752b]">
        Request received
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0d2238] md:text-4xl">
        Thank you for your interest in AIS.
      </h2>

      <p className="mt-5 max-w-md leading-7 text-[#68737d]">
        Your visit request has been captured by this interface. Once the
        admissions backend is connected, the AIS team will receive the request
        and confirm the visit details.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">

        <Link
          href="/admissions"
          className="rounded-full bg-[#0d2238] px-6 py-3 font-semibold text-white"
        >
          Back to Admissions
        </Link>

        <Link
          href="/"
          className="rounded-full border border-[#dfe4e8] px-6 py-3 font-semibold text-[#0d2238]"
        >
          Return Home
        </Link>

      </div>

    </div>
  );
}