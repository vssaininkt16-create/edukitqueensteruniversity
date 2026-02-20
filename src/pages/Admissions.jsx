// src/pages/Admissions.jsx
import React from "react";
import Link from "next/link";

const Admissions = () => {
  const curriculum = [
    { code: "BSA101", title: "Principles of Management", credits: 3 },
    { code: "BSA102", title: "Microeconomics", credits: 3 },
    { code: "BSA201", title: "Financial Accounting", credits: 4 },
    { code: "BSA202", title: "Marketing Fundamentals", credits: 3 },
    { code: "BSA301", title: "Organizational Behavior", credits: 3 },
    { code: "BSA302", title: "Business Law", credits: 3 },
  ];
  // DIRECT WORKING IMAGE LINKS (Unsplash)
  const faculty = [
    {
      img: "https://media.istockphoto.com/id/965649696/photo/businesswoman-speaking-at-a-conference-meeting.jpg?s=612x612&w=0&k=20&c=-eSmB6JppI1h787V-rs4zdcXm7AvuB3yyywTkNaWc0A=",
      name: "Dr. Priya Sharma",
      role: "Program Chair",
    },
    {
      img: "https://media.istockphoto.com/id/1448069367/photo/portrait-of-happy-indian-mature-professor-of-university-or-college-or-standing-outdoor.jpg?s=2048x2048&w=is&k=20&c=bseO9hS81C9roCEYiwEmmUrj2udGtkZMgGqe623ARME=",
      name: "Prof. Raj Verma",
      role: "Finance",
    },
    {
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop",
      name: "Dr. Aisha Khan",
      role: "Marketing",
    },
  ];

  const outcomes = [
    "Prepare for careers in management, finance, and consulting.",
    "Develop leadership and analytical skills through projects and internships.",
    "Eligibility for postgraduate studies and professional certifications.",
  ];

  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO */}
      <header
        className="relative min-h-[65vh] flex items-end"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1646107925391-625582fbbb8b?q=80&w=1400&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 text-white">
          <span className="uppercase tracking-widest text-orange-400 text-sm">
            Undergraduate Program
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Bachelor of Science in Business Administration
          </h1>
          <p className="max-w-3xl mt-4 text-gray-200">
            A practice-oriented undergraduate program combining theory,
            internships, and leadership development.
          </p>
        </div>
      </header>

      {/* BODY */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* MAIN CONTENT */}
        <section className="lg:col-span-8 space-y-14">

          {/* OVERVIEW */}
          <section>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-[#1f3a63] mb-4">
                  Program Overview
                </h2>
                <p className="text-gray-600 mb-4">
                  The B.S. in Business Administration builds strong foundations
                  in management, finance, marketing, and analytics.
                </p>
                <p className="text-gray-600">
                  Graduates are prepared for leadership roles across industries.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li><strong>Duration:</strong> 3–4 Years</li>
                  <li><strong>Total Credits:</strong> 120</li>
                  <li><strong>Mode:</strong> Full-time</li>
                  <li><strong>Campus:</strong> Main Campus</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CURRICULUM */}
          <section id="curriculum">
            <h3 className="text-3xl font-bold text-[#1f3a63] mb-6">
              Curriculum
            </h3>
            <div className="overflow-x-auto rounded-2xl shadow-sm">
              <table className="w-full text-sm bg-white">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="px-6 py-4">Course Code</th>
                    <th className="px-6 py-4">Course Title</th>
                    <th className="px-6 py-4">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {curriculum.map((c) => (
                    <tr key={c.code} className="border-t">
                      <td className="px-6 py-4 font-medium">{c.code}</td>
                      <td className="px-6 py-4">{c.title}</td>
                      <td className="px-6 py-4">{c.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* OUTCOMES */}
          <section id="careers">
            <h3 className="text-3xl font-bold text-[#1f3a63] mb-4">
              Career Outcomes
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </section>

          {/* FACULTY */}
          <section id="faculty">
            <h3 className="text-3xl font-bold text-[#1f3a63] mb-6">
              Faculty
            </h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {faculty.map((f) => (
                <div
                  key={f.name}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(f.name) +
                        "&background=1f3a63&color=fff";
                    }}
                    className="mx-auto w-28 h-28 rounded-full object-cover mb-4 ring-2 ring-gray-200"
                  />
                  <div className="font-semibold">{f.name}</div>
                  <div className="text-sm text-gray-600">{f.role}</div>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
            <h4 className="text-lg font-semibold text-[#1f3a63] mb-4">
              Program Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#curriculum" className="hover:underline">Curriculum</a></li>
              <li><a href="#careers" className="hover:underline">Career Outcomes</a></li>
              <li><a href="#faculty" className="hover:underline">Faculty</a></li>
            </ul>

            <Link
              href="/apply"
              className="block mt-6 text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold"
            >
              Apply Now
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Admissions;