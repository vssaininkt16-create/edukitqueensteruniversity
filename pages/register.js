import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const router = useRouter();

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) { setError('Passwords do not match'); return; }
    if (form.password.length < 6)       { setError('Password must be at least 6 characters'); return; }
    setError(''); setLoading(true);

    try {
      const res  = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (res.ok) { router.push('/login'); }
      else        { setError(data.message || 'Registration failed'); }
    } catch { setError('Server error. Try again later.'); }
    finally  { setLoading(false); }
  };

  const inputCls = "w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-amber-400 transition-all";
  const inputStyle = { background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.1)" };

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "linear-gradient(135deg,#050f1e 0%,#071428 100%)" }}>

      {/* Glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #f97316, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-black text-white">
            <span className="text-orange-500">Q</span>ueenster
          </Link>
          <p className="text-white/40 text-sm mt-2">Create your account</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8 border border-white/10 shadow-2xl backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.04)" }}>
          <h2 className="text-2xl font-bold text-white mb-1">Sign up</h2>
          <p className="text-white/45 text-sm mb-7">Join the Queenster University community</p>

          {error && (
            <div className="mb-5 p-3 rounded-xl text-red-300 text-sm border border-red-500/25"
              style={{ background: "rgba(239,68,68,0.08)" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Email Address</label>
              <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com"
                className={inputCls} style={inputStyle} required />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Password</label>
              <input type="password" value={form.password} onChange={set('password')} placeholder="Minimum 6 characters"
                className={inputCls} style={inputStyle} required />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Confirm Password</label>
              <input type="password" value={form.confirm} onChange={set('confirm')} placeholder="Repeat your password"
                className={inputCls} style={inputStyle} required />
            </div>

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.01] disabled:opacity-60"
              style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
              {loading
                ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Creating account…</>
                : "Create Account →"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/40">
            Already have an account?{' '}
            <Link href="/login" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              Sign in
            </Link>
          </p>
        </div>

        {/* Terms note */}
        <p className="mt-6 text-center text-xs text-white/25">
          By creating an account you agree to our{' '}
          <a href="#" className="text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
