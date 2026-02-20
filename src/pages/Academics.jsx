// src/pages/ApplyToQueenster.jsx
import React, { useState } from "react";

export default function ApplyToQueenster({
  heroImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    program: "BSc Business Administration",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // replace with real submit logic
    console.log("Application submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const faqs = [
    { q: "How long does processing take?", a: "Usually 2–4 weeks after submission." },
    { q: "Can I edit later?", a: "Yes — applications can be saved and edited before final submission." },
    { q: "What documents are required?", a: "Transcripts, ID, passport (international), and a personal statement." },
  ];

  return (
    <div className="text-gray-800 antialiased">
      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 text-white py-20">
          <span className="uppercase tracking-widest text-orange-400 text-sm">
            undergraduate Program
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight max-w-3xl">
            Bachelor Of Science in Business Administration
          </h1>

          <p className="max-w-xl mt-4 text-gray-200 text-lg">
            Apply for undergraduate and postgraduate programs. Submit documents,
            track status, and start your academic journey.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#apply-form"
              className="bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3 rounded-full font-semibold transition"
            >
              Start Application
            </a>
            <a
              href="#requirements"
              className="border border-white/30 px-6 md:px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Requirements
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat number="120+" label="Programs" />
          <Stat number="92%" label="Placement Rate" />
          <Stat number="40+" label="Countries" />
          <Stat number="₹25Cr+" label="Scholarships" />
        </div>
      </section>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-12">
          {/* STEPS */}
          <section className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold mb-8">How to apply</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Step step="01" title="Choose Program" desc="Select degree & campus" />
              <Step step="02" title="Create Account" desc="Applicant profile" />
              <Step step="03" title="Upload Documents" desc="Transcripts & ID" />
              <Step step="04" title="Submit & Pay" desc="Complete application" />
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section id="requirements" className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold mb-8">Admissions requirements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Req
                title="Undergraduate"
                items={["10+2 or equivalent", "Academic transcripts", "Personal statement"]}
              />
              <Req
                title="Postgraduate"
                items={["Bachelor degree", "Statement of Purpose", "Resume / CV"]}
              />
              <Req
                title="International"
                items={["IELTS / TOEFL", "Passport copy", "Proof of funds"]}
              />
            </div>
          </section>

          {/* PROGRAMS */}
          <section className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold mb-8">Popular programs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Program title="BSc Business Administration" />
              <Program title="BSc Computer Science" />
              <Program title="MSc Computer Science" />
            </div>
          </section>

          {/* FAQ - Improved: hover open + smooth animation */}
          <section className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-3xl font-bold mb-6">FAQs</h2>

            <div className="space-y-4">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setOpenFaq(i)}
                    onMouseLeave={() => setOpenFaq(null)}
                    className={`border rounded-xl overflow-hidden transition-shadow duration-300 ${
                      isOpen ? "shadow-lg border-[#153152]" : "border-gray-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <h4 className="font-medium text-lg text-[#153152]">{f.q}</h4>
                      <span
                        className={`text-xl text-[#153152] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`px-5 overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* RIGHT FORM */}
        <aside>
          <div id="apply-form" className="bg-white rounded-2xl shadow p-8 sticky top-24">
            <h3 className="text-2xl font-bold mb-6">Start your application</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="firstName"
                  required
                  placeholder="First name"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <input
                  name="lastName"
                  required
                  placeholder="Last name"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
                value={form.email}
                onChange={handleChange}
              />

              <select
                name="program"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-300 outline-none"
                value={form.program}
                onChange={handleChange}
              >
                <option>BSc Business Administration</option>
                <option>BSc Computer Science</option>
                <option>MSc Computer Science</option>
                <option>MA English</option>
              </select>

              <textarea
                name="message"
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-300 outline-none h-28 resize-none"
                value={form.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition"
              >
                {submitted ? "Submitted ✓" : "Submit Application"}
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-600">
              Application fee: <strong>₹1500</strong> (non-refundable)
            </p>
          </div>
        </aside>
      </main>

      {/* FOOTER CTA */}
      <section className="bg-slate-900 text-white py-12 text-center">
        <h3 className="text-2xl font-bold">Need help?</h3>
        <p className="text-gray-300 mt-2">admissions@queenster.edu | +91 93519 46070</p>
      </section>
    </div>
  );
}

/* COMPONENTS */

const Stat = ({ number, label }) => (
  <div>
    <h3 className="text-3xl font-bold text-orange-400">{number}</h3>
    <p className="uppercase text-sm mt-2">{label}</p>
  </div>
);

const Step = ({ step, title, desc }) => (
  <div className="border rounded-xl p-6 hover:shadow transition">
    <div className="text-orange-500 font-bold text-3xl">{step}</div>
    <h4 className="font-semibold mt-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

const Req = ({ title, items }) => (
  <div>
    <h4 className="font-semibold mb-3">{title}</h4>
    <ul className="space-y-2 text-gray-600">
      {items.map((i, idx) => (
        <li key={idx}>✔ {i}</li>
      ))}
    </ul>
  </div>
);

const Program = ({ title }) => (
  <div className="border rounded-xl p-6 hover:shadow transition">
    <h4 className="font-semibold text-lg">{title}</h4>
    <p className="text-sm text-gray-600 mt-2">View details & apply online.</p>
  </div>
);
