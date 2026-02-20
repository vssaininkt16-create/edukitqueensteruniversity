import Link from "next/link";

const news1 = "/assets/news-1.mp4"; // (not used, keep if needed later)
const news2 = "/assets/news-2.jpg";
const news3 = "/assets/news-3.jpg";

const NewsUpdates = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Student Orientation",
      date: "15",
      month: "Oct",
      category: "Admission",
      summary:
        "Get ready for an exciting start to your university journey! Join us for the new student orientation.",
      media: news2,
      type: "image",
    },
    {
      id: 2,
      title: "Annual Research Symposium",
      date: "28",
      month: "Sep",
      category: "Academics",
      summary:
        "Showcasing groundbreaking research from our talented students and faculty.",
      media: news2,
      type: "image",
    },
    {
      id: 3,
      title: "Homecoming Celebration",
      date: "10",
      month: "Aug",
      category: "Campus Life",
      summary:
        "Reconnect with old friends and make new memories at our annual homecoming event.",
      media: news3,
      type: "image",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            News & Updates
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Stay informed about the latest happenings at Queenster University.
          </p>
        </div>

        {/* NEWS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              {/* IMAGE FIXED SIZE */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={item.media}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* DATE BADGE */}
                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-800 text-center rounded-md px-3 py-2 shadow-md">
                  <span className="block text-2xl font-bold">
                    {item.date}
                  </span>
                  <span className="block text-xs font-semibold uppercase">
                    {item.month}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2 uppercase font-semibold">
                  {item.category}
                </p>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.summary}
                </p>

                <Link
                  href="/blog"
                  className="inline-block font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;