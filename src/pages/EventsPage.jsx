import React, { useState } from "react";
import Link from "next/link";

const EVENTS = [
  { id: 1, title: "Annual Science Symposium 2025",   date: "2025-09-15", time: "09:00 AM", venue: "Science Complex Auditorium", category: "Academic",  img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", desc: "Join leading researchers for a full-day symposium on breakthrough discoveries in physics, chemistry, and biology." },
  { id: 2, title: "Cultural Festival — Queensfest",   date: "2025-10-02", time: "04:00 PM", venue: "Main Campus Grounds",        category: "Cultural",  img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80", desc: "A vibrant celebration of global cultures with music, food, and performances from student communities." },
  { id: 3, title: "Tech & Innovation Hackathon",      date: "2025-10-18", time: "08:00 AM", venue: "Engineering Block — Lab 3", category: "Tech",      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", desc: "48-hour hackathon open to all students. Build solutions for real-world problems and win cash prizes." },
  { id: 4, title: "Alumni Networking Evening",        date: "2025-11-05", time: "06:00 PM", venue: "Queenster Grand Hall",       category: "Networking",img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", desc: "Connect with 200+ industry professionals and distinguished alumni from around the world." },
  { id: 5, title: "Intercollegiate Sports Meet",      date: "2025-11-20", time: "10:00 AM", venue: "Stadium & Sports Complex",   category: "Sports",   img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80", desc: "Three-day multi-sport event featuring athletics, basketball, football, and swimming competitions." },
  { id: 6, title: "Entrepreneurship Summit",          date: "2025-12-08", time: "09:30 AM", venue: "Business School, Hall A",   category: "Academic",  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", desc: "Keynote speakers, startup pitches, and panel discussions on building ventures from campus." },
];

const CATS = ["All", "Academic", "Cultural", "Tech", "Networking", "Sports"];
const CAT_COLORS = { Academic: "#6366f1", Cultural: "#ec4899", Tech: "#22d3ee", Networking: "#f97316", Sports: "#22c55e" };

function fmtDate(iso) {
  const d = new Date(iso);
  return { day: d.getDate(), month: d.toLocaleString("en", { month: "short" }), year: d.getFullYear() };
}

export default function EventsPage() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? EVENTS : EVENTS.filter((e) => e.category === cat);

  return (
    <div className="min-h-screen" style={{ background: "#071428", color: "#fff" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0d2240 0%,#071428 100%)" }}>
        <div className="absolute right-0 top-0 w-96 h-96 opacity-10 rounded-full"
          style={{ background: "radial-gradient(circle, #f97316, transparent 70%)", filter: "blur(60px)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="h-px w-6 bg-orange-400" /> What's On
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">Campus <span className="text-orange-400">Events</span></h1>
          <p className="mt-5 text-white/60 text-lg">Stay connected with everything happening at Queenster University.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-20 py-4 px-6" style={{ background: "rgba(7,20,40,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: cat === c ? "#f97316" : "rgba(255,255,255,0.07)", color: cat === c ? "#fff" : "rgba(255,255,255,0.6)" }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((ev) => {
            const { day, month, year } = fmtDate(ev.date);
            const color = CAT_COLORS[ev.category] || "#f97316";
            return (
              <div key={ev.id} className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,20,40,0.7), transparent)" }} />
                  <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full" style={{ background: color + "33", color, border: `1px solid ${color}44` }}>
                    {ev.category}
                  </span>
                  {/* Date badge */}
                  <div className="absolute bottom-3 left-3 text-center rounded-xl px-3 py-2 min-w-[52px]"
                    style={{ background: "rgba(7,20,40,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <div className="text-xl font-black text-white leading-none">{day}</div>
                    <div className="text-xs text-orange-400 font-bold uppercase">{month}</div>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-white text-base leading-snug">{ev.title}</h3>
                  <div className="mt-2 flex items-center gap-4 text-white/40 text-xs">
                    <span>🕐 {ev.time}</span>
                    <span>📍 {ev.venue}</span>
                  </div>
                  <p className="mt-3 text-white/55 text-sm leading-relaxed flex-1">{ev.desc}</p>
                  <div className="mt-4">
                    <button className="text-orange-400 text-sm font-semibold hover:text-orange-300 transition-colors">
                      Register →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
