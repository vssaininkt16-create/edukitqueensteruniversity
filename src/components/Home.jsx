import Hero from "./Hero";
import VideoTour from "./VideoTour";
import UniversityLife from "./UniversityLife";
import WhyChooseQueenster from "./WhyChooseQueenster";
import Info from "./Info";
import Academics from "./Academics";
import Admissions from "./Admissions";
import CampusSection from "./CampusSection";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* ABOUT OUR UNIVERSITY (PREMIUM VERSION) */}
      <section
        className="relative w-full min-h-[650px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/0/02/2021_Arizona_State_University%2C_Tempe_Campus%2C_Old_Main.jpg)",
        }}
      >
        {/* STRONG GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152b]/85 via-[#07152b]/55 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE – TITLE */}
            <div className="text-white">
              <p className="text-sm uppercase tracking-widest text-white/80 mb-5">
                Queenster University
              </p>

              <h2 className="font-serif font-extrabold text-5xl md:text-6xl leading-tight drop-shadow-lg">
                About Our
                <br />
                University
              </h2>

              <div className="mt-6 w-24 h-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
            </div>

            {/* RIGHT SIDE – GLASS CARD */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-8 md:p-10 text-white shadow-xl border border-white/10">
              <p className="text-lg leading-relaxed text-white/95 mb-8">
                Queenster University is committed to providing a transformative
                educational experience that empowers students to achieve their
                full potential. With a rich history of academic excellence and
                innovation, we offer a wide range of programs designed to prepare
                graduates for leadership in a dynamic world.
              </p>

              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
              >
                Read More →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <UniversityLife />
      <WhyChooseQueenster />
      <Info />
      <Academics />
      <CampusSection />
      <Admissions />
    </>
  );
}




