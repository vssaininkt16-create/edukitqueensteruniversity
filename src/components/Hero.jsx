import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const heroVideo = "/assets/4301307-hd_1920_1080_30fps.mp4";

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function Hero() {
  const videoRef = useRef(null);

  //  API states
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  //  video autoplay
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.play?.().catch(() => {});
  }, []);

  //  fetch hero data from API (proxy)
  useEffect(() => {
    let ignore = false;

    const fetchHero = async () => {
      try {
        setLoading(true);

        //  call internal API with page name (no backend change required)
        const res = await fetch("/api/homepage?name=new-home-page");
        const json = await res.json();

        if (!res.ok) {
          console.error("Hero API non-OK:", res.status, json);
          if (!ignore) setHero(null);
          return;
        }

        // ✅ Prefer contentBlock.HERO_CONTENT, fallbacks to common keys
        const contentBlockHero =
          json?.data?.contentBlock?.HERO_CONTENT ||
          json?.data?.HERO_CONTENT ||
          json?.data?.pageData?.HERO_CONTENT ||
          null;

        //  Generic fallback to pageData or root data
        const pageData = json?.data?.pageData || json?.data || {};

        const source = contentBlockHero || pageData;

        //  Normalize to the keys your UI uses
        const normalized = {
          // title: try heading, title, or first-line of content
          title:
            source?.heading ||
            source?.title ||
            (source?.content ? stripHtml(source.content).split("\n")[0] : "") ||
            pageData?.title ||
            null,

          // description: try subHeading, description, or stripped content
          description:
            source?.subHeading ||
            source?.description ||
            (source?.content ? stripHtml(source.content) : "") ||
            pageData?.description ||
            null,

          // buttons: attempt common patterns
          primaryButtonText:
            (source?.buttons && source.buttons[0]?.title) ||
            source?.primaryButtonText ||
            source?.ctaText ||
            null,
          primaryButtonLink:
            (source?.buttons && source.buttons[0]?.link) ||
            source?.primaryButtonLink ||
            source?.ctaLink ||
            null,

          secondaryButtonText:
            (source?.buttons && source.buttons[1]?.title) ||
            source?.secondaryButtonText ||
            null,
          secondaryButtonLink:
            (source?.buttons && source.buttons[1]?.link) ||
            source?.secondaryButtonLink ||
            null,

          // optional image
          image:
            source?.image?.url ||
            source?.banner?.url ||
            source?.imageUrl ||
            source?.media?.url ||
            null,

          // keep raw if needed
          raw: source,
        };

        if (!ignore) setHero(normalized);
      } catch (err) {
        console.log("Hero API Error:", err);
        if (!ignore) setHero(null);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchHero();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-[70vh] md:min-h-[95vh] flex items-start"
      aria-label="Hero"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: "50% 30%" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Optional hero image overlay (if API provides an image) */}
      {hero?.image ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.image})`,
            opacity: 0.35,
            mixBlendMode: "overlay",
          }}
        />
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-8 py-[92px] md:py-[120px]">
        <div className="max-w-2xl text-white">
          <motion.h1
            className="
              font-serif font-extrabold leading-[1.03]
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              mb-4 md:mb-6
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {loading
              ? "Loading..."
              : hero?.title || (
                  <>
                    World Class Education <br /> for Global Leaders
                  </>
                )}
          </motion.h1>

          <motion.p
            className="mt-4 text-sm sm:text-base md:text-xl text-gray-200 leading-relaxed max-w-xl mb-6 md:mb-10"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero?.description ||
              "Queenster University is committed to academic excellence, innovation, and developing future-ready professionals through world-class education."}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              type="button"
              className="bg-[#1f3a63] hover:bg-[#162b49] text-white px-6 py-3 font-semibold rounded-md shadow-lg w-full sm:w-auto transition-all"
              onClick={() => {
                if (hero?.primaryButtonLink)
                  window.location.href = hero.primaryButtonLink;
              }}
            >
              {hero?.primaryButtonText || "Apply to Queenster"}
            </button>

            <button
              type="button"
              className="border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-black rounded-md font-semibold w-full sm:w-auto transition-all"
              onClick={() => {
                if (hero?.secondaryButtonLink)
                  window.location.href = hero.secondaryButtonLink;
              }}
            >
              {hero?.secondaryButtonText || "Campus Tour"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
