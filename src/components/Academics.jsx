import React from 'react';

const Academics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1f3a63] mb-4">Academic Excellence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive academic programs designed to prepare you for leadership in a global world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1f3a63] mb-4">Undergraduate Programs</h3>
            <p className="text-gray-600 mb-4">
              Choose from a wide range of bachelor's programs in engineering, business, arts, and sciences.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Engineering & Technology</li>
              <li>• Business Administration</li>
              <li>• Computer Science</li>
              <li>• Liberal Arts</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1f3a63] mb-4">Graduate Programs</h3>
            <p className="text-gray-600 mb-4">
              Advance your career with our master's and doctoral programs featuring cutting-edge research.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• MBA Programs</li>
              <li>• M.Tech & M.Sc</li>
              <li>• PhD Research</li>
              <li>• Professional Certifications</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1f3a63] mb-4">Research & Innovation</h3>
            <p className="text-gray-600 mb-4">
              Join our research community working on solutions to global challenges.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Interdisciplinary Labs</li>
              <li>• Industry Partnerships</li>
              <li>• Funded Research Projects</li>
              <li>• Publication Support</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1f3a63] hover:bg-[#162b4a] text-white px-8 py-3 rounded-lg font-semibold transition">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Academics;
