import { FaUniversity, FaGraduationCap, FaBook, FaGlobe } from "react-icons/fa";

export default function Highlights() {
  const data = [
    { icon: <FaUniversity />, title: "Campus Life" },
    { icon: <FaGraduationCap />, title: "Graduation" },
    { icon: <FaBook />, title: "Programs" },
    { icon: <FaGlobe />, title: "Global Reach" },
  ];

  return (
    <section className="bg-[#1f3a63] py-14">
      <div className="container grid md:grid-cols-4 gap-8 text-white text-center">
        {data.map((item, i) => (
          <div key={i}>
            <div className="text-4xl text-yellow-400 mb-3">{item.icon}</div>
            <h3 className="font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
