import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import Head from 'next/head';

const FIELDS = [
  { id: 'name',    label: 'Full Name',      type: 'text',  placeholder: 'Your full name'    },
  { id: 'email',   label: 'Email Address',  type: 'email', placeholder: 'you@example.com'   },
  { id: 'subject', label: 'Subject',        type: 'text',  placeholder: 'How can we help?'  },
];

const CONTACT_INFO = [
  { icon: <FaMapMarkerAlt />, label: 'Address',  value: 'Noida Sector 18, Uttar Pradesh, India' },
  { icon: <FaPhone        />, label: 'Phone',    value: '+91 8826186852',  href: 'tel:+918826186852'          },
  { icon: <FaEnvelope     />, label: 'Email',    value: 'amityfate12@gmail.com', href: 'mailto:amityfate12@gmail.com' },
];

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError('Please fill in all required fields.'); return; }
    setError('');
    setSending(true);
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <>
      <Head><title>Contact Us — Queenster University</title></Head>
      <div style={{ background: '#071428', minHeight: '100vh', color: '#fff' }}>

        {/* ── HERO ── */}
        <div style={{ background: 'linear-gradient(135deg,#0e2a4a 0%,#071428 100%)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          className="py-20 px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange-400" />
            <span className="text-orange-400 text-xs font-bold tracking-[0.22em] uppercase">Get In Touch</span>
            <span className="h-px w-8 bg-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">Contact Us</h1>
          <p className="mt-4 text-white/50 max-w-lg mx-auto text-sm">
            We're here to answer any questions about admissions, programs, or campus life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── FORM ── */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <FaCheckCircle className="text-green-400 text-5xl" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-white/50 text-sm max-w-xs">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {FIELDS.map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">{f.label}</label>
                    <input
                      id={f.id} type={f.type} placeholder={f.placeholder} value={form[f.id]} onChange={handleChange}
                      className="w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Message <span className="text-orange-500">*</span></label>
                  <textarea
                    id="message" rows={5} placeholder="Tell us how we can help you..." value={form.message} onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button type="submit" disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.01] disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                  {sending ? (
                    <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending…</>
                  ) : (
                    <><FaPaperPlane />Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── INFO + MAP ── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-5">
                {CONTACT_INFO.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 mt-0.5"
                      style={{ background: 'rgba(249,115,22,0.12)' }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-white/35 text-xs uppercase tracking-wider font-semibold">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-white/80 hover:text-orange-400 text-sm transition-colors mt-0.5 block">{c.value}</a>
                      ) : (
                        <p className="text-white/80 text-sm mt-0.5">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden" style={{ height: '280px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3503.2900897920285!2d77.4449506!3d28.591073!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cefc7657641a9%3A0x8db46c060e305dc3!2sEdukit%20-%20School%20ERP%2C%20LMS%20%26%20Website%20NX%20One%20T-3%20A-1106%2C%20Techzone%204%2C%20Amrapali%20Dream%20Valley%20Greater%20Noida%2C%20Uttar%20Pradesh%20201318!3m2!1d28.591072999999998!2d77.4449506!5e0!3m2!1sen!2sin!4v1758788243278!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(200deg)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office hours */}
            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-bold text-sm mb-4">Office Hours</h3>
              {[['Mon – Fri', '9:00 AM – 6:00 PM'], ['Saturday', '10:00 AM – 2:00 PM'], ['Sunday', 'Closed']].map(([day, time]) => (
                <div key={day} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-white/50 text-sm">{day}</span>
                  <span className="text-white/80 text-sm font-medium">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
