import React from "react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description:
        "Globally recognized programs built on academic rigor, innovation, and modern curriculum.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaBookOpen />,
      title: "Industry-Focused Programs",
      description:
        "Career-ready courses designed with real-world skills, internships, and industry alignment.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Faculty",
      description:
        "Highly qualified professors with strong academic, research, and global exposure.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <FaAward />,
      title: "Scholarships & Support",
      description:
        "Merit-based scholarships and dedicated student support for holistic growth.",
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage: "url('/about-university-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-[#123049] mb-5">
            Why Choose Queenster?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover what makes Queenster University a premier destination for
            academic excellence and global success.
          </p>

          <div className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
        </div>

        {/* CARDS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-8 text-center
                         shadow-md hover:shadow-2xl transition-all duration-500
                         hover:-translate-y-3 border border-white/40"
            >
              {/* ICON */}
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center
                            text-white text-2xl bg-gradient-to-br ${feature.gradient}
                            shadow-lg group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-[#123049] mb-3">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* HOVER ACCENT */}
              <div
                className={`absolute inset-x-0 bottom-0 h-1 rounded-b-2xl
                            bg-gradient-to-r ${feature.gradient}
                            opacity-0 group-hover:opacity-100 transition`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
