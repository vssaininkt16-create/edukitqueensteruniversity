import React from "react";
import Link from "next/link";

const FACULTY = [
  { name: "Dr. Sarah Mitchell",   dept: "Computer Science",    role: "Professor & Dept. Head", img: "https://i.pravatar.cc/150?img=47", speciality: "AI & Machine Learning" },
  { name: "Prof. James Okafor",   dept: "Business",            role: "Associate Professor",    img: "https://i.pravatar.cc/150?img=12", speciality: "International Finance"  },
  { name: "Dr. Priya Sharma",     dept: "Engineering",         role: "Professor",              img: "https://i.pravatar.cc/150?img=25", speciality: "Structural Engineering" },
  { name: "Dr. Lena Bauer",       dept: "Liberal Arts",        role: "Senior Lecturer",        img: "https://i.pravatar.cc/150?img=32", speciality: "European Literature"    },
  { name: "Prof. Carlos Rivera",  dept: "Sciences",            role: "Research Professor",     img: "https://i.pravatar.cc/150?img=18", speciality: "Quantum Physics"        },
  { name: "Dr. Fatima Al-Hassan", dept: "Medicine",            role: "Associate Professor",    img: "https://i.pravatar.cc/150?img=55", speciality: "Public Health"          },
  { name: "Dr. Wei Chen",         dept: "Computer Science",    role: "Assistant Professor",    img: "https://i.pravatar.cc/150?img=60", speciality: "Cybersecurity"          },
  { name: "Prof. Anna Kowalski",  dept: "Arts & Design",       role: "Senior Lecturer",        img: "https://i.pravatar.cc/150?img=44", speciality: "Digital Media Design"   },
];

const DEPTS = ["All", ...Array.from(new Set(FACULTY.map((f) => f.dept)))];

export default function Faculty() {
  const [active, setActive] = React.useState("All");
  const shown = active === "All" ? FACULTY : FACULTY.filter((f) => f.dept === active);

  return (
    <div className="min-h-screen" style={{ background: "#071428", color: "#fff" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0e2a4a 0%,#071428 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #f97316 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="h-px w-6 bg-orange-400" /> Our Educators
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">Meet the <span className="text-orange-400">Faculty</span></h1>
          <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto">
            World-class educators and researchers committed to your academic growth.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-20 py-4 px-6" style={{ background: "rgba(7,20,40,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {DEPTS.map((d) => (
            <button key={d} onClick={() => setActive(d)}
              className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: active === d ? "#f97316" : "rgba(255,255,255,0.07)", color: active === d ? "#fff" : "rgba(255,255,255,0.6)" }}>
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shown.map((f, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition-all duration-300 group"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="relative overflow-hidden h-52">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,20,40,0.8), transparent 50%)" }} />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-orange-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  {f.dept}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-base leading-tight">{f.name}</h3>
                <p className="text-white/50 text-xs mt-1">{f.role}</p>
                <div className="mt-3 h-px bg-white/10" />
                <p className="mt-3 text-white/60 text-xs">{f.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-black text-white mb-4">Interested in joining our faculty?</h2>
        <p className="text-white/50 mb-8">We're always looking for passionate educators and researchers.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm"
          style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
          Get in Touch →
        </Link>
      </section>
    </div>
  );
}
