import React from 'react';

const alumniData = [
  {
    name: 'John Smith',
    major: 'Computer Science',
    year: 2018,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emily Johnson',
    major: 'Business Administration',
    year: 2019,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Williams',
    major: 'Mechanical Engineering',
    year: 2017,
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
    {
    name: 'Jessica Brown',
    major: 'Graphic Design',
    year: 2020,
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    name: 'Sarah Miller',
    major: 'Psychology',
    year: 2021,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const testimonialsData = [
  {
    name: 'Dr. Anya Sharma',
    title: 'Chief Medical Officer, HealthCorp',
    quote: 'The rigorous academic program and supportive faculty at this university were instrumental in shaping my career in medicine.',
    image: 'https://randomuser.me/api/portraits/women/70.jpg',
  },
  {
    name: 'Ben Carter',
    title: 'Software Engineer, Tech Solutions',
    quote: 'I gained practical skills and a strong foundation in computer science that directly contributed to my success in the tech industry.',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    name: 'Chloe Davis',
    title: 'Award-Winning Journalist',
    quote: 'The communication department fostered my critical thinking and storytelling abilities, leading me to a fulfilling career in journalism.',
    image: 'https://randomuser.me/api/portraits/women/72.jpg',
  },
];

const eventsData = [
  {
    title: 'Annual Alumni Reunion',
    date: 'October 26, 2024',
    location: 'University Campus, Main Hall',
    description: 'Join us for our annual reunion to reconnect with old friends, faculty, and celebrate our shared memories.',
    link: '#',
  },
  {
    title: 'Alumni Networking Mixer',
    date: 'November 15, 2024',
    location: 'Downtown Marriott, Grand Ballroom',
    description: 'An exclusive opportunity to network with fellow alumni and expand your professional connections.',
    link: '#',
  },
  {
    title: 'Guest Lecture Series: Future of AI',
    date: 'December 5, 2024',
    location: 'Online Webinar',
    description: 'A thought-provoking lecture by Dr. Anya Sharma on the advancements and ethical considerations of Artificial Intelligence.',
    link: '#',
  },
];

const Alumni = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-40" style={{ backgroundImage: `url('/about-university-bg.jpg')` }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">Our Alumni</h1>
          <p className="text-lg text-white mt-4">Connecting our past, present, and future.</p>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {alumniData.map((alumnus, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <img src={alumnus.image} alt={alumnus.name} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg" />
                <h3 className="text-2xl font-bold text-[#152e5a]">{alumnus.name}</h3>
                <p className="text-gray-500 mt-2">Department: {alumnus.major}</p>
                <p className="text-[#fec726] font-semibold">Class of {alumnus.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#152e5a] mb-12">Alumni Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-[#fec726]" />
                  <div>
                    <h4 className="text-lg font-bold text-[#152e5a]">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Events Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#152e5a] mb-12">Upcoming Alumni Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {eventsData.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-left hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#152e5a] mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.date} | {event.location}</p>
                <p className="text-gray-700">{event.description}</p>
                <a href={event.link} className="text-[#fec726] hover:underline mt-4 inline-block">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#152e5a] mb-12">Get Involved</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            There are many ways to stay connected and support your alma mater.
            Explore the opportunities below to make a lasting impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#152e5a] mb-4">Mentor Students</h3>
              <p className="text-gray-700 mb-4">Share your experience and guide current students as they navigate their career paths.</p>
              <a href="#" className="text-[#fec726] hover:underline font-semibold">Become a Mentor</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#152e5a] mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-4">Contribute your time and skills to various university initiatives and events.</p>
              <a href="#" className="text-[#fec726] hover:underline font-semibold">Volunteer Opportunities</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#152e5a] mb-4">Give Back</h3>
              <p className="text-gray-700 mb-4">Support scholarships, research, and campus development through your generous donations.</p>
              <a href="#" className="text-[#fec726] hover:underline font-semibold">Make a Donation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;