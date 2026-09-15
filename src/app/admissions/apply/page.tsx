"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const steps = [
  "Student",
  "Parent / Guardian",
  "Programme",
  "Documents",
  "Review",
];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    dateOfBirth: "",
    gender: "",
    programme: "",

    parentName: "",
    parentEmail: "",
    parentPhone: "",
    relationship: "",

    previousSchool: "",
    message: "",

    birthCertificate: null as File | null,
    academicRecords: null as File | null,
  });

  function updateField(
    field: keyof typeof formData,
    value: string | File | null
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function nextStep() {
    setCurrentStep((step) =>
      Math.min(step + 1, steps.length - 1)
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function previousStep() {
    setCurrentStep((step) => Math.max(step - 1, 0));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Backend submission will be connected later.
    alert(
      "Your application interface is ready. Submission will be connected to the AIS admissions system."
    );
  }

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#090909]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="bg-[#174a70] px-6 pb-16 pt-32 text-white md:px-12 lg:px-20">

        <div className="mx-auto max-w-5xl">

          <Link
            href="/admissions"
            className="text-sm font-semibold text-white/60 transition hover:text-[#f2a07a]"
          >
            ← Admissions
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-[#f2a07a]">
            Admissions
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            Apply to AIS.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Begin your application by providing the information below.
            You can move through the application step by step.
          </p>

        </div>
      </section>

      {/* =====================================================
          PROGRESS
      ===================================================== */}

      <section className="border-b border-[#e2e2e2] bg-white px-6 py-6 md:px-12 lg:px-20">

        <div className="mx-auto max-w-5xl">

          <div className="flex items-center justify-between">

            {steps.map((step, index) => (
              <div
                key={step}
                className="flex flex-1 items-center"
              >

                <div className="flex flex-col items-center">

                  <div
                    className={`
                      flex h-9 w-9 items-center justify-center
                      rounded-full text-sm font-bold
                      transition-all duration-300
                      ${
                        index <= currentStep
                          ? "bg-[#f2a07a] text-white"
                          : "bg-[#f5f5f5] text-[#5f6367]"
                      }
                    `}
                  >
                    {index + 1}
                  </div>

                  <span
                    className={`
                      mt-2 hidden text-xs font-semibold sm:block
                      ${
                        index === currentStep
                          ? "text-[#174a70]"
                          : "text-[#5f6367]"
                      }
                    `}
                  >
                    {step}
                  </span>

                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`
                      mx-2 h-px flex-1 transition-colors duration-300
                      ${
                        index < currentStep
                          ? "bg-[#f2a07a]"
                          : "bg-[#e2e2e2]"
                      }
                    `}
                  />
                )}

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FORM
      ===================================================== */}

      <section className="px-6 py-12 md:px-12 lg:px-20 lg:py-20">

        <div className="mx-auto max-w-5xl">

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#e2e2e2] md:p-10 lg:p-14"
          >

            {/* =================================================
                STEP 1
            ================================================= */}

            {currentStep === 0 && (
              <div>

                <FormHeading
                  eyebrow="Step 01"
                  title="About the student"
                  description="Tell us about the student who is applying to AIS."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  <Input
                    label="First name"
                    required
                    value={formData.studentFirstName}
                    onChange={(value) =>
                      updateField("studentFirstName", value)
                    }
                  />

                  <Input
                    label="Last name"
                    required
                    value={formData.studentLastName}
                    onChange={(value) =>
                      updateField("studentLastName", value)
                    }
                  />

                  <Input
                    label="Date of birth"
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(value) =>
                      updateField("dateOfBirth", value)
                    }
                  />

                  <Select
                    label="Gender"
                    value={formData.gender}
                    required
                    options={[
                      "Please select",
                      "Male",
                      "Female",
                    ]}
                    onChange={(value) =>
                      updateField("gender", value)
                    }
                  />

                </div>

              </div>
            )}

            {/* =================================================
                STEP 2
            ================================================= */}

            {currentStep === 1 && (
              <div>

                <FormHeading
                  eyebrow="Step 02"
                  title="Parent or guardian"
                  description="Provide the details of the parent or guardian responsible for this application."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  <Input
                    label="Full name"
                    required
                    value={formData.parentName}
                    onChange={(value) =>
                      updateField("parentName", value)
                    }
                  />

                  <Select
                    label="Relationship to student"
                    required
                    value={formData.relationship}
                    options={[
                      "Please select",
                      "Parent",
                      "Guardian",
                      "Other",
                    ]}
                    onChange={(value) =>
                      updateField("relationship", value)
                    }
                  />

                  <Input
                    label="Email address"
                    type="email"
                    required
                    value={formData.parentEmail}
                    onChange={(value) =>
                      updateField("parentEmail", value)
                    }
                  />

                  <Input
                    label="Phone number"
                    type="tel"
                    required
                    value={formData.parentPhone}
                    onChange={(value) =>
                      updateField("parentPhone", value)
                    }
                  />

                </div>

              </div>
            )}

            {/* =================================================
                STEP 3
            ================================================= */}

            {currentStep === 2 && (
              <div>

                <FormHeading
                  eyebrow="Step 03"
                  title="Programme"
                  description="Select the programme you are interested in."
                />

                <div className="mt-10 space-y-6">

                  <Select
                    label="Programme"
                    required
                    value={formData.programme}
                    options={[
                      "Please select",
                      "Nursery",
                      "Kindergarten",
                      "Primary",
                      "Junior High School",
                    ]}
                    onChange={(value) =>
                      updateField("programme", value)
                    }
                  />

                  <Input
                    label="Previous school"
                    value={formData.previousSchool}
                    onChange={(value) =>
                      updateField("previousSchool", value)
                    }
                  />

                  <TextArea
                    label="Additional information"
                    value={formData.message}
                    onChange={(value) =>
                      updateField("message", value)
                    }
                  />

                </div>

              </div>
            )}

            {/* =================================================
                STEP 4
            ================================================= */}

            {currentStep === 3 && (
              <div>

                <FormHeading
                  eyebrow="Step 04"
                  title="Supporting documents"
                  description="Upload supporting documents where required. Final document requirements will be confirmed by AIS."
                />

                <div className="mt-10 space-y-6">

                  <FileUpload
                    label="Birth certificate"
                    file={formData.birthCertificate}
                    onChange={(file) =>
                      updateField("birthCertificate", file)
                    }
                  />

                  <FileUpload
                    label="Academic records"
                    file={formData.academicRecords}
                    onChange={(file) =>
                      updateField("academicRecords", file)
                    }
                  />

                  <div className="rounded-2xl bg-[#fff1eb] p-5 text-sm leading-6 text-[#5f6367]">
                    File requirements and permitted formats will be
                    finalized when the official AIS admissions
                    process is connected to the website.
                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                STEP 5
            ================================================= */}

            {currentStep === 4 && (
              <div>

                <FormHeading
                  eyebrow="Step 05"
                  title="Review your application"
                  description="Please review the information before submitting."
                />

                <div className="mt-10 space-y-4">

                  <ReviewItem
                    label="Student"
                    value={`${formData.studentFirstName} ${formData.studentLastName}`}
                  />

                  <ReviewItem
                    label="Date of birth"
                    value={formData.dateOfBirth}
                  />

                  <ReviewItem
                    label="Programme"
                    value={formData.programme}
                  />

                  <ReviewItem
                    label="Parent / guardian"
                    value={formData.parentName}
                  />

                  <ReviewItem
                    label="Email"
                    value={formData.parentEmail}
                  />

                  <ReviewItem
                    label="Phone"
                    value={formData.parentPhone}
                  />

                  <ReviewItem
                    label="Previous school"
                    value={formData.previousSchool}
                  />

                </div>

                <div className="mt-8 rounded-2xl border border-[#e2e2e2] p-5 text-sm leading-6 text-[#5f6367]">
                  By submitting this application, you confirm that the
                  information provided is accurate to the best of your
                  knowledge.
                </div>

              </div>
            )}

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="mt-12 flex flex-col-reverse gap-3 border-t border-[#e2e2e2] pt-8 sm:flex-row sm:items-center sm:justify-between">

              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="rounded-full border border-[#e2e2e2] px-7 py-4 font-semibold text-[#174a70] transition hover:border-[#174a70]"
                >
                  ← Previous
                </button>
              ) : (
                <Link
                  href="/admissions"
                  className="rounded-full border border-[#e2e2e2] px-7 py-4 text-center font-semibold text-[#174a70]"
                >
                  Cancel
                </Link>
              )}

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="rounded-full bg-[#f2a07a] px-7 py-4 font-bold text-white transition hover:bg-[#d9825b]"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded-full bg-[#174a70] px-8 py-4 font-bold text-white transition hover:bg-[#0d2f4a]"
                >
                  Submit Application →
                </button>
              )}

            </div>

          </form>

        </div>
      </section>

      {/* =====================================================
          HELP
      ===================================================== */}

      <section className="bg-[#174a70] px-6 py-16 text-white md:px-12 lg:px-20">

        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
              Need help?
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Have a question about applying?
            </h2>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-[#174a70]"
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

function FormHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f2a07a]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#174a70] md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-[#5f6367]">
        {description}
      </p>
    </div>
  );
}


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
      <span className="mb-2 block text-sm font-semibold text-[#174a70]">
        {label}
        {required && (
          <span className="ml-1 text-[#f2a07a]">*</span>
        )}
      </span>

      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="
          w-full rounded-2xl
          border border-[#e2e2e2]
          bg-[#ffffff]
          px-5 py-4
          text-[#090909]
          outline-none
          transition
          focus:border-[#f2a07a]
          focus:ring-2
          focus:ring-[#f2a07a]/10
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
      <span className="mb-2 block text-sm font-semibold text-[#174a70]">
        {label}
        {required && (
          <span className="ml-1 text-[#f2a07a]">*</span>
        )}
      </span>

      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="
          w-full rounded-2xl
          border border-[#e2e2e2]
          bg-[#ffffff]
          px-5 py-4
          text-[#090909]
          outline-none
          transition
          focus:border-[#f2a07a]
          focus:ring-2
          focus:ring-[#f2a07a]/10
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
      <span className="mb-2 block text-sm font-semibold text-[#174a70]">
        {label}
      </span>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={5}
        className="
          w-full resize-none rounded-2xl
          border border-[#e2e2e2]
          bg-[#ffffff]
          px-5 py-4
          text-[#090909]
          outline-none
          transition
          focus:border-[#f2a07a]
          focus:ring-2
          focus:ring-[#f2a07a]/10
        "
      />
    </label>
  );
}


function FileUpload({
  label,
  file,
  onChange,
}: {
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
}) {
  return (
    <label className="block cursor-pointer">

      <span className="mb-2 block text-sm font-semibold text-[#174a70]">
        {label}
      </span>

      <div className="rounded-2xl border-2 border-dashed border-[#e2e2e2] bg-[#ffffff] p-6 transition hover:border-[#f2a07a]">

        <input
          type="file"
          className="sr-only"
          onChange={(event) =>
            onChange(event.target.files?.[0] ?? null)
          }
        />

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="font-semibold text-[#174a70]">
              {file ? file.name : "Choose a file"}
            </p>

            <p className="mt-1 text-sm text-[#5f6367]">
              Click to browse your device
            </p>
          </div>

          <span className="text-xl text-[#f2a07a]">
            ↑
          </span>

        </div>

      </div>
    </label>
  );
}


function ReviewItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-[#ffffff] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

      <span className="text-sm text-[#5f6367]">
        {label}
      </span>

      <span className="font-semibold text-[#174a70]">
        {value || "Not provided"}
      </span>

    </div>
  );
}