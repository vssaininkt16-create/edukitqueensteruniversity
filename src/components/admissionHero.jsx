const universityVideo = "/assets/university.mp4";

export default function AdmissionsHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={universityVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admissions
          </h1>
          <p className="max-w-2xl text-lg text-gray-200">
            Begin your academic journey with Queenster University.
          </p>
        </div>
      </div>
    </section>
  );
}
