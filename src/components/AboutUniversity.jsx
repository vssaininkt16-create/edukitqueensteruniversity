

const AboutUniversity = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url('/about-university-bg.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0e2a47]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 text-white">

        {/* Left */}
        <div>
          <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
            <span className="border-b-2 border-green-400 w-10"></span>
            About Our University
          </h4>

          <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
            We are one of the largest, most diverse universities with students
            studying across multiple countries worldwide.
          </p>
        </div>
        
        {/* Right */}
        <div className="text-gray-200 leading-relaxed">
          <p className="mb-6">
            Queenster University was established to serve the public benefit and
            is recognized globally. Throughout our history, we have offered
            access to a wide range of academic opportunities.
          </p>

          <p className="mb-8">
            As a leader in higher education, the university continues to
            pioneer innovation, research, and excellence in learning.
          </p>

          <a
            href="#more-info"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-400 transition"
          >
            Read More <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUniversity;
