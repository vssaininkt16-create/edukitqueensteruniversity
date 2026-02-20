const alumni = [
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

const alumniData = [
  {
    year: 2018,
    image: '/assets/graduate.jpg',
    title: 'Bachelor of Science in Computer Science',
    description: 'Graduated with honors, specializing in software engineering.',
  },
  {
    year: 2019,
    image: '/assets/undergraduate.jpg',
    title: 'Master of Business Administration',
    description: 'Focused on strategic management and entrepreneurship.',
  },
  {
    year: 2017,
    image: '/assets/graduate.jpg',
    title: 'Bachelor of Arts in Psychology',
    description: 'Explored human behavior and cognitive processes.',
  },
  {
    year: 2020,
    image: '/assets/undergraduate.jpg',
    title: 'Doctor of Philosophy in Physics',
    description: 'Research in quantum mechanics and theoretical physics.',
  },
  {
    year: 2021,
    image: '/assets/undergraduate.jpg',
    title: 'Bachelor of Fine Arts',
    description: 'Specialized in digital art and multimedia design.',
  },
];

export default function Alumni() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1f3a63] mb-16">
          Our Alumni
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {alumni.map((alum, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={alum.image}
                alt={alum.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#1f3a63] mb-2">
                {alum.name}
              </h3>
              <p className="text-gray-600 mb-2">{alum.major}</p>
              <p className="text-sm text-gray-500">Class of {alum.year}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-[#1f3a63] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm text-gray-500">Class of {item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
