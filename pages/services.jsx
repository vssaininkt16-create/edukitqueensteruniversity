import Link from 'next/link';

const SERVICES = [
  { icon: "📚", title: "Library & Resources",    desc: "Access over 2 million physical and digital resources, 24/7 online databases, and dedicated research librarians.", color: "#6366f1", cta: "Access Library" },
  { icon: "💼", title: "Career Services",         desc: "Resume reviews, mock interviews, job placement support, and an exclusive network of 500+ recruiting partners.",     color: "#f97316", cta: "Explore Careers" },
  { icon: "🏥", title: "Health & Counselling",    desc: "On-campus medical centre, mental health counselling, nutrition guidance, and wellness programmes.",                  color: "#f43f5e", cta: "Book Appointment" },
  { icon: "🎓", title: "Financial Aid",           desc: "Scholarships, grants, student loans, and emergency funds. Our team helps you find the right support.",              color: "#22c55e", cta: "Apply for Aid" },
  { icon: "🌍", title: "International Students",  desc: "Visa support, cultural orientation, language assistance, and a dedicated international student community.",          color: "#22d3ee", cta: "Learn More" },
  { icon: "🏠", title: "Housing Services",        desc: "On-campus and off-campus accommodation options, housing applications, and student residence support.",               color: "#ec4899", cta: "Find Housing" },
  { icon: "💻", title: "IT & Tech Support",       desc: "24/7 tech helpdesk, campus Wi-Fi, licensed software, computer labs, and cloud storage for every student.",         color: "#a78bfa", cta: "Get Support" },
  { icon: "♿", title: "Accessibility Services",  desc: "Personalised support for students with disabilities, including exam accommodations and assistive technology.",       color: "#fb923c", cta: "Contact Team" },
];

export default function Services() {
  return (
    <div style={{ background: "#071428", color: "#fff", minHeight: "100vh" }}>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0e2a4a 0%,#071428 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(ellipse at 60% 40%, #f97316 0%, transparent 55%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-[0.22em] uppercase mb-5">
            <span className="h-px w-6 bg-orange-400" /> Student Support
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Student <span className="text-orange-400">Services</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
            Every resource, service, and support system you need to thrive at Queenster University.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title}
              className="group rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.color + "18", border: `1px solid ${s.color}30` }}>
                {s.icon}
              </div>
              <h3 className="font-bold text-white text-base mb-3">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{s.desc}</p>
              <button className="mt-5 text-sm font-semibold transition-colors text-left flex items-center gap-1.5"
                style={{ color: s.color }}>
                {s.cta} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <h2 className="text-3xl font-black text-white mb-4">Can't find what you need?</h2>
        <p className="text-white/45 mb-8 max-w-md mx-auto">Our student services team is available Monday to Friday, 9am–6pm.</p>
        <Link href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm"
          style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
          Contact Student Services →
        </Link>
      </section>
    </div>
  );
}
