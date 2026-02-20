import { useRef, useState } from "react";

const CampusSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🔗 PUT YOUR DIRECT VIDEO LINK HERE
  const VIDEO_URL =
    "https://cdn.pixabay.com/video/2021/10/05/90907-629483627_tiny.mp4";

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black">
      
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        controls={isPlaying}
        preload="metadata"
      >
        <source src={VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* OVERLAY (before play) */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/60"></div>
      )}

      {/* CONTENT */}
      {!isPlaying && (
        <div className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
          
          {/* TAP TO PLAY BUTTON */}
          <button
            onClick={handlePlay}
            className="mb-6 w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl hover:scale-110 transition"
          >
            ▶
          </button>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            Campus Tour
          </h2>

          <p className="text-white/90 max-w-2xl">
            Explore Queenster University campus life, facilities and culture.
          </p>
        </div>
      )}
    </section>
  );
};

export default CampusSection;
