import React from 'react';
import Link from 'next/link';

const STATS = [
  { value: "1920",  label: "Founded"          },
  { value: "240+",  label: "Academic Programs" },
  { value: "35+",   label: "Awards & Honours"  },
  { value: "50k+",  label: "Alumni Worldwide"  },
];

const VALUES = [
  { icon: "🎓", title: "Academic Excellence",  desc: "Rigorous curricula taught by distinguished faculty pushing the frontiers of knowledge." },
  { icon: "🌍", title: "Global Perspective",   desc: "An international community of students and scholars from over 80 countries." },
  { icon: "🔬", title: "Research & Innovation",desc: "State-of-the-art labs driving breakthroughs in science, tech, and the humanities." },
  { icon: "🤝", title: "Inclusive Community",  desc: "A welcoming environment where every student is empowered to achieve their best." },
];

export default function About() {
  return (
    <div style={{ background: "#071428", color: "#fff", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0e2a4a 0%, #071428 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at 10% 80%, rgba(249,115,22,0.08) 0%, transparent 60%)" }} />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-[0.22em] uppercase mb-5">
              <span className="h-px w-6 bg-orange-400" /> About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05]">
              About <span className="text-orange-400">Queenster</span><br />University
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-1 w-16 bg-orange-500 rounded-full" />
              <div className="h-1 w-5 bg-orange-400/40 rounded-full" />
            </div>
            <p className="mt-7 text-white/65 text-lg leading-relaxed max-w-xl">
              Established in 1920, Queenster University is a globally recognised institution committed to academic excellence,
              transformative research, and developing future leaders ready to serve a dynamic world.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/admissions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                Apply Now →
              </Link>
              <Link href="/campus-tour"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm border border-white/25 hover:bg-white/8 transition-colors">
                Take a Tour
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[440px] border border-white/10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/2021_Arizona_State_University%2C_Tempe_Campus%2C_Old_Main.jpg"
              alt="Queenster University Campus"
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top right, rgba(7,20,40,0.4), transparent 60%)" }} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-black text-orange-400">{s.value}</div>
              <div className="text-white/45 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Our Mission</h2>
            <p className="text-white/60 leading-relaxed mb-5">
              Queenster University is dedicated to providing a transformative educational experience that empowers students
              to achieve their full potential through world-class programs, pioneering research, and a vibrant campus community.
            </p>
            <p className="text-white/60 leading-relaxed">
              Our vibrant campus, distinguished faculty, and comprehensive programs create an environment where students can
              thrive academically, socially, and personally — emerging as confident, capable global citizens.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Our Vision</h2>
            <p className="text-white/60 leading-relaxed mb-5">
              To be a globally leading university recognised for the quality of our graduates, the impact of our research,
              and our contribution to the communities we serve.
            </p>
            <Link href="/academics"
              className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm hover:text-orange-300 transition-colors">
              Explore our programmes →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 px-6" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Core Values</h2>
            <p className="mt-3 text-white/45 max-w-xl mx-auto">The principles that guide everything we do at Queenster University.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl p-7 border border-white/10 hover:border-orange-500/30 transition-colors"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to join us?</h2>
        <p className="text-white/45 mb-8 max-w-md mx-auto">Start your journey at Queenster University today.</p>
        <Link href="/apply"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-white"
          style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
          Apply Now →
        </Link>
      </section>
    </div>
  );
}
