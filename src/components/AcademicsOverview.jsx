export default function AcademicsOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1f3a63] mb-3">
            Academics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our undergraduate and graduate programs designed for global careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {["Undergraduate", "Graduate", "Professional"].map((t) => (
            <div key={t} className="border p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#1f3a63] mb-3">{t}</h3>
              <p className="text-gray-600 mb-6">
                Industry-aligned curriculum with strong academic foundations.
              </p>
              <button className="text-[#1f3a63] font-semibold">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
