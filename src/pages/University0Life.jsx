import React from 'react';

const UniversityLife = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/university-life-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center">
          Queenster University Life 
        </h1>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Campus Life */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Campus Life</h2>
          <p className="text-gray-600 leading-relaxed">
            world class facilities. Experience the vibrant campus life at our university. From modern facilities to diverse communities, our campus offers an enriching environment for personal and academic growth.
          </p>
        </section>

        {/* Student Activities */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student Activities</h2>
          <p className="text-gray-600 leading-relaxed">
            
          </p>
        </section>

        {/* Clubs & Organizations */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Clubs & Organizations</h2>
          <p className="text-gray-600 leading-relaxed">
            Discover numerous clubs and organizations catering to various interests. Whether you're passionate about arts, sciences, or community service, there's a place for you.
          </p>
        </section>

        {/* Sports & Recreation */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sports & Recreation</h2>
          <p className="text-gray-600 leading-relaxed">
            Stay active and healthy with our comprehensive sports and recreation programs. From intramural leagues to fitness centers, we support your athletic pursuits.
          </p>
        </section>
      </div>
    </div>
  );
};

export default UniversityLife;
