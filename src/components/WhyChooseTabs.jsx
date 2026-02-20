import React, { useState } from 'react';

const WhyChooseTabs = () => {
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
      description: 'Queenster University offers numerous benefits to its students, including access to cutting-edge facilities, personalized mentorship, and a vibrant campus life. Our graduates excel in diverse industries, from technology and healthcare to arts and business, demonstrating the transformative power of a Queenster education.',
    },
    'Self Development': {
      heading: 'Self Developement?',
      description: 'Queenster University provides comprehensive self-development opportunities through workshops, leadership programs, and extracurricular activities. Students are encouraged to explore their passions and build essential life skills alongside academic pursuits.',
    },
    Spirituality: {
      heading: 'spiriuality?',
      description: 'Queenster University respects and supports spiritual growth with inclusive spaces for reflection, meditation, and interfaith dialogue. Our community fosters personal well-being and ethical development in a supportive environment.',
    },
    Alumni: {
      heading: 'Alumni?',
      description: 'Queenster University alumni are leaders in their fields, making significant contributions to society and the global community. Our graduates excel in diverse industries, from technology and healthcare to arts and business, demonstrating the transformative power of a Queenster education.',
    },
  };

  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-start mb-8 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-lg font-medium transition-all duration-300 ease-in-out relative ${
                activeTab === tab.id
                  ? 'text-[#1f3a63]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1f3a63]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <h2 className="text-4xl font-serif font-bold text-[#1f3a63] mb-6">
            {tabContent[activeTab].heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {tabContent[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTabs;
