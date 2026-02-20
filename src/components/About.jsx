import React from 'react';
import Image from 'next/image';
import { FaTrophy, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaGraduationCap size={24} className="text-[#fec726]" />, text: '240+ Majors' },
    { icon: <FaTrophy size={24} className="text-[#fec726]" />, text: '35+ Awards' },
    { icon: <FaUniversity size={24} className="text-[#fec726]" />, text: '50+ Buildings' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-96">
          <Image src="/assets/about-university-bg.jpg" alt="About Queenster University" fill className="rounded-lg shadow-2xl object-cover" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-[#152e5a] mb-4">About Queenster University</h2>
            <p className="text-gray-600 text-lg">
              Qeenster University, established in 1920, is a globally recognized institution committed to academic excellence and innovation. We provide a transformative education that prepares students to lead and serve in a diverse and changing world.
            </p>
          </div>

          <p className="text-gray-500">
            Our vibrant campus, distinguished faculty, and comprehensive programs create an environment where students can thrive and achieve their full potential. We are proud of our rich history and our commitment to shaping future leaders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
                {stat.icon}
                <span className="font-semibold text-[#152e5a]">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;