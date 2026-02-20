// pages/scholarships.jsx
import Link from "next/link";
import { useMemo, useState } from "react";

/* Sample data — replace with API calls or CMS later */
const SCHOLARSHIPS = [
  {
    id: "merit",
    title: "Merit-Based Scholarships",
    subtitle: "Top performers rewarded for academic excellence.",
    amount: "Up to ₹2,00,000",
    tag: "Top Choice",
    details:
      "Merit scholarships awarded to students with outstanding academic records and achievements.",
  },
  {
    id: "need",
    title: "Need-Based Scholarships",
    subtitle: "Support for students with financial need.",
    amount: "Varies",
    tag: "Financial Support",
    details:
      "Designed to help students who demonstrate significant financial need in order to continue their studies.",
  },
  {
    id: "athletic",
    title: "Athletic Scholarships",
    subtitle: "For high-performing athletes.",
    amount: "Stipend + Fee Waiver",
    tag: "Sports Talent",
    details:
      "Awarded to students showing exceptional skill & commitment in university sports programs.",
  },
  {
    id: "research",
    title: "Research Excellence Grant",
    subtitle: "Fund to support undergraduate research.",
    amount: "Up to ₹1,50,000",
    tag: "Research",
    details:
      "Competitive grant for undergraduate students working on faculty-supervised research projects.",
  },
];

function IconSpark() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      role="img"
    >
      <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.9 4.9l2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16.3 16.3l2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function parseAmount(amountStr) {
  const digits = amountStr.replace(/[^0-9]/g, "");
  if (!digits) return null;
  return parseInt(digits, 10);
}

export default function Scholarships() {
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [selected, setSelected] = useState(null);
  const [saved, setSaved] = useState(() => new Set());

  const tags = useMemo(() => ["all", ...Array.from(new Set(SCHOLARSHIPS.map((s) => s.tag)))], []);

  const filtered = useMemo(() => {
    const qLower = q.trim().toLowerCase();

    let list = SCHOLARSHIPS.filter((s) => {
      const matchesQ =
        qLower === "" ||
        s.title.toLowerCase().includes(qLower) ||
        s.subtitle.toLowerCase().includes(qLower) ||
        s.details.toLowerCase().includes(qLower);

      const matchesTag = activeTag === "all" ? true : s.tag === activeTag;
      return matchesQ && matchesTag;
    });

    if (sortBy === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === "amount") {
      list = [...list].sort((a, b) => (parseAmount(b.amount) || 0) - (parseAmount(a.amount) || 0));
    }

    return list;
  }, [q, activeTag, sortBy]);

  const toggleSave = (id) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="pt-0">
      {/* Premium Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#eef2ff] via-white to-white" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-300/30 blur-3xl -z-10" />
        <div className="absolute -bottom-24 right-10 h-[420px] w-[420px] rounded-full bg-blue-300/30 blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-0 rounded-full bg-white/70 px-4 py-1 text-sm font-medium shadow-sm backdrop-blur">
              <IconSpark />
              <span></span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-[#0b1b4c]">
              Scholarships & Grants
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Unlock premium funding opportunities for your academic journey — apply with confidence.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                { label: "Total Funds Awarded", value: "₹20+ Crore" },
                { label: "Scholarships Available", value: "40+" },
                { label: "Approval Time", value: "7–14 Days" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-100 bg-white/70 p-6 shadow-lg backdrop-blur"
                >
                  <p className="text-sm text-slate-500">{s.label}</p>
                  <p className="mt-2 text-2xl font-bold text-[#0b1b4c]">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="#browse"
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-[1.03] transition"
              >
                Browse Scholarships
              </Link>

              <a
                href="#how"
                className="rounded-full border border-slate-200 px-6 py-3 text-slate-700 bg-white/60 backdrop-blur hover:bg-white transition"
              >
                How it Works
              </a>
            </div>
          </div>

          {/* Search + tags + Sort */}
          <div id="browse" className="mt-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex-1 w-full">
                <label className="relative block">
                  <span className="sr-only">Search scholarships</span>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search scholarship name, keyword, benefit..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                </label>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="amount">Sort: Highest Amount</option>
                <option value="az">Sort: A - Z</option>
              </select>
            </div>

            <div className="mt-4 flex gap-2 items-center flex-wrap">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeTag === t
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                  aria-pressed={activeTag === t}
                >
                  {t === "all" ? "All" : t}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s) => (
                <article
                  key={s.id}
                  className="relative rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-xl backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-100">
                        {s.tag}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold text-[#0b1b4c]">{s.title}</h3>
                      <p className="mt-2 text-gray-600">{s.subtitle}</p>
                    </div>

                    <div className="ml-4 text-right">
                      <div className="rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 border border-slate-100">
                        {s.amount}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-500">{s.details}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelected(s)}
                      className="rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-700 transition"
                    >
                      Quick View
                    </button>

                    <Link
                      href={`/scholarships/${s.id}`}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50 transition"
                    >
                      Full details
                    </Link>

                    <button
                      onClick={() => toggleSave(s.id)}
                      className={`ml-auto rounded-xl px-3 py-2 border transition ${
                        saved.has(s.id)
                          ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                      aria-label="Save scholarship"
                    >
                      {saved.has(s.id) ? "Saved ✓" : "Save"}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-8 rounded-2xl border border-slate-100 bg-white/70 p-10 text-center shadow">
                <p className="text-slate-700">No scholarships match your search. Try different keywords.</p>
              </div>
            )}
          </div>

          {/* How it works */}
          <div id="how" className="mt-20">
            <h2 className="text-3xl font-extrabold text-[#0b1b4c] text-center">
              How Scholarship Process Works
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { step: "01", title: "Choose Scholarship", desc: "Filter and select scholarship based on eligibility." },
                { step: "02", title: "Submit Documents", desc: "Upload required documents securely in your portal." },
                { step: "03", title: "Get Approval", desc: "Receive final decision in 7–14 working days." },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-3xl border border-slate-100 bg-white/70 p-7 shadow-lg backdrop-blur"
                >
                  <p className="text-indigo-600 font-bold text-lg">{s.step}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#0b1b4c]">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Docs */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-50 to-white p-10 border border-indigo-100 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0b1b4c]">Documents Required</h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2 text-slate-600">
              <li> Previous year mark sheets</li>
              <li> Income certificate (need based)</li>
              <li> Sports certificate (athletic)</li>
              <li> Research proposal (research grant)</li>
              <li> Aadhar / Govt ID</li>
              <li> Passport size photograph</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-[#0b1b4c] text-center">Student Success Stories</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { name: "Aditi Sharma", msg: "The merit scholarship helped me focus completely on my studies." },
                { name: "Rahul Verma", msg: "Need-based support made my education possible without stress." },
                { name: "Neha Singh", msg: "Research grant allowed me to publish my first university paper!" },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-3xl border border-slate-100 bg-white/70 p-7 shadow-lg backdrop-blur"
                >
                  <p className="text-slate-600 italic">“{t.msg}”</p>
                  <p className="mt-4 font-semibold text-[#0b1b4c]">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#0b1b4c] to-indigo-700 p-10 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Get Scholarship Alerts</h3>
                <p className="mt-2 text-white/80">
                  Subscribe for updates on new scholarships, deadlines, and eligibility tips.
                </p>
              </div>
              <div className="flex w-full md:w-auto gap-3">
                <input
                  placeholder="Enter your email"
                  className="w-full md:w-72 rounded-2xl px-4 py-3 text-slate-900 outline-none"
                />
                <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-indigo-700 hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Modal */}
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-5">
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#0b1b4c]">{selected.title}</h3>
                <p className="mt-2 text-slate-600">{selected.subtitle}</p>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-800">Amount: {selected.amount}</p>
                  <p className="mt-2 text-slate-600">{selected.details}</p>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setSelected(null)}
                    className="rounded-xl border border-slate-200 px-5 py-2 text-slate-700 hover:bg-slate-50 transition"
                  >
                    Close
                  </button>
                  <Link
                    href={`/scholarships/${selected.id}`}
                    className="rounded-xl bg-indigo-600 px-5 py-2 text-white font-semibold hover:bg-indigo-700 transition"
                  >
                    View Full Page
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          <div id="faq" className="mt-20 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-100 bg-white/70 p-7 shadow">
              <h5 className="font-semibold text-slate-800 text-lg">Application process</h5>
              <ol className="mt-3 text-slate-600 list-decimal pl-5 space-y-2">
                <li>Review eligibility and required documents.</li>
                <li>Complete application form and attach transcript.</li>
                <li>Submit and wait for confirmation (7–14 days typical).</li>
              </ol>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white/70 p-7 shadow">
              <h5 className="font-semibold text-slate-800 text-lg">Frequently asked</h5>
              <dl className="mt-3 space-y-3 text-slate-600">
                <div>
                  <dt className="font-medium">Can I apply for multiple scholarships?</dt>
                  <dd className="mt-1">
                    Yes — you may apply to any scholarships for which you meet the criteria.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Are awards renewable?</dt>
                  <dd className="mt-1">Some awards are renewable subject to academic performance.</dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
