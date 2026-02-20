export default function PortfolioMasonry() {
  const projects = [
    { id: 1, title: "Research Project A", image: "https://dummyimage.com/400x300/1e3a8a/ffffff&text=Project+A", height: "h-64" },
    { id: 2, title: "Research Project B", image: "https://dummyimage.com/400x400/1e3a8a/ffffff&text=Project+B", height: "h-80" },
    { id: 3, title: "Research Project C", image: "https://dummyimage.com/400x350/1e3a8a/ffffff&text=Project+C", height: "h-72" },
    { id: 4, title: "Research Project D", image: "https://dummyimage.com/400x300/1e3a8a/ffffff&text=Project+D", height: "h-64" },
    { id: 5, title: "Research Project E", image: "https://dummyimage.com/400x450/1e3a8a/ffffff&text=Project+E", height: "h-96" },
    { id: 6, title: "Research Project F", image: "https://dummyimage.com/400x320/1e3a8a/ffffff&text=Project+F", height: "h-68" },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Portfolio Masonry</h1>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="break-inside-avoid bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className={`w-full ${project.height} object-cover`} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">Description of the research project and its impact.</p>
                  <button className="text-green-600 font-semibold hover:text-green-700">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
