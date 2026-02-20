// src/pages/UniversityLife.jsx
import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
 const res = await fetch("/api/homepage"); // Proxy API call

const TOP_IMAGE = "https://plus.unsplash.com/premium_photo-1691708774343-0dc68e6bd5f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbGlmZXxlbnwwfHwwfHx8MA%3D%3D";
 
const featureItems = [
  {
    image:
      "https://images.unsplash.com/photo-1731160352698-cb7e2f142d7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMGV2ZW50fGVufDB8fDB8fHww",
    title: "Events & Traditions",
    text: "Annual festivals, convocation traditions and campus ceremonies that bring our community together.",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60",
    title: "Achievements",
    text: "Academic and sports achievements celebrated across departments and student-run organizations.",
  },
  {
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=60",
    title: "Student Life",
    text: "Clubs, cultural groups, and social programs that promote collaboration and creativity.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
    title: "Transportation",
    text: "On-campus transit and connections to city transport for students and visitors.",
  },
  {
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&auto=format&fit=crop&q=60",
    title: "Parking",
    text: "Convenient and secure parking options, short-term visitor parking and student permits.",
  },
];

const contentCards = [
  {
    img:
      "https://plus.unsplash.com/premium_photo-1679498534827-cbb791fea11c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMERpbmluZyUyME9uJTIwQ2FtcHVzfGVufDB8fDB8fHww",
    title: "Dining On Campus",
    excerpt: "Fresh options, student cafes and flexible dining plans for busy schedules.",
  },
  {
    img:
      "https://plus.unsplash.com/premium_photo-1726403421924-eeb265f8c57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMEF0aGxldGljc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Athletics",
    excerpt: "Competitive teams, fitness facilities and intramural sports for all levels.",
  },
  {
    img:
      "https://images.unsplash.com/photo-1614723279217-f0a7f7f38405?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMEFydHMlMjAlMjYlMjBDdWx0dXJlfGVufDB8fDB8fHww",
    title: "Arts & Culture",
    excerpt: "Performances, exhibitions and creative workshops year-round.",
  },
  {
    img:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SW5mb3JtYXRpb24lMjBUZWNobm9sb2d5fGVufDB8fDB8fHww",
    title: "Information Technology",
    excerpt: "Campus-wide Wi-Fi, computer labs and support for digital learning.",
  },
  {
    img:
      "https://images.unsplash.com/photo-1578973615723-ca166f48f554?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VjdXJpdHklMjBzZXJ2aWNlfGVufDB8fDB8fHww",
    title: "Safety & Security",
    excerpt: "24/7 campus safety, emergency systems and awareness programs.",
  },
  {
    img:
      "Medical center, counselling services and wellness programs for students.",
    title: "Health & Wellness",
    excerpt: "Medical center, counselling services and wellness programs for students.",
  },
];

const categories = [
  "Dining On Campus",
  "Athletics",
  "Arts & Culture",
  "IT & Learning Labs",
  "Safety & Security",
  "Health & Wellness",
];

export default function UniversityLife() {
  return (
    <div className="w-full text-gray-800 bg-white">
      {/* HERO with breadcrumb */}
      <section
        className="relative min-h-[56vh] bg-cover bg-center"
        style={{ backgroundImage: `url('${TOP_IMAGE}')` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <nav className="text-sm text-white/90 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:underline">
              
            </Link>
            <FaChevronRight className="text-xs" />
            <span></span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            University Life
          </h1>
          <p className="text-sm md:text-lg text-white/90 max-w-3xl mb-6">
            A vibrant campus culture designed to support academic success, personal growth,
            and lifelong connections.
          </p>

          <div className="flex gap-3">
            <a
              href="#explore"
              className="inline-block bg-white text-[#153152] px-5 py-3 rounded-md font-semibold shadow"
            >
              Explore Campus
            </a>
            <a
              href="#contact"
              className="inline-block border border-white/30 text-white px-5 py-3 rounded-md font-semibold"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="explore" className="py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#153152] mb-3">
            Life Beyond the Classroom
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academics meet engagement through clubs, events, sports, and student-focused services.
          </p>
        </div>
      </section>

      {/* Feature flip cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {featureItems.map((f) => (
              <div key={f.title} className="group [perspective:1000px]">
                <div
                  className="relative h-[260px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                >
                  {/* front */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden shadow-md bg-white"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="h-[150px]">
                      <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex items-center justify-center h-[110px]">
                      <h3 className="text-center text-[#153152] font-semibold">{f.title}</h3>
                    </div>
                  </div>

                  {/* back */}
                  <div
                    className="absolute inset-0 rounded-xl p-5 shadow-md flex items-center justify-center text-white"
                    style={{
                      background: "linear-gradient(180deg,#153152,#25507a)",
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <p className="text-sm text-center leading-relaxed">{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-6">
            {contentCards.map((c) => (
              <article
                key={c.title}
                className="flex flex-col md:flex-row bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="md:w-56 w-full h-48 md:h-auto flex-shrink-0">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-[#153152] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{c.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-[#153152] font-semibold">
                    Read More <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            ))}

            {/* Callout */}
            <div className="border rounded-xl p-6 bg-gradient-to-r from-white to-white/90">
              <h4 className="text-xl font-semibold text-[#153152] mb-2">Student Engagement</h4>
              <p className="text-gray-600">
                Join student clubs, participate in volunteer projects, and attend regular campus events to build your network.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="border rounded-xl p-6">
              <h5 className="text-lg font-semibold text-[#153152] mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-600">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a href="#" className="flex items-center justify-between hover:text-[#153152]">
                      <span>{cat}</span>
                      <FaChevronRight className="text-xs text-gray-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl p-6 bg-[#153152] text-white text-center">
              <h5 className="text-lg font-semibold mb-2">Visit Us</h5>
              <p className="text-sm text-white/90 mb-4">Book a campus tour or contact admissions.</p>
              <a href="#contact" className="inline-block bg-white text-[#153152] px-5 py-2 rounded-md font-semibold">
                Book Tour
              </a>
            </div>

            <div className="border rounded-xl p-6">
              <h5 className="text-lg font-semibold text-[#153152] mb-3">Contact</h5>
              <p className="text-sm text-gray-600 mb-4">
                Admissions Office<br /> <strong>Phone:</strong> +91 9351946070
              </p>
              <a href="mailto:info@queenster.edu" className="inline-block bg-[#153152] text-white px-4 py-2 rounded-md font-semibold">
                Email Admissions
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="py-12 bg-gradient-to-r from-[#0f2a4a] to-[#153152] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Ready to explore campus?</h3>
            <p className="text-sm text-white/90">Schedule a tour or request more information from admissions.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="bg-white text-[#153152] px-5 py-3 rounded-md font-semibold">
              Book a Tour
            </a>
            <a href="#" className="border border-white/30 px-5 py-3 rounded-md">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
