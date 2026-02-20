import React, { useState } from 'react';

const WhyChooseQueenster = () => {
  const [activeTab, setActiveTab] = useState('Benefits');

  const tabs = [
    { id: 'Benefits', label: 'Benefits' },
    { id: 'Self Development', label: 'Self Development' },
    { id: 'Spirituality', label: 'Spirituality' },
    { id: 'Alumni', label: 'Alumni' },
  ];

  const tabContent = {
    Benefits: {
      heading: 'Why Choose Queenster?',
      description: 'Queenster  for its commitment to academic excellence, innovative teaching methods, and a supportive learning environment. Our dedicated faculty, state-of-the-art facilities, and comprehensive student services ensure that every student receives a world-class education tailored to their needs.',
    },
    'Self Development': {
      heading: 'Personal Growth at Queenster',
      description: 'Queenster University emphasizes holistic development, offering numerous opportunities for self-improvement through leadership programs, workshops, and extracurricular activities that build character and skills beyond the classroom.',
    },
    Spirituality: {
      heading: 'Spiritual Wellness',
      description: 'At Queenster, we recognize the importance of spiritual well-being. Our campus provides inclusive spaces for reflection, meditation, and interfaith activities, fostering a balanced and ethical community.',
    },
    Alumni: {
      heading: 'Proud Alumni Network',
      description: 'Queenster alumni are distinguished leaders in various fields, contributing significantly to society. Our graduates benefit from lifelong connections and career support through our extensive alumni network.',
    },
  };

  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-start mb-12 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 text-xl font-semibold transition-all duration-300 ease-in-out relative rounded-t-md ${
                activeTab === tab.id
                  ? 'text-[#1f3a63] bg-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#1f3a63]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img src="https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Why Choose Queenster" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-5xl font-serif font-extrabold text-[#1f3a63] mb-8">
              {tabContent[activeTab].heading}
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              {tabContent[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseQueenster;
