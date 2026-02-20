const mockCourses = [
  {
    code: "CS101",
    title: "Introduction to Computer Science",
    department: "Computer Science",
    campus: "Main Campus",
    level: "Undergraduate",
    instructor: "Dr. John Doe",
    semester: "Fall",
    credit: "3",
    method: "In-Person",
  },
  {
    code: "MGMT201",
    title: "Principles of Management",
    department: "Business",
    campus: "City Campus",
    level: "Undergraduate",
    instructor: "Prof. Jane Smith",
    semester: "Spring",
    credit: "3",
    method: "Online",
  },
  {
    code: "ENG301",
    title: "Advanced English Literature",
    department: "English",
    campus: "Main Campus",
    level: "Postgraduate",
    instructor: "Dr. Emily Johnson",
    semester: "Fall",
    credit: "4",
    method: "Hybrid",
  },
];

const CourseSearch = () => {
  return (
    <div className="bg-[#f7f6f3] min-h-screen">
      
      {/* HERO */}
      <section className="bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <p className="uppercase tracking-widest text-amber-400 text-sm mb-4">
            Academic Programs
          </p>
          <h1 className="font-serif text-5xl leading-tight max-w-4xl">
            Discover Courses That Define Academic Excellence
          </h1>
        </div>
      </section>

      {/* SEARCH + RESULTS */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20">

          {/* FILTER PANEL */}
          <aside className="bg-white border-l-4 border-amber-400 p-10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] h-fit sticky top-24">
            <h2 className="font-serif text-2xl mb-10">
              Refine Your Search
            </h2>

            <div className="space-y-6 text-sm">
              <input
                placeholder="Keyword"
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black"
              />

              <input
                placeholder="Course Code"
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black"
              />

              {[
                "Department",
                "Campus",
                "Level",
                "Instructor",
                "Semester",
                "Credit",
              ].map((item) => (
                <select
                  key={item}
                  className="w-full border-b border-gray-300 py-3 bg-transparent text-gray-600 focus:outline-none focus:border-black"
                >
                  <option>{item}</option>
                </select>
              ))}

              <button className="w-full mt-8 border border-black py-4 font-medium tracking-wide hover:bg-black hover:text-white transition">
                Search Courses
              </button>
            </div>
          </aside>

          {/* COURSE RESULTS */}
          <div className="space-y-16">
            {mockCourses.map((course, index) => (
              <article
                key={index}
                className="bg-white p-14 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.3)]"
              >
                <p className="uppercase tracking-widest text-xs text-amber-500 mb-3">
                  {course.department}
                </p>

                <h3 className="font-serif text-3xl mb-6">
                  {course.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-y-4 text-sm text-gray-700">
                  <p><strong>Code:</strong> {course.code}</p>
                  <p><strong>Campus:</strong> {course.campus}</p>
                  <p><strong>Level:</strong> {course.level}</p>
                  <p><strong>Instructor:</strong> {course.instructor}</p>
                  <p><strong>Semester:</strong> {course.semester}</p>
                  <p><strong>Credits:</strong> {course.credit}</p>
                  <p><strong>Method:</strong> {course.method}</p>
                </div>

                <div className="mt-10">
                  <button className="border border-black px-8 py-3 tracking-wide hover:bg-black hover:text-white transition">
                    View Course Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC EXCELLENCE */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-amber-500 text-sm mb-4">
            Academic Excellence
          </p>
          <h2 className="font-serif text-4xl mb-6">
            Tradition, Innovation, and Global Impact
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our programs blend rigorous academics with real-world relevance,
            preparing students for leadership in a global society.
          </p>

          <div className="grid md:grid-cols-3 gap-16 mt-24 text-left">
            <div>
              <h3 className="font-serif text-2xl mb-3">World-Class Faculty</h3>
              <p className="text-gray-600">
                Learn from scholars and professionals recognized worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-3">Global Curriculum</h3>
              <p className="text-gray-600">
                Programs aligned with international academic standards.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-3">Career Success</h3>
              <p className="text-gray-600">
                Strong placement outcomes and alumni networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0f172a] text-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 text-center">
          <div>
            <h3 className="font-serif text-5xl mb-2">150+</h3>
            <p className="uppercase tracking-widest text-sm text-gray-300">
              Programs
            </p>
          </div>
          <div>
            <h3 className="font-serif text-5xl mb-2">30K+</h3>
            <p className="uppercase tracking-widest text-sm text-gray-300">
              Students
            </p>
          </div>
          <div>
            <h3 className="font-serif text-5xl mb-2">120+</h3>
            <p className="uppercase tracking-widest text-sm text-gray-300">
              Partnerships
            </p>
          </div>
          <div>
            <h3 className="font-serif text-5xl mb-2">95%</h3>
            <p className="uppercase tracking-widest text-sm text-gray-300">
              Placement Rate
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-6">
            Begin Your Academic Journey
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Join a university committed to excellence, leadership, and innovation.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-black text-white px-12 py-4 tracking-wide hover:opacity-90">
              Apply Now
            </button>
            <button className="border border-black px-12 py-4 tracking-wide hover:bg-black hover:text-white transition">
              Request Information
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseSearch;
