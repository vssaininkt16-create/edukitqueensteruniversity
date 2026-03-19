import React, { useState } from "react";
import Link from "next/link";

const SECTIONS = [
  {
    key: "housing",
    label: "Housing",
    icon: "🏠",
    title: "Student Housing",
    desc: "Comfortable, fully-equipped residences with high-speed internet, study lounges, and 24/7 security.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
    highlights: ["On-campus & off-campus options", "Single and shared rooms", "Furnished with all amenities", "24/7 security & CCTV"],
  },
  {
    key: "dining",
    label: "Dining",
    icon: "🍽️",
    title: "Campus Dining",
    desc: "Multiple dining halls and cafes offering diverse cuisines to suit every taste and dietary requirement.",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
    highlights: ["4 dining halls campus-wide", "International & local cuisine", "Vegetarian & vegan options", "Meal plan packages available"],
  },
  {
    key: "sports",
    label: "Sports",
    icon: "⚽",
    title: "Sports & Recreation",
    desc: "State-of-the-art facilities for 15+ sports, from swimming pools to an Olympic-standard athletics track.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    highlights: ["Olympic athletics track", "Indoor & outdoor courts", "Olympic-size swimming pool", "Fully-equipped fitness centre"],
  },
  {
    key: "clubs",
    label: "Clubs",
    icon: "🎭",
    title: "Clubs & Societies",
    desc: "Over 80 student clubs spanning arts, culture, tech, entrepreneurship, and community service.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    highlights: ["80+ active student clubs", "Cultural & performing arts", "Tech & entrepreneurship", "Community service programmes"],
  },
  {
    key: "wellness",
    label: "Wellness",
    icon: "💙",
    title: "Health & Wellness",
    desc: "Comprehensive support for your physical and mental well-being, including counselling and a medical centre.",
    img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    highlights: ["On-campus medical centre", "Mental health counselling", "Meditation & mindfulness", "Nutritional guidance"],
  },
];

export default function CampusLife() {
  const [active, setActive] = useState("housing");
  const section = SECTIONS.find((s) => s.key === active);

  return (
    <div className="min-h-screen" style={{ background: "#071428", color: "#fff" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0d2240 0%,#071428 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, #f97316 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="h-px w-6 bg-orange-400" /> Life at Queenster
          </span>
          <h1 className="text-5xl md:text-6xl font-black">Campus <span className="text-orange-400">Life</span></h1>
          <p className="mt-5 text-white/60 text-lg">More than a degree — a complete university experience.</p>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="sticky top-16 z-20 py-4 px-6" style={{ background: "rgba(7,20,40,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto pb-1">
          {SECTIONS.map((s) => (
            <button key={s.key} onClick={() => setActive(s.key)}
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: active === s.key ? "#f97316" : "rgba(255,255,255,0.07)", color: active === s.key ? "#fff" : "rgba(255,255,255,0.6)" }}>
              <span>{s.icon}</span>{s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content panel */}
      {section && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl mb-5 block">{section.icon}</span>
              <h2 className="text-4xl font-black text-white mb-4">{section.title}</h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">{section.desc}</p>
              <ul className="space-y-3">
                {section.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0">
                      <span className="text-orange-400 text-xs">✓</span>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-80 lg:h-96 shadow-2xl border border-white/10">
              <img src={section.img} alt={section.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,20,40,0.2), transparent)" }} />
            </div>
          </div>
        </section>
      )}

      {/* Stats strip */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["80+", "Student Clubs"], ["4", "Dining Halls"], ["15+", "Sports Facilities"], ["24/7", "Campus Support"]].map(([n, l]) => (
            <div key={l}>
              <div className="text-4xl font-black text-orange-400">{n}</div>
              <div className="text-white/50 text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
