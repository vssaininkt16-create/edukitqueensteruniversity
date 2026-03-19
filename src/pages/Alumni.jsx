import React, { useState } from 'react';
import Link from 'next/link';

const ALUMNI = [
  { name: "John Smith",      major: "Computer Science",    year: 2018, role: "Senior Engineer @ Google",        img: "https://i.pravatar.cc/150?img=32", quote: "Queenster gave me the technical foundation and problem-solving mindset that Google looks for." },
  { name: "Emily Johnson",   major: "Business Administration", year: 2019, role: "Co-founder, FinVault",        img: "https://i.pravatar.cc/150?img=44", quote: "The entrepreneurship programme here shaped my thinking and gave me the courage to start my own company." },
  { name: "Michael Williams",major: "Mechanical Engineering",  year: 2017, role: "Lead Designer @ Tesla",       img: "https://i.pravatar.cc/150?img=18", quote: "The hands-on labs and research culture at Queenster prepared me for real-world innovation." },
  { name: "Aisha Patel",     major: "Medicine",             year: 2020, role: "Resident Physician, AIIMS Delhi", img: "https://i.pravatar.cc/150?img=47", quote: "The clinical exposure and mentorship I received here were second to none." },
  { name: "Carlos Mendez",   major: "Liberal Arts",         year: 2016, role: "Policy Analyst, UN",             img: "https://i.pravatar.cc/150?img=12", quote: "My cross-disciplinary education at Queenster prepared me for work on the global stage." },
  { name: "Li Wei",          major: "Computer Science",     year: 2021, role: "ML Researcher @ DeepMind",       img: "https://i.pravatar.cc/150?img=60", quote: "The AI research lab here gave me a direct path to cutting-edge machine learning work." },
];

const EVENTS = [
  { title: "Annual Alumni Gala 2025",    date: "Nov 15, 2025", location: "Queenster Grand Hall",  desc: "An evening of reconnection, celebration, and networking with 500+ alumni." },
  { title: "Tech & Innovation Summit",   date: "Dec 8, 2025",  location: "Engineering Block",     desc: "Alumni-led talks on emerging technologies shaping the next decade." },
  { title: "Global Alumni Meetup — NYC", date: "Jan 20, 2026", location: "New York, USA",         desc: "Connect with fellow Queenster alumni in the heart of New York City." },
];

const INVOLVE = [
  { icon: "🧑‍🏫", title: "Mentor Students",    desc: "Guide current students as they navigate their academic and career journeys.", cta: "Become a Mentor" },
  { icon: "🙋",   title: "Volunteer",          desc: "Contribute your time and skills to university initiatives and events.",         cta: "See Opportunities" },
  { icon: "💛",   title: "Give Back",          desc: "Support scholarships, research, and campus development through donations.",      cta: "Make a Donation" },
];

export default function Alumni() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={{ background: "#071428", color: "#fff", minHeight: "100vh" }}>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0e2a4a 0%,#071428 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at 80% 30%, rgba(249,115,22,0.09) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-[0.22em] uppercase mb-5">
            <span className="h-px w-6 bg-orange-400" /> Alumni Network
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Our <span className="text-orange-400">Alumni</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            50,000+ graduates across 120 countries — shaping industries, leading organisations, and changing lives.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["50k+","Alumni Worldwide"],["120","Countries"],["85%","Employment Rate"],["₹18L","Avg. Starting Package"]].map(([v,l])=>(
            <div key={l}>
              <div className="text-4xl font-black text-orange-400">{v}</div>
              <div className="text-white/40 text-sm mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED ALUMNI */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white">Alumni Spotlight</h2>
            <p className="mt-3 text-white/40 max-w-lg mx-auto">Graduates making their mark across industries worldwide.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALUMNI.map((a, i) => (
              <div key={i} onClick={() => setExpanded(expanded === i ? null : i)}
                className="rounded-2xl p-6 border cursor-pointer transition-all duration-300"
                style={{ background: expanded === i ? "rgba(249,115,22,0.08)" : "rgba(255,255,255,0.03)", borderColor: expanded === i ? "rgba(249,115,22,0.4)" : "rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={a.img} alt={a.name} className="w-14 h-14 rounded-2xl object-cover border border-white/15" />
                  <div>
                    <div className="font-bold text-white text-sm">{a.name}</div>
                    <div className="text-white/45 text-xs">{a.role}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">{a.major}</span>
                  <span className="text-white/30 text-xs">Class of {a.year}</span>
                </div>
                {expanded === i && (
                  <p className="text-white/60 text-sm leading-relaxed mt-3 italic border-t border-white/10 pt-3">"{a.quote}"</p>
                )}
                {expanded !== i && (
                  <p className="text-white/35 text-xs mt-2">Click to read their story →</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20 px-6" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white">Upcoming Alumni Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS.map((e, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-colors"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="text-orange-400 text-xs font-bold mb-3">{e.date}</div>
                <h3 className="font-bold text-white text-base mb-1">{e.title}</h3>
                <p className="text-white/40 text-xs mb-3">📍 {e.location}</p>
                <p className="text-white/55 text-sm leading-relaxed">{e.desc}</p>
                <button className="mt-4 text-orange-400 text-sm font-semibold hover:text-orange-300 transition-colors">Register →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white">Get Involved</h2>
            <p className="mt-3 text-white/40 max-w-lg mx-auto">Stay connected and help shape the next generation of Queenster graduates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INVOLVE.map((item) => (
              <div key={item.title} className="rounded-2xl p-7 border border-white/10 hover:border-orange-500/30 transition-colors text-center"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <span className="text-5xl mb-5 block">{item.icon}</span>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="px-6 py-2.5 rounded-full text-sm font-semibold text-orange-400 border border-orange-400/30 hover:bg-orange-400/10 transition-colors">
                  {item.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
