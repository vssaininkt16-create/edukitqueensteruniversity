// pages/campus-tour.jsx
import Link from "next/link";
import { useMemo, useState } from "react";

const GALLERY = [
  "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1627556704283-452301a45fd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1683887034552-4635692bb57c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664372145865-c7526455ea94?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
];

export default function CampusTour() {
  const [q, setQ] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = closed
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });
  const [booked, setBooked] = useState(false);

  const stats = useMemo(
    () => [
      { label: "Campus Area", value: "120 acres" },
      { label: "Labs & Facilities", value: "40+" },
      { label: "Student Clubs", value: "60+" },
    ],
    []
  );

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY.length));
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY.length) % GALLERY.length));

  function handleBookingChange(e) {
    const { name, value } = e.target;
    setBooking((b) => ({ ...b, [name]: value }));
  }

  function submitBooking(e) {
    e.preventDefault();
    // Replace with real API call as needed.
    setBooked(true);
    setTimeout(() => {
      // reset lightly after success so user can book again
      setBooking({ name: "", email: "", date: "", time: "", message: "" });
    }, 1000);
  }

  return (
    <main className="antialiased text-slate-800">
      {/* HERO */}
      <section
        className="relative h-[520px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,8,32,0.35), rgba(6,8,32,0.35)), url('https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white drop-shadow-lg">
            Campus Tour
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/90">
            Discover Queenster University’s vibrant campus, facilities, and student life.
          </p>

          <div className="mt-8 w-full max-w-4xl bg-white/6 border border-white/12 backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-left">
              <p className="text-sm text-white/90">Premium campus experience</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">Guided visits & virtual tours</h3>
            </div>

            <div className="flex gap-3 items-center">
              <Link href="#gallery" className="rounded-full bg-white/90 px-5 py-3 text-slate-900 font-semibold shadow hover:scale-[1.02] transition">
                View Gallery
              </Link>
              <a href="#book" className="rounded-full border border-white/20 px-5 py-3 text-white/90 hover:bg-white/5 transition">
                Book a Visit
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white/6 border border-white/8 p-4 text-left">
                <p className="text-sm text-white/80">{s.label}</p>
                <p className="mt-1 text-2xl font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,1)" d="M0,32 C240,96 480,0 720,32 C960,64 1200,0 1440,32 L1440 80 L0 80 Z" />
        </svg>
      </section>

      {/* INTRO + VIDEO  */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1b4c]">Experience Life at Queenster</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our campus is designed to inspire learning, creativity and collaboration. Explore modern
              classrooms, open green spaces, research labs and a thriving student community.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              <li>• State-of-the-art research facilities</li>
              <li>• Diverse student clubs & activities</li>
              <li>• Secure on-campus housing</li>
              <li>• Sustainable green initiatives</li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <iframe
                title="Virtual campus tour"
                src="https://www.youtube.com/embed/44V2RJ2oi60"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#0b1b4c] mb-6">Campus Highlights</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8">
            A curated look at what makes Queenster University's campus exceptional.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Modern Facilities", d: "Advanced labs, libraries and smart classrooms." },
              { t: "Student Housing", d: "Comfortable, secure & community-driven living." },
              { t: "Green Campus", d: "Open spaces and sustainable landscaping." },
            ].map((it) => (
              <div key={it.t} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                <div className="rounded-full w-12 h-12 bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                  {it.t.split(" ").slice(0,1)[0].charAt(0)}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#0b1b4c]">{it.t}</h3>
                <p className="mt-2 text-slate-600">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#0b1b4c]">Photo Gallery</h2>
            <div className="flex items-center gap-3">
              <input
                placeholder="Search photos (demo)"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="rounded-xl border px-4 py-2 text-sm shadow-sm"
              />
              <a href="#book" className="rounded-full bg-indigo-600 text-white px-4 py-2">Book a Visit</a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <button
                key={src}
                onClick={() => openLightbox(i)}
                className="rounded-xl overflow-hidden group shadow hover:shadow-2xl transition"
              >
                <img
                  src={src}
                  alt={`Campus ${i + 1}`}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition"
                />
                <div className="p-3 text-left">
                  <p className="text-sm text-slate-700">Campus highlight</p>
                  <p className="text-xs text-slate-500 mt-1">Click to enlarge</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX / MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={closeLightbox} />
          <div className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-white">
            <img src={GALLERY[lightboxIndex]} alt="Enlarged" className="w-full h-[60vh] object-cover" />
            <div className="p-4 flex items-center gap-3 justify-between">
              <div className="flex gap-2">
                <button onClick={prevImage} className="px-4 py-2 rounded bg-slate-100 hover:bg-slate-200">Prev</button>
                <button onClick={nextImage} className="px-4 py-2 rounded bg-slate-100 hover:bg-slate-200">Next</button>
              </div>
              <button onClick={closeLightbox} className="px-4 py-2 rounded bg-red-100 hover:bg-red-200">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* BOOK A VISIT + MAP */}
      <section id="book" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#0b1b4c]">Schedule a Guided Visit</h3>
            <p className="mt-2 text-slate-600">Choose a date and time. We'll confirm by email.</p>

            {booked ? (
              <div className="mt-6 rounded-lg bg-green-50 border border-green-100 p-4 text-green-800">
                Thank you — your visit request has been received. We will contact you soon.
              </div>
            ) : (
              <form onSubmit={submitBooking} className="mt-6 grid gap-3">
                <input
                  name="name"
                  value={booking.name}
                  onChange={handleBookingChange}
                  placeholder="Full name"
                  required
                  className="rounded-xl border px-4 py-3"
                />
                <input
                  name="email"
                  type="email"
                  value={booking.email}
                  onChange={handleBookingChange}
                  placeholder="Email address"
                  required
                  className="rounded-xl border px-4 py-3"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input name="date" type="date" value={booking.date} onChange={handleBookingChange} required className="rounded-xl border px-4 py-3" />
                  <input name="time" type="time" value={booking.time} onChange={handleBookingChange} required className="rounded-xl border px-4 py-3" />
                </div>
                <textarea name="message" value={booking.message} onChange={handleBookingChange} placeholder="Optional message" className="rounded-xl border px-4 py-3 min-h-[100px]" />
                <div className="flex items-center gap-3">
                  <button type="submit" className="rounded-full bg-indigo-600 text-white px-6 py-3 font-semibold shadow">Request Visit</button>
                  <button type="button" onClick={() => setBooking({name:'',email:'',date:'',time:'',message:''})} className="rounded-full border px-4 py-2">Reset</button>
                </div>
              </form>
            )}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md">
            {/* Map embed for NX ONE, Techzone-4, Greater Noida West */}
            <iframe
              title="NX ONE Techzone-4, Greater Noida West - Campus Map"
              src="https://www.google.com/maps?q=NX+ONE+Techzone-4+Greater+Noida+West&output=embed"
              className="w-full h-[420px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#0b1b4c]">Student Stories</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Real experiences from current scholars.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "Aditi Sharma", quote: "The merit scholarship allowed me to focus on research without financial stress." },
              { name: "Rahul Verma", quote: "Housing and campus life made the transition seamless." },
              { name: "Neha Singh", quote: "Clubs and labs helped me publish my first paper." },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl p-6 bg-slate-50 shadow">
                <p className="italic text-slate-700">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-[#0b1b4c]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOT CTA */}
      <section className="py-12 bg-gradient-to-r from-[#0b1b4c] to-[#254b89] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">Ready to explore Queenster?</h4>
            <p className="text-sm text-white/80">Book a guided visit or request a virtual tour.</p>
          </div>
          <div className="flex gap-3">
            <a href="#book" className="rounded-full bg-orange-500 px-6 py-3 font-semibold shadow">Schedule a Visit</a>
            <Link href="/apply" className="rounded-full border border-white/20 px-6 py-3">Apply Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
