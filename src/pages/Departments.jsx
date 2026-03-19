import React, { useState } from "react";
import Link from "next/link";

const DEPTS = [
  { id: 1, name: "Computer Science & Engineering", shortCode: "CSE", head: "Dr. Sarah Mitchell", faculty: 24, programs: ["B.Tech CSE", "M.Tech AI/ML", "PhD Computer Science"], icon: "💻", color: "#6366f1", desc: "Pioneering research in AI, cybersecurity, distributed systems, and software engineering." },
  { id: 2, name: "Business Administration",         shortCode: "MBA", head: "Prof. James Okafor",  faculty: 18, programs: ["BBA", "MBA", "Executive MBA", "PhD Management"],   icon: "📊", color: "#f97316", desc: "Developing future business leaders with a blend of theory, case studies, and global exposure." },
  { id: 3, name: "Mechanical Engineering",          shortCode: "ME",  head: "Dr. Rajan Mehta",    faculty: 20, programs: ["B.Tech Mechanical", "M.Tech Thermal", "PhD"],          icon: "⚙️", color: "#22c55e", desc: "From robotics and manufacturing to thermodynamics and automotive engineering." },
  { id: 4, name: "Liberal Arts & Humanities",       shortCode: "LAH", head: "Dr. Lena Bauer",     faculty: 15, programs: ["BA English", "BA History", "MA Literature"],           icon: "📚", color: "#ec4899", desc: "Critical thinking, communication, and a deep understanding of human culture and society." },
  { id: 5, name: "Physics & Applied Sciences",      shortCode: "PAS", head: "Prof. Carlos Rivera", faculty: 16, programs: ["B.Sc Physics", "M.Sc Applied Physics", "PhD"],        icon: "🔬", color: "#22d3ee", desc: "Quantum mechanics, photonics, nanotechnology, and applied research at the frontiers of science." },
  { id: 6, name: "Medical & Health Sciences",       shortCode: "MHS", head: "Dr. Fatima Al-Hassan",faculty: 22, programs: ["MBBS", "M.Sc Public Health", "PhD"],                  icon: "🏥", color: "#f43f5e", desc: "Comprehensive medical education with a focus on research, clinical practice, and public health." },
];

export default function Departments() {
  const [selected, setSelected] = useState(null);
  const dept = selected !== null ? DEPTS[selected] : null;

  return (
    <div className="min-h-screen" style={{ background: "#071428", color: "#fff" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0e2a4a 0%,#071428 100%)" }}>
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="h-px w-6 bg-orange-400" /> Academic Departments
          </span>
          <h1 className="text-5xl md:text-6xl font-black">Explore <span className="text-orange-400">Departments</span></h1>
          <p className="mt-5 text-white/60 text-lg">Six world-class departments. Infinite possibilities.</p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPTS.map((d, i) => (
            <button key={d.id} onClick={() => setSelected(selected === i ? null : i)} className="text-left rounded-2xl p-6 border transition-all duration-300 group"
              style={{ background: selected === i ? d.color + "18" : "rgba(255,255,255,0.03)", borderColor: selected === i ? d.color + "66" : "rgba(255,255,255,0.08)" }}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{d.icon}</span>
                <span className="text-xs font-black px-3 py-1 rounded-full" style={{ background: d.color + "22", color: d.color }}>{d.shortCode}</span>
              </div>
              <h3 className="font-bold text-white text-base leading-snug mb-2">{d.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>

              {selected === i && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/40 mb-1">Department Head</p>
                  <p className="text-sm font-semibold text-white mb-3">{d.head}</p>
                  <p className="text-xs text-white/40 mb-2">Programs Offered</p>
                  <ul className="space-y-1">
                    {d.programs.map((p, pi) => (
                      <li key={pi} className="text-sm text-white/70 flex items-center gap-2">
                        <span style={{ color: d.color }}>›</span>{p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-white/40">{d.faculty} Faculty Members</span>
                    <Link href="/academics" className="text-sm font-bold hover:opacity-80 transition-opacity" style={{ color: d.color }}>
                      Learn More →
                    </Link>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
