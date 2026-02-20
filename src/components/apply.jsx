import React from 'react';

const applyBg = "/admission-hero.jpg";

const Apply = () => {
  return (
    <section 
      className="py-32 bg-cover bg-fixed bg-center relative" 
      style={{ backgroundImage: `url(${applyBg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-6" style={{fontFamily: 'serif'}}>Apply for Admission</h2>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
          Join our vibrant community and start your journey towards a successful future. Our streamlined application process makes it easy to get started.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/admissions"
            className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Apply Now
          </a>
          <a
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Apply;