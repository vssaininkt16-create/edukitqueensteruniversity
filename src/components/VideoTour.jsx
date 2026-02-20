import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const videoBg = "/assets/Videotour.mp4";

export default function VideoTour() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BACKGROUND VIDEO SECTION */}
      <section className="relative w-full h-[70vh] max-h-[800px] overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src={videoBg} type="https://pixabay.com/videos/grindelwald-switzerland-nature-318885/" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <button
            onClick={() => setOpen(true)}
            className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl flex items-center justify-center mb-10 transition-all duration-500 hover:scale-110 hover:shadow-yellow-400/50 group"
          >
            <FaPlay className="ml-1 text-4xl text-white group-hover:text-gray-100" />
          </button>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
            Campus Tour
          </h2>

          <p className="max-w-3xl text-lg md:text-xl opacity-95 leading-relaxed drop-shadow-md">
            Explore our vibrant campus and discover the facilities that make
            Queenster a top choice for students.
          </p>
        </div>
      </section>

      {/* MODAL VIDEO */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-4xl hover:text-gray-300"
            >
              &times;
            </button>

            <video
              className="w-full max-h-[75vh] object-contain"
              src={videoBg}
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </>
  );
}
