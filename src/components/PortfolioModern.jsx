export default function PortfolioModern() {
  const projects = [
    { id: 1, title: "Research Project A", image: "https://dummyimage.com/600x400/1e3a8a/ffffff&text=Project+A", category: "AI & ML" },
    { id: 2, title: "Research Project B", image: "https://dummyimage.com/600x400/1e3a8a/ffffff&text=Project+B", category: "Biotechnology" },
    { id: 3, title: "Research Project C", image: "https://dummyimage.com/600x400/1e3a8a/ffffff&text=Project+C", category: "Physics" },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Portfolio Modern</h1>

          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="lg:w-1/2">
                  <img src={project.image} alt={project.title} className="w-full h-64 lg:h-80 object-cover" />
                </div>
                <div className="lg:w-1/2 p-8">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">
                    Detailed description of the research project, its methodology, findings, and potential impact on the field.
                  </p>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
