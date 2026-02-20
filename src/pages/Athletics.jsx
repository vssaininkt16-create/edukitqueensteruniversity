const Athletics = () => {
  return (
    <div className="w-full bg-white text-gray-700">

      {/* ================= HERO (VIDEO) ================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/admission-hero.jpg" // fallback image
        >
          <source src="https://www.pexels.com/download/video/7945406/" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-0/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            Athletics
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Inspiring excellence, teamwork, and leadership through world-class
            athletic programs.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f3a63] mb-6">
          Athletics at Queenster University
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Queenster University Athletics provides students with the opportunity
          to compete, grow, and succeed both on and off the field. Our programs
          focus on discipline, performance, sportsmanship, and academic balance.
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
<div
  className="relative p-8 rounded-xl shadow bg-cover bg-center text-white"
  style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1664109999481-92084fb559d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)" }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

  {/* content */}
  <div className="relative z-10 text-center">
    <h4 className="text-sm uppercase tracking-wide mb-2">Training</h4>

    <h3 className="text-2xl font-semibold mb-4">
      Professional Training
    </h3>

    <p className="text-gray-200">
      Certified coaches and structured programs help athletes reach peak
      physical and mental performance.
    </p>
  </div>
</div>


          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1664301427534-28b6a53a9c4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Facilities"
              className="w-full h-56 object-cover rounded mb-6"
            />
            <h3 className="text-xl font-bold text-[#1f3a63] mb-3">
              Modern Facilities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our campus includes stadiums, gyms, tracks, and fitness centers
              equipped with modern technology.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition text-center">
            <img
              src="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXRobGV0aWN8ZW58MHx8MHx8fDA%3D"
              alt="Competitions"
              className="w-full h-56 object-cover rounded mb-6"
            />
            <h3 className="text-xl font-bold text-[#1f3a63] mb-3">
              Competitive Events
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Students participate in inter-college, state, and national-level
              sports competitions.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FACILITIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#1f3a63] mb-5">
            World-Class Athletic Facilities
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our athletics infrastructure is designed to support training,
            recovery, and competition. From open fields to indoor courts,
            Queenster offers an environment where athletes thrive.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Students benefit from safe, well-maintained, and professionally
            managed sports facilities.
          </p>
        </div>

        <div
          className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D')" }}
        ></div>
      </section>

      {/* ================= STATS ================= */}
    <section
  className="relative py-24 bg-fixed bg-center bg-cover"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
>
  <div className="absolute inset-0 bg-"></div>

  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center text-white">
    <div>
      <h3 className="text-5xl font-serif font-bold">20+</h3>
      <p className="mt-2">Sports Programs</p>
    </div>
    <div>
      <h3 className="text-5xl font-serif font-bold">50+</h3>
      <p className="mt-2">Professional Coaches</p>
    </div>
    <div>
      <h3 className="text-5xl font-serif font-bold">1000+</h3>
      <p className="mt-2">Student Athletes</p>
    </div>
    <div>
      <h3 className="text-5xl font-serif font-bold">100+</h3>
      <p className="mt-2">Annual Competitions</p>
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f3a63] mb-5">
          Be a Part of Queenster Athletics
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Join a community that values discipline, teamwork, leadership,
          and excellence in sports.
        </p>
        <a
          href="#"
          className="inline-block bg-[#1f3a63] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#162d4f] transition"
        >
          Explore Athletics Programs
        </a>
      </section>

    </div>
  );
};

export default Athletics;
