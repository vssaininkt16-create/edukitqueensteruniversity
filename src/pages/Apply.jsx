import React, { useState } from "react";
import Link from "next/link";

const STEPS = [
  { n: "01", title: "Choose a Programme",  desc: "Browse our 240+ undergraduate and graduate programmes."            },
  { n: "02", title: "Complete Application", desc: "Fill in your personal details, academics, and upload documents."   },
  { n: "03", title: "Submit & Track",       desc: "Submit online and track your application status in real-time."     },
  { n: "04", title: "Receive Decision",     desc: "Get your admission decision and confirm your enrolment."           },
];

const PROGRAMS = [
  "Engineering & Technology", "Business Administration", "Computer Science",
  "Liberal Arts & Humanities", "Medicine & Health Sciences", "Physics & Sciences",
  "Law", "Education", "Other",
];

export default function Apply() {
  const [step, setStep]     = useState(1);
  const [form, setForm]     = useState({ firstName:"", lastName:"", email:"", phone:"", program:"", level:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [done, setDone]     = useState(false);
  const [error, setError]   = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.program || !form.level) { setError("Please fill all required fields."); return; }
    setError(""); setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false); setDone(true);
  };

  const inputCls = "w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none focus:ring-2 focus:ring-orange-500 transition-all";
  const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" };

  return (
    <div style={{ background: "#071428", color: "#fff", minHeight: "100vh" }}>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0e2a4a 0%,#071428 100%)" }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-[0.22em] uppercase mb-5">
            <span className="h-px w-6 bg-orange-400" /> Admissions 2025–26
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Apply to <span className="text-orange-400">Queenster</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
            Take the first step towards a world-class education. Applications are open for 2025–26.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white text-center mb-10">How to Apply</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl p-6 border border-white/10 text-center"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="text-3xl font-black text-orange-400 mb-3">{s.n}</div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-2 text-center">Start Your Application</h2>
          <p className="text-white/40 text-sm text-center mb-10">Fill in the form below and our admissions team will be in touch within 2 business days.</p>

          {done ? (
            <div className="rounded-2xl p-12 border border-green-500/30 text-center" style={{ background: "rgba(34,197,94,0.06)" }}>
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-2xl font-black text-white mb-3">Application Submitted!</h3>
              <p className="text-white/55 mb-8">Thank you, {form.firstName}. Our admissions team will contact you at <span className="text-orange-400">{form.email}</span> within 2 business days.</p>
              <Link href="/" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl p-8 border border-white/10 space-y-5"
              style={{ background: "rgba(255,255,255,0.02)" }}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[["firstName","First Name *"],["lastName","Last Name"]].map(([k,lbl])=>(
                  <div key={k}>
                    <label className="block text-xs font-semibold text-white/45 uppercase tracking-wider mb-2">{lbl}</label>
                    <input value={form[k]} onChange={set(k)} placeholder={lbl.replace(" *","")} className={inputCls} style={inputStyle} />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[["email","Email Address *","email"],["phone","Phone Number","tel"]].map(([k,lbl,type])=>(
                  <div key={k}>
                    <label className="block text-xs font-semibold text-white/45 uppercase tracking-wider mb-2">{lbl}</label>
                    <input type={type} value={form[k]} onChange={set(k)} placeholder={lbl.replace(" *","")} className={inputCls} style={inputStyle} />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/45 uppercase tracking-wider mb-2">Programme of Interest *</label>
                <select value={form.program} onChange={set("program")} className={inputCls} style={inputStyle}>
                  <option value="">Select a programme…</option>
                  {PROGRAMS.map((p)=>(<option key={p} value={p}>{p}</option>))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/45 uppercase tracking-wider mb-2">Study Level *</label>
                <div className="flex gap-3 flex-wrap">
                  {["Undergraduate","Postgraduate","PhD","Certificate"].map((l)=>(
                    <button key={l} type="button" onClick={()=>setForm(f=>({...f,level:l}))}
                      className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-150"
                      style={{ background: form.level===l ? "#f97316" : "rgba(255,255,255,0.07)", color: form.level===l ? "#fff" : "rgba(255,255,255,0.55)" }}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/45 uppercase tracking-wider mb-2">Message (optional)</label>
                <textarea value={form.message} onChange={set("message")} rows={4} placeholder="Tell us a bit about yourself and your goals…"
                  className={inputCls + " resize-none"} style={inputStyle} />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button type="submit" disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.01] disabled:opacity-60 flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                {loading ? (
                  <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Submitting…</>
                ) : "Submit Application →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
