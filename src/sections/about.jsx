const aboutImg = "/assets/why-choose-bg.jpg";

export default function About() {
  return (
    <section className="py-16">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <img src={aboutImg} className="rounded-lg" />

        <div>
          <h2 className="text-3xl font-bold text-[#1f3a63]">
            Why Choose Queenster
          </h2>
          <p className="mt-4 text-gray-600">
            Industry-aligned programs, modern campus, global exposure.
          </p>
        </div>
      </div>
    </section>
  );
}
