import AdmissionHero from "./admissionHero";

export default function AdmissionPage() {
  return (
    <>
      {/* 🔹 HERO IMAGE SECTION */}
      <AdmissionHero />

      {/* 🔹 APPLICATION PROCESS SECTION */}
      <section className="bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE TITLE */}
          <h2 className="text-4xl font-bold text-[#1f3a63] mb-16">
            The Application Process
          </h2>

          {/* STEPS GRID */}
          <div className="grid md:grid-cols-3 gap-x-20 gap-y-16">

            <Step
              number="1"
              title="Start Online Submission"
              description="Begin your application journey by accessing our secure online portal. Create an account and start filling out the initial details to kick off the process."
            />

            <Step
              number="2"
              title="Submit The Form"
              description="Complete all required fields in the application form and submit it electronically. Ensure all information is accurate before final submission."
            />

            <Step
              number="3"
              title="Review The Submission"
              description="Our admissions team will review your submitted application for completeness and eligibility. You may be contacted for any additional information if needed."
            />

            <Step
              number="4"
              title="Gather Necessary Documents"
              description="Prepare and submit all required supporting documents such as transcripts, recommendation letters, and identification proofs as requested."
            />

            <Step
              number="5"
              title="Interviewing Process"
              description="Participate in an interview with our admissions committee to discuss your background, goals, and fit for the program."
            />

            <Step
              number="6"
              title="Last Decision"
              description="Receive the final admission decision via email or portal notification. If accepted, follow the next steps for enrollment and registration."
            />

          </div>
        </div>
      </section>
    </>
  );
}

/* 🔹 Single Step Block (Qeenster Style) */
function Step({ number, title, description }) {
  return (
    <div className="flex gap-6 items-start">
      {/* NUMBER */}
      <div className="text-green-500 text-5xl font-bold leading-none">
        {number}
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-xl font-semibold text-[#1f3a63] mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
