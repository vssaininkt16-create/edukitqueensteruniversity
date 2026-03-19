import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const QUICK_LINKS = [
  { label: "My Courses",    href: "/courses",    icon: "📚", color: "#6366f1" },
  { label: "Academics",     href: "/academics",  icon: "🎓", color: "#22c55e" },
  { label: "Admissions",    href: "/admissions", icon: "📋", color: "#f97316" },
  { label: "Campus Life",   href: "/campuslife", icon: "🏛️", color: "#ec4899" },
  { label: "Events",        href: "/events",     icon: "📅", color: "#22d3ee" },
  { label: "Faculty",       href: "/faculty",    icon: "👨‍🏫", color: "#f43f5e" },
];

export default function Dashboard() {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/profile')
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then(setUser)
      .catch(() => router.push('/login'))
      .finally(() => setLoading(false));
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' }).catch(() => {});
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#071428" }}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" />
          <p className="text-white/50 text-sm">Loading your dashboard…</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const initials = user.email?.slice(0, 2).toUpperCase() || "QU";

  return (
    <div className="min-h-screen" style={{ background: "#071428", color: "#fff" }}>
      {/* Top bar */}
      <div className="sticky top-0 z-20 px-6 h-16 flex items-center justify-between border-b"
        style={{ background: "rgba(7,20,40,0.97)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.08)" }}>
        <Link href="/" className="text-white font-black text-lg">
          <span className="text-orange-500">Q</span>ueenster
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-white/50 text-sm hidden sm:block">{user.email}</span>
          <button onClick={handleLogout}
            className="px-4 py-2 rounded-full text-sm font-semibold text-white/70 hover:text-white border border-white/15 hover:border-white/30 transition-all">
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome */}
        <div className="flex items-center gap-5 mb-12">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white shrink-0"
            style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
            {initials}
          </div>
          <div>
            <p className="text-white/50 text-sm">Welcome back</p>
            <h1 className="text-2xl font-black text-white">{user.email}</h1>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[["Student", "Status"], ["Active", "Enrollment"], ["0", "Assignments Due"], ["—", "GPA (N/A)"]].map(([val, lbl]) => (
            <div key={lbl} className="rounded-2xl p-5 border border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="text-2xl font-black text-orange-400">{val}</div>
              <div className="text-white/40 text-xs mt-1">{lbl}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <h2 className="text-lg font-bold text-white/70 mb-5 uppercase tracking-widest text-xs">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {QUICK_LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className="flex items-center gap-4 rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-200 group"
              style={{ background: "rgba(255,255,255,0.03)" }}>
              <span className="text-3xl">{l.icon}</span>
              <span className="font-semibold text-white/80 group-hover:text-white transition-colors">{l.label}</span>
            </Link>
          ))}
        </div>

        {/* Account info */}
        <div className="rounded-2xl p-6 border border-white/10" style={{ background: "rgba(255,255,255,0.02)" }}>
          <h3 className="font-bold text-white mb-4">Account Details</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="text-white/40 text-xs uppercase tracking-wider">Email</dt>
              <dd className="text-white text-sm mt-1">{user.email}</dd>
            </div>
            <div>
              <dt className="text-white/40 text-xs uppercase tracking-wider">User ID</dt>
              <dd className="text-white/60 text-sm mt-1 font-mono">{user.userId}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
