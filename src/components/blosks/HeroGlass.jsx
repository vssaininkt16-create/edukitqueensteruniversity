import React, { useEffect, useRef, useMemo } from "react";

const API_HOST = "https://schooltheme1.institute.org.in";

/* ---------------- helpers ---------------- */
const stripHtml = (html = "") => {
  return String(html || "").replace(/<[^>]*>/g, "").trim();
};

const safeUrl = (url = "") => {
  const cleanUrl = String(url || "").trim();
  if (!cleanUrl) return "";
  if (cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://")) return cleanUrl;
  if (cleanUrl.startsWith("assets/")) return `/${cleanUrl}`;
  if (cleanUrl.startsWith("/assets/")) return cleanUrl;
  if (cleanUrl.startsWith("/uploads/") || cleanUrl.startsWith("/media/")) return `${API_HOST}${cleanUrl}`;
  if (cleanUrl.startsWith("uploads/") || cleanUrl.startsWith("media/")) return `${API_HOST}/${cleanUrl}`;
  if (cleanUrl.startsWith("/")) return cleanUrl;
  return `/${cleanUrl}`;
};

const isVideoUrl = (url = "") => {
  const u = String(url || "").toLowerCase();
  if (!u) return false;
  if (u.includes("pexels.com/download/video")) return true;
  return [".mp4", ".webm", ".mov", ".m3u8"].some((ext) => u.includes(ext));
};

export default function HeroGlass({ hero = {}, pageTitle = "" }) {
  const videoRef = useRef(null);

  const content = useMemo(() => {
    const title = stripHtml(hero?.title || hero?.heading || pageTitle || "");
    const subtitle = stripHtml(hero?.subtitle || hero?.subTitle || "");
    const description = hero?.description || hero?.content || "";

    const mediaRaw =
      hero?.media ||
      hero?.mediaUrl ||
      hero?.video ||
      hero?.videoUrl ||
      hero?.backgroundVideo ||
      "";

    const imageRaw =
      hero?.backgroundImage ||
      hero?.bannerImage ||
      hero?.heroImage ||
      hero?.image?.url ||
      hero?.image ||
      "";

    const buttons = Array.isArray(hero?.buttons) ? hero.buttons : [];

    return { title, subtitle, description, mediaRaw, imageRaw, buttons };
  }, [hero, pageTitle]);

  const { title, subtitle, description, mediaRaw, imageRaw, buttons } = content;

  const resolvedMediaUrl = safeUrl(mediaRaw);
  const resolvedImageUrl = safeUrl(imageRaw);
  const showVideo = !!mediaRaw && isVideoUrl(mediaRaw);

  useEffect(() => {
    if (!showVideo || !videoRef.current) return;
    const video = videoRef.current;
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [showVideo, resolvedMediaUrl]);

  if (!title && !resolvedMediaUrl && !resolvedImageUrl && !description) {
    return null;
  }

  return (
    <header className="relative overflow-hidden min-h-[85vh] md:min-h-[95vh] flex items-center justify-center">

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            ref={videoRef}
            src={resolvedMediaUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            aria-hidden="true"
            onError={(e) => console.warn("Hero video error:", resolvedMediaUrl, e)}
          />
        ) : resolvedMediaUrl ? (
          <img
            src={resolvedMediaUrl}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : resolvedImageUrl ? (
          <img
            src={resolvedImageUrl}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#071428] via-[#0e2a4a] to-[#071428]" />
        )}
      </div>

      {/* ── SINGLE DARK OVERLAY ── */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── CENTERED CONTENT ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 py-20 text-center">

        {/* Subtitle / Tag line */}
        {subtitle && (
          <p className="text-orange-400 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-4">
            {subtitle}
          </p>
        )}

        {/* Main Heading */}
        {title && (
          <h1 className="text-white font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl drop-shadow-2xl">
            {title}
          </h1>
        )}

        {/* Orange underline */}
        <div className="mx-auto mt-6 w-24 h-1 bg-orange-500 rounded-full" />

        {/* Description */}
        {description && (
          <div
            className="mt-8 text-white/85 text-base md:text-xl leading-relaxed max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {buttons.map((b, i) => (
              <a
                key={i}
                href={b?.link ? safeUrl(b.link) : "#"}
                className={
                  i === 0
                    ? "inline-flex items-center justify-center px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg transition-all duration-200 hover:scale-[1.02]"
                    : "inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#071428] transition-all duration-200"
                }
              >
                {stripHtml(b?.title || "Explore")}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
