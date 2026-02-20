import { motion } from "framer-motion";
import { FaGraduationCap, FaUserCheck, FaGlobe } from "react-icons/fa";

export default function Info() {
  const cards = [
    {
      icon: <FaGraduationCap className="text-4xl text-yellow-500" />,
      title: "Academic Excellence",
      description: "Queenster University delivers globally recognized programs with modern curriculum, expert faculty, and research-driven learning.",
    },
    {
      icon: <FaUserCheck className="text-4xl text-blue-500" />,
      title: "Admissions",
      description: "Our transparent admissions process supports students at every step, from application to enrollment.",
    },
    {
      icon: <FaGlobe className="text-4xl text-green-500" />,
      title: "Global Campus",
      description: "Experience a vibrant campus environment with world-class facilities, international exposure, and industry connections.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3a63] mb-4">
            Why Choose Queenster?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Queenster University a premier destination for higher education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-12 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl border border-gray-100 hover:border-[#1f3a63]/20 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#1f3a63]/10 transition-colors duration-300">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1f3a63] mb-6 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
