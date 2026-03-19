"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

/* ─── helpers ─── */
const stripHtml = (html = "") => String(html || "").replace(/<[^>]*>/g, "").trim();
const safeUrl = (url = "") => {
  const u = String(url || "").trim();
  if (!u) return "";
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  if (u.startsWith("/")) return u;
  return `/${u}`;
};
const isVideoUrl = (url = "") => {
  const u = String(url || "").toLowerCase();
  return [".mp4", ".webm", ".mov", ".m3u8"].some((ext) => u.includes(ext)) ||
    u.includes("pexels.com/download/video");
};

/* ─── extract slides from HERO_CONTENT block ─── */
function getSlides(hero = {}) {
  const sliderData = hero?.advanceData?.data;
  if (sliderData?.slides && Array.isArray(sliderData.slides) && sliderData.slides.length) {
    return sliderData.slides
      .map((s) => ({ url: s.imgUrl || s.thumbUrl || "", type: s.type || "image" }))
      .filter((s) => s.url);
  }
  const media = hero?.media || hero?.mediaUrl || "";
  if (media) return [{ url: media, type: isVideoUrl(media) ? "video" : "image" }];
  return [];
}

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-6 h-6">
    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-6 h-6">
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HeroGlass({ hero = {}, pageTitle = "" }) {
  const slides = getSlides(hero);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevIdx, setPrevIdx] = useState(null);
  const timerRef = useRef(null);

  const title = stripHtml(hero?.heading || hero?.title || pageTitle || "");
  const description = hero?.content || hero?.description || "";
  const buttons = Array.isArray(hero?.buttons) ? hero.buttons.filter((b) => b?.title) : [];

  const goTo = useCallback(
    (idx) => {
      if (isAnimating || slides.length <= 1) return;
      setPrevIdx(current);
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => { setPrevIdx(null); setIsAnimating(false); }, 700);
    },
    [current, isAnimating, slides.length]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo, slides.length]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo, slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next, slides.length]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  if (!title && slides.length === 0 && !description) return null;

  return (
    <header className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
      {/* SLIDE BACKGROUNDS */}
      <div className="absolute inset-0">
        {slides.length === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#071428] via-[#0d2240] to-[#071428]" />
        )}
        {slides.map((slide, i) => {
          const isActive = i === current;
          const isPrev = i === prevIdx;
          return (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: isActive ? 1 : isPrev ? 0 : 0, zIndex: isActive ? 2 : isPrev ? 1 : 0 }}
            >
              {slide.type === "video" ? (
                <video src={safeUrl(slide.url)} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              ) : (
                <img
                  src={safeUrl(slide.url)}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* GRADIENT OVERLAYS */}
      <div className="absolute inset-0" style={{ zIndex: 3, background: "linear-gradient(to right, rgba(7,20,40,0.88) 0%, rgba(7,20,40,0.6) 55%, rgba(7,20,40,0.25) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{ zIndex: 4, background: "linear-gradient(to top, #071428, transparent)" }} />

      {/* CONTENT */}
      <div className="relative flex items-center" style={{ zIndex: 5, minHeight: "92vh" }}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-14 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-orange-400" />
              <span className="text-orange-400 text-xs font-bold tracking-[0.22em] uppercase">Queenster University</span>
            </div>

            {title && (
              <h1 className="text-white font-black leading-[1.06] drop-shadow-2xl" style={{ fontSize: "clamp(2.1rem, 4.8vw, 3.9rem)" }}>
                {title}
              </h1>
            )}

            <div className="mt-5 flex items-center gap-3">
              <div className="h-1 w-16 bg-orange-500 rounded-full" />
              <div className="h-1 w-5 bg-orange-400/50 rounded-full" />
            </div>

            {description && (
              <div
                className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-xl"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {buttons.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-4">
                {buttons.map((b, i) =>
                  i === 0 ? (
                    <a key={i} href={b?.link ? safeUrl(b.link) : "#"}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-all duration-200 hover:scale-[1.03] shadow-xl"
                      style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                      {stripHtml(b.title)}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  ) : (
                    <a key={i} href={b?.link ? safeUrl(b.link) : "#"}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm border border-white/40 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
                      {stripHtml(b.title)}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SLIDER CONTROLS */}
      {slides.length > 1 && (
        <>
          <button onClick={() => { prev(); resetTimer(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110"
            style={{ zIndex: 6 }} aria-label="Previous slide">
            <ChevronLeft />
          </button>
          <button onClick={() => { next(); resetTimer(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110"
            style={{ zIndex: 6 }} aria-label="Next slide">
            <ChevronRight />
          </button>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2" style={{ zIndex: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => { goTo(i); resetTimer(); }} aria-label={`Slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{ width: i === current ? "2rem" : "0.5rem", height: "0.5rem", background: i === current ? "#f97316" : "rgba(255,255,255,0.4)" }} />
            ))}
          </div>

          <div className="absolute bottom-10 right-6 md:right-14 text-white/40 text-xs font-mono tabular-nums" style={{ zIndex: 6 }}>
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </>
      )}
    </header>
  );
}
