// FILE: pages/login.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const validateForm = () => {
    if (!email.trim()) { setError('Email is required'); return false; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Enter a valid email'); return false; }
    if (!password.trim()) { setError('Password is required'); return false; }
    if (password.length < 6) { setError('Password must be at least 6 characters'); return false; }
    setError('');
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if (typeof window !== 'undefined') localStorage.setItem('token', data.token);
        router.push('/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-neutral-900 to-black p-6">
      <div className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl">
        {/* Background visual */}
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#0f172a" />
                <stop offset="1" stopColor="#0b1220" />
              </linearGradient>
              <filter id="blur"><feGaussianBlur stdDeviation="60" /></filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#g1)" />
            <g filter="url(#blur)" opacity="0.25">
              <circle cx="200" cy="120" r="180" fill="#7c3aed" />
              <circle cx="1200" cy="600" r="260" fill="#f59e0b" />
            </g>
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-white/3 via-white/2 to-white/3 p-8 md:p-12 backdrop-blur-sm">
          {/* Left - Brand + art */}
          <div className="flex flex-col justify-between pr-6">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/6 border border-white/10 text-white text-sm font-medium">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-yellow-400"><path d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 1.5-7L2 8.5 8 8 12 2z" fill="currentColor"/></svg>
                Queenster Premium
              </div>

              <h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                A refined gateway to <span className="text-amber-400">education</span>
              </h1>

              <p className="mt-4 text-white/70 max-w-md">Secure access to courses, transcripts, admissions and administrative tools — presented with premium polish and subtle motion.</p>

              <div className="mt-8 flex gap-4">
                <div className="p-4 rounded-xl bg-amber-800/10 border border-amber-300/10">
                  <div className="text-xs text-white/70">Students</div>
                  <div className="font-semibold text-white">120k+</div>
                </div>
                <div className="p-4 rounded-xl bg-indigo-800/10 border border-indigo-300/10">
                  <div className="text-xs text-white/70">Courses</div>
                  <div className="font-semibold text-white">2.4k</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-sm text-white/60">
              © {new Date().getFullYear()} Queenster.University 
            </div>
          </div>

          {/* Right - Form card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative w-full max-w-md mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/10 p-8 shadow-xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Sign in</h2>
                  <p className="text-sm text-white/70 mt-1">Access your Queenster account</p>
                </div>
                <div className="text-sm text-white/60"></div>
              </div>

              {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-600/10 border border-red-600/20 text-red-300 text-sm" role="alert">{error}</div>
              )}

              <form onSubmit={handleLogin} className="mt-6 space-y-4" noValidate>
                <label className="text-xs text-white/70">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@queenster.edu"
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-white/70">Password</label>
                    <Link href="/forgot-password" className="text-xs text-amber-300 hover:underline">Forgot?</Link>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter secure password"
                      className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 pr-20 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/60">{showPassword ? 'Hide' : 'Show'}</button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-white/70">
                    <input type="checkbox" className="accent-amber-400 w-4 h-4" />
                    Remember me
                  </label>
                  <div className="text-xs text-white/60">Secure connection</div>
                </div>

                <button type="submit" disabled={loading} className="w-full rounded-xl px-4 py-3 bg-gradient-to-r from-amber-400 to-amber-300 text-black font-semibold shadow-md hover:scale-[1.01] transition disabled:opacity-60">
                  {loading ? 'Signing in…' : 'Sign in securely'}
                </button>

                <div className="pt-2">
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/6"></div></div>
                    <div className="relative flex justify-center text-xs">or continue with</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="rounded-xl border border-white/10 px-4 py-2 flex items-center justify-center text-sm bg-white/5">Google</button>
                    <button type="button" className="rounded-xl border border-white/10 px-4 py-2 flex items-center justify-center text-sm bg-white/5">Microsoft</button>
                  </div>
                </div>

                <p className="mt-4 text-xs text-white/60 text-center">Don’t have an account? <Link href="/register" className="text-amber-300 font-medium">Create one</Link></p>
              </form>
            </div>

            {/* subtle glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" aria-hidden />
          </motion.div>
        </div>
      </div>
    </div>
  );

}
