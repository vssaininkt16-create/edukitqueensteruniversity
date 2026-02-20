import React from 'react';
import { programsData } from '../data/programsData';

const Programs = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Explore Our Programs</h2>
          <p className="text-lg text-gray-600 mt-2">Find your passion and purpose with our diverse range of programs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.slice(0, 4).map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                <a
                  href={program.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
