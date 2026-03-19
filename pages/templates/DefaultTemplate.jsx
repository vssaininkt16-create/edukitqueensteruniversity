// pages/templates/DefaultTemplate.jsx
// FIXED: 3 bugs corrected
// Bug 1: isHomePage was ALWAYS true (urlKey.includes("") is always true)
// Bug 2: HeroGlass was showing pageData.title ("New home page") instead of HERO_CONTENT.heading
// Bug 3: "0" rendering from {array.length && <Component/>} pattern

import React, { useMemo, useState } from "react";
import HeroGlass from "../../src/components/blosks/HeroGlass";

const API_HOST = "https://schooltheme1.institute.org.in";

/* ---------------------- Helpers ---------------------- */
const stripHtml = (html = "") =>
  String(html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const safeUrl = (url = "") => {
  const clean = String(url || "").trim();
  if (!clean) return "";
  if (clean.startsWith("http://") || clean.startsWith("https://")) return clean;
  if (clean.startsWith("assets/")) return `/${clean}`;
  if (clean.startsWith("/assets/")) return clean;
  if (clean.startsWith("/uploads/") || clean.startsWith("/media/")) {
    return `${API_HOST}${clean}`;
  }
  if (clean.startsWith("uploads/") || clean.startsWith("media/")) {
    return `${API_HOST}/${clean}`;
  }
  if (clean.startsWith("/")) return clean;
  return `/${clean}`;
};

const isVideoUrl = (url = "") => {
  const u = String(url || "").toLowerCase();
  if (!u) return false;
  if (u.includes("pexels.com/download/video")) return true;
  return [".mp4", ".webm", ".mov", ".m3u8"].some((ext) => u.includes(ext));
};

const normalizeBlocks = (blocks) => {
  if (!blocks) return {};
  if (Array.isArray(blocks)) {
    return blocks.reduce((acc, block, idx) => {
      const key = block?.key || block?.id || `block_${idx}`;
      acc[key] = block;
      return acc;
    }, {});
  }
  return typeof blocks === "object" ? blocks : {};
};

const getArray = (v) => {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  if (Array.isArray(v?.data)) return v.data;
  if (Array.isArray(v?.items)) return v.items;
  if (Array.isArray(v?.list)) return v.list;
  if (Array.isArray(v?.rows)) return v.rows;
  return [];
};

const mediaUrl = (v) => {
  if (!v) return "";
  if (typeof v === "string") return v;
  if (v?.url) return v.url;
  if (v?.src) return v.src;
  if (Array.isArray(v) && v[0]) return mediaUrl(v[0]);
  if (Array.isArray(v?.media) && v.media[0]) return mediaUrl(v.media[0]);
  return "";
};

const firstButtonText = (block) =>
  stripHtml(
    block?.buttons?.[0]?.title || block?.buttons?.[0]?.text || "Read More →"
  );

const firstButtonLink = (block) => block?.buttons?.[0]?.link || block?.link || "";

/* ---------------------- Media component ---------------------- */
const Media = React.memo(({ src }) => {
  const url = safeUrl(src);
  if (!url) return null;

  if (isVideoUrl(url)) {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-sm">
        <video src={url} controls playsInline className="w-full" />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-sm">
      <img
        src={url}
        alt="Media"
        className="w-full h-auto object-cover"
        loading="lazy"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
  );
});
Media.displayName = "Media";

/* ---------------------- ABOUT ---------------------- */
const AboutUniversityHeroSection = React.memo(({ block = {} }) => {
  const title = stripHtml(block?.heading || "About Our University");
  const subtitle = "QUEENSTER UNIVERSITY";
  const html = String(block?.content || "");
  const media = mediaUrl(block?.media || "");
  const btnTitle = stripHtml(block?.buttons?.[0]?.title || "Read More →");
  const btnLink = block?.buttons?.[0]?.link || block?.link || "#";

  return (
    <section className="col-span-full">
      <div className="relative overflow-hidden rounded-[32px] min-h-[420px] md:min-h-[520px]">
        {media ? (
          <img
            src={safeUrl(media)}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#071428] via-[#0e2a4a] to-[#071428]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

        <div className="relative z-10 h-full p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white/80 tracking-[0.25em] uppercase text-xs md:text-sm font-semibold">
              {subtitle}
            </p>
            <h2 className="mt-4 text-white font-extrabold leading-[1.05] text-4xl md:text-6xl">
              {title}
            </h2>
            <div className="mt-6 w-24 h-1 bg-orange-500 rounded-full" />
          </div>

          <div className="lg:justify-self-end w-full max-w-2xl">
            <div className="rounded-3xl bg-white/[0.10] border border-white/25 backdrop-blur-2xl p-7 md:p-10 shadow-2xl">
              {html ? (
                <div
                  className="text-white/90 text-base md:text-lg leading-relaxed max-w-none"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ) : null}

              <a
                href={btnLink ? safeUrl(btnLink) : "#"}
                className="inline-flex mt-8 items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-8 py-4 font-bold text-white transition"
              >
                {btnTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
AboutUniversityHeroSection.displayName = "AboutUniversityHeroSection";

/* ---------------------- ACADEMIC EXCELLENCE ---------------------- */
const AcademicExcellenceSection = React.memo(({ block = {} }) => {
  const title = stripHtml(block?.heading || "Academic Excellence");
  const subtitleHtml = String(block?.subHeading || block?.content || "");
  const items = getArray(block?.advanceData?.data || block?.data || []);

  if (!items.length) {
    const html = String(block?.content || block?.desci || "");
    return (
      <section className="col-span-full">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
          {subtitleHtml ? (
            <div
              className="mt-3 text-white/70 max-w-3xl leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: subtitleHtml }}
            />
          ) : null}
        </div>
        <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10">
          {html ? (
            <div
              className="text-white/75 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="col-span-full">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
        {subtitleHtml ? (
          <div
            className="mt-3 text-white/70 max-w-3xl leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: subtitleHtml }}
          />
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => {
          const img = mediaUrl(it?.thumb || it?.link || it?.image || "");
          const itemTitle = stripHtml(it?.title || it?.name || "");
          const descHtml = String(it?.desci || it?.description || it?.shortDesc || "");
          const moreLink = it?.more || it?.link || "";

          return (
            <div
              key={it?.id || itemTitle}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col h-full"
            >
              {img ? (
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={safeUrl(img)}
                    alt={itemTitle}
                    className="w-full h-44 object-cover rounded-xl"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
              ) : null}

              <div className="flex-1">
                {itemTitle ? <h3 className="text-lg font-semibold">{itemTitle}</h3> : null}
                {descHtml ? (
                  <div
                    className="mt-3 text-white/70 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: descHtml }}
                  />
                ) : null}
              </div>

              <div className="mt-4">
                <a
                  href={moreLink ? safeUrl(moreLink) : "#"}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400"
                >
                  Read more →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});
AcademicExcellenceSection.displayName = "AcademicExcellenceSection";

/* ---------------------- CAMPUS TOUR ---------------------- */
const CampusTourSection = React.memo(({ block = {} }) => {
  const title = stripHtml(block?.heading || "Campus Tour");
  const sub = stripHtml(block?.content || block?.subHeading || "");
  const media = mediaUrl(block?.media || "");
  const url = safeUrl(media);
  const isVid = isVideoUrl(url);

  const openMedia = () => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full mt-16">
      <div className="relative w-full overflow-hidden min-h-[420px] md:min-h-[560px] bg-black">
        {url ? (
          isVid ? (
            <video
              src={url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            />
          ) : (
            <img
              src={url}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-95"
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#071428] via-[#0e2a4a] to-[#071428]" />
        )}

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <button
            type="button"
            onClick={openMedia}
            className="mb-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center shadow-xl transition"
            aria-label="Play Campus Tour"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          <h2 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight drop-shadow-2xl">
            {title}
          </h2>

          {sub ? (
            <p className="mt-4 max-w-3xl text-white/85 text-base md:text-lg leading-relaxed">
              {sub}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
});
CampusTourSection.displayName = "CampusTourSection";

/* ---------------------- Generic Content Card ---------------------- */
const ContentCard = React.memo(({ block, fallbackTitle }) => {
  const title = stripHtml(block?.heading || block?.title || fallbackTitle);
  const html = String(block?.content || block?.desci || block?.subHeading || "");
  const media = mediaUrl(block?.media || block?.image || block?.thumb || "");
  const btnText = firstButtonText(block);
  const btnLink = firstButtonLink(block);

  // ✅ FIX: Make sure buttons is an array before accessing
  const hasButton =
    Array.isArray(block?.buttons) &&
    block.buttons.length > 0 &&
    block.buttons[0]?.title;

  return (
    <div className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
      {title ? (
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">{title}</h2>
      ) : null}

      {html ? (
        <div
          className="mt-4 text-white/70 leading-relaxed text-base max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : null}

      {media ? (
        <div className="mt-6">
          <Media src={media} />
        </div>
      ) : null}

      {/* ✅ FIX: Use hasButton check instead of btnText to avoid "0" rendering */}
      {hasButton ? (
        <div className="mt-7">
          <a
            href={btnLink ? safeUrl(btnLink) : "#"}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-7 py-3 font-semibold text-white transition-all duration-200 group-hover:shadow-lg group-hover:shadow-orange-500/30"
          >
            {btnText}
          </a>
        </div>
      ) : null}
    </div>
  );
});
ContentCard.displayName = "ContentCard";

/* ---------------------- LIST section ---------------------- */
const ListSection = React.memo(({ block, sectionKey }) => {
  const title = stripHtml(
    block?.heading || block?.advanceData?.categoriesData?.[0]?.title || sectionKey
  );
  const subtitleHtml = String(block?.subHeading || block?.content || "");
  const items = getArray(block?.advanceData?.data);

  // ✅ FIX: Return null explicitly instead of relying on falsy check
  if (!items || items.length === 0) return null;

  return (
    <section className="col-span-full">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
        {subtitleHtml ? (
          <div
            className="mt-3 text-white/70 max-w-3xl leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: subtitleHtml }}
          />
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item) => (
          <ContentCard
            key={item?.id || item?.title}
            block={{
              title: item?.title,
              content: item?.desci,
              media: item?.thumb || item?.link,
              buttons: [{ title: "Read More →", link: item?.more || "" }],
            }}
            fallbackTitle={item?.title}
          />
        ))}
      </div>
    </section>
  );
});
ListSection.displayName = "ListSection";

/* ---------------------- DYNAMIC TABS SECTION ---------------------- */
const DynamicTabsSection = React.memo(({ blocksMap }) => {
  const TAB_KEY_LABELS = {
    WHY_CHOOSE_QUEENSTER: "Benefits",
    SELF_DEVLOPMENT: "Self Development",
    SPIRITUALITY: "Spirituality",
    ALUMNI: "Alumni",
    WHY_QUEENSTER_: "Benefits",
  };

  const preferred = [
    "WHY_CHOOSE_QUEENSTER",
    "WHY_QUEENSTER_",
    "SELF_DEVLOPMENT",
    "SPIRITUALITY",
    "ALUMNI",
  ];

  // Deduplicate keys
  const seen = new Set();
  const availableKeys = preferred.filter((k) => {
    if (seen.has(k)) return false;
    seen.add(k);
    return !!blocksMap?.[k];
  });

  // ✅ FIX: Return null cleanly — no "0" risk
  if (availableKeys.length === 0) return null;

  const [activeKey, setActiveKey] = useState(availableKeys[0]);
  const activeBlock = blocksMap?.[activeKey] || {};

  const title = stripHtml(activeBlock?.heading || activeBlock?.title || "");
  const html = String(activeBlock?.content || activeBlock?.desci || activeBlock?.subHeading || "");
  const media = mediaUrl(activeBlock?.media || activeBlock?.image || activeBlock?.thumb || "");
  const isVideo = isVideoUrl(safeUrl(media));

  const hasButton =
    Array.isArray(activeBlock?.buttons) &&
    activeBlock.buttons.length > 0 &&
    activeBlock.buttons[0]?.title;

  return (
    <section className="col-span-full">
      <div className="mb-8 border-b border-white/10 pb-6">
        <div className="flex gap-8">
          {availableKeys.map((k) => {
            const label =
              TAB_KEY_LABELS[k] ||
              (blocksMap[k]?.heading ? stripHtml(blocksMap[k].heading) : k);
            const isActive = k === activeKey;
            return (
              <button
                key={k}
                onClick={() => setActiveKey(k)}
                className={`relative py-3 text-lg font-semibold transition ${
                  isActive ? "text-[#0B2B55]" : "text-white/70 hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {label}
                {isActive && (
                  <span className="absolute left-0 bottom-[-1px] h-[3px] w-full bg-[#0B2B55]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-sm">
          {media ? (
            isVideo ? (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  src={safeUrl(media)}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <img
                src={safeUrl(media)}
                alt={title || "Media"}
                className="w-full h-[420px] md:h-[480px] object-cover rounded-2xl"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )
          ) : (
            <div className="h-[320px] md:h-[420px] rounded-2xl bg-white/[0.03] border border-white/10" />
          )}

          {!isVideo && media ? (
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-white/90 shadow">
                <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[14px] border-l-[#0B2B55]" />
              </div>
            </div>
          ) : null}
        </div>

        <div>
          {title ? (
            <h2 className="text-4xl font-extrabold text-[#0B2B55] md:text-5xl">{title}</h2>
          ) : null}
          {html ? (
            <p
              className="mt-6 text-lg leading-8 text-white/80"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : null}
          {/* ✅ FIX: Safe button render */}
          {hasButton ? (
            <div className="mt-8">
              <a
                href={safeUrl(activeBlock?.buttons?.[0]?.link || activeBlock?.link || "#")}
                className="inline-flex items-center gap-3 rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-3 font-semibold text-white"
              >
                {stripHtml(activeBlock?.buttons?.[0]?.title || "Read More →")}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
});
DynamicTabsSection.displayName = "DynamicTabsSection";

/* ---------------------- FACULTY SECTION ---------------------- */
const FacultySection = React.memo(({ block }) => {
  const items = getArray(block?.advanceData?.data);
  if (!items.length) return null;

  return (
    <section className="col-span-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => {
          const img = mediaUrl(item?.link || "");
          const name = stripHtml(item?.title || "");
          const dept = stripHtml(item?.desci || item?.description || "");
          return (
            <div key={item?.id || name} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20">
                <img
                  src={safeUrl(img)}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-white/70">{dept}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
});
FacultySection.displayName = "FacultySection";

/* ---------------------- CURRICULUM SECTION ---------------------- */
const CurriculumSection = React.memo(({ block }) => {
  const title = stripHtml(block?.heading || "Curriculum");
  const html = String(block?.content || "");
  return (
    <section className="col-span-full">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      </div>
      <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10">
        <style>{`
          .curriculum-table table { border-collapse: collapse; width: 100%; }
          .curriculum-table th, .curriculum-table td { border: 1px solid rgba(255,255,255,0.2); padding: 8px; color: white; background: rgba(255,255,255,0.05); }
        `}</style>
        <div
          className="curriculum-table text-white/75 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
});
CurriculumSection.displayName = "CurriculumSection";

/* ---------------------- IMAGE CARDS SECTION ---------------------- */
const ImageCardsSection = React.memo(({ block = {} }) => {
  const items = getArray(block?.advanceData?.data || block?.data || []);

  if (!items.length) return null;

  return (
    <section className="col-span-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => {
          const img = mediaUrl(item?.link || "");
          const title = stripHtml(item?.title || "");
          const desc = stripHtml(item?.desci || item?.description || "");

          return (
            <div
              key={item?.id || title}
              className="relative overflow-hidden rounded-2xl min-h-[250px] bg-cover bg-center group cursor-pointer"
              style={{ backgroundImage: `url(${safeUrl(img)})` }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg">{title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/70 p-4">
                <p className="text-white text-center">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});
ImageCardsSection.displayName = "ImageCardsSection";

/* ---------------------- DESIGN COMPONENTS ---------------------- */
const DesignD01 = React.memo(({ block = {} }) => {
  const title = stripHtml(block?.heading || "");
  const html = String(block?.content || "");
  const btnText = firstButtonText(block);
  const btnLink = firstButtonLink(block);
  const hasButton = Array.isArray(block?.buttons) && block.buttons.length > 0 && block.buttons[0]?.title;

  return (
    <section className="col-span-full bg-[#0e2a4a] py-16 px-8 rounded-2xl text-center">
      {title ? <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2> : null}
      {html ? <div className="mt-6 text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} /> : null}
      {hasButton ? (
        <a href={btnLink ? safeUrl(btnLink) : "#"} className="inline-flex mt-8 items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-8 py-4 font-bold text-white transition">
          {btnText}
        </a>
      ) : null}
    </section>
  );
});
DesignD01.displayName = "DesignD01";

const DesignD03 = React.memo(({ block = {} }) => {
  const title = stripHtml(block?.heading || "");
  const html = String(block?.content || "");
  const media = mediaUrl(block?.media || "");
  const btnText = firstButtonText(block);
  const btnLink = firstButtonLink(block);
  const hasButton = Array.isArray(block?.buttons) && block.buttons.length > 0 && block.buttons[0]?.title;

  return (
    <section className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        {title ? <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2> : null}
        {html ? <div className="mt-6 text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} /> : null}
        {hasButton ? (
          <a href={btnLink ? safeUrl(btnLink) : "#"} className="inline-flex mt-8 items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 px-8 py-4 font-bold text-white transition">
            {btnText}
          </a>
        ) : null}
      </div>
      {media ? (
        <div>
          <Media src={media} />
        </div>
      ) : null}
    </section>
  );
});
DesignD03.displayName = "DesignD03";

const DesignD08 = React.memo(({ block = {} }) => {
  const title = stripHtml(block?.heading || "");
  const html = String(block?.content || "");
  const media = mediaUrl(block?.media || "");

  return (
    <section className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {media ? (
        <div>
          <Media src={media} />
        </div>
      ) : null}
      <div>
        {title ? <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2> : null}
        {html ? <div className="mt-6 text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} /> : null}
      </div>
    </section>
  );
});
DesignD08.displayName = "DesignD08";

const DesignD10 = React.memo(({ block = {} }) => {
  const title = stripHtml(block?.heading || "");
  const html = String(block?.content || "");
  const media = mediaUrl(block?.media || "");

  return (
    <section className="col-span-full relative min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
      {media ? (
        <img src={safeUrl(media)} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#071428] via-[#0e2a4a] to-[#071428]" />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        {title ? <h2 className="text-3xl md:text-5xl font-extrabold text-white">{title}</h2> : null}
        {html ? <div className="mt-6 text-white/80 leading-relaxed max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} /> : null}
      </div>
    </section>
  );
});
DesignD10.displayName = "DesignD10";

/* ---------------------- DefaultTemplate (export) ---------------------- */
export default function DefaultTemplate({ pageData = {}, contentBlock = {} }) {
  const USER_HOME_VIDEO = "/assets/new-home-hero.mp4";

  const resolvedBlocks = useMemo(() => normalizeBlocks(contentBlock || {}), [contentBlock]);

  const pageTitle = stripHtml(pageData?.title || "");
  const pageCategory = stripHtml(pageData?.category || pageData?.tag || "");
  const pageSubtitle = pageData?.subtitle ? stripHtml(pageData.subtitle) : null;

  const heroFromBackend =
    resolvedBlocks?.HERO_CONTENT ||
    resolvedBlocks?.HERO_CONTENTE ||
    pageData?.hero ||
    {};

  const backendMedia = mediaUrl(heroFromBackend?.media || heroFromBackend?.mediaUrl || "");

  // ✅ FIX 1: HERO heading from HERO_CONTENT.heading, NOT pageData.title
  const heroHeading = stripHtml(heroFromBackend?.heading || pageTitle || "");

  const urlKey = String(pageData?.url || "").toLowerCase();

  // ✅ FIX 2: isHomePage was ALWAYS true because urlKey.includes("") is always true
  // Now using proper checks only
  const isHomePage =
    urlKey === "/" ||
    urlKey === "" ||
    urlKey === "home" ||
    urlKey === "/home" ||
    urlKey.includes("home-page") ||
    urlKey.includes("homepage") ||
    urlKey.includes("new-home");

  const hero = {
    ...heroFromBackend,
    heading: heroHeading,
    media: heroFromBackend?.advanceData?.data?.slides?.length > 0
      ? (heroFromBackend?.media || "")
      : (backendMedia || (isHomePage ? USER_HOME_VIDEO : heroFromBackend?.media || "")),
  };

  const isAthletics = /athletics/i.test(pageTitle) || urlKey.includes("athletics");
  const isAdmissions = /admissions/i.test(pageTitle) || urlKey.includes("admissions-page") || urlKey.includes("admissions");
  const isUniversityLife = urlKey.includes("university-life");

  const HOME_ORDER = [
    "ABOUT_OUR_UNIVERSITY",
    "ACADEMIC_EXCELLENCE",
    "WHY_QUEENSTER_",
    "WHY_CHOOSE_QUEENSTER",
    "CAMPUS_TOURE_",
    "SPIRITUALITY",
    "SELF_DEVLOPMENT",
    "ADMISSIONS",
    "ALUMNI",
  ];

  const ATHLETICS_ORDER = [
    "ATHLETICS_AT",
    "WORLD_CLASS_",
    "COMPETITIVE_EVENTS",
    "TRAINING",
    "BE_A_PARTH_CONTENT",
  ];

  const ADMISSIONS_ORDER = [
    "PROGRAM_CONTENT",
    "FACULITY",
    "CAREER_OUTCOMES",
    "CURRICULUM",
    "PROGRAM_LINKS"
  ];

  const UNIVERSITY_LIFE_ORDER = [
    "LIFE_CONTENT",
    "BLOCKS_UI",
    "ARTS_CONTENT",
    "ATHLETICS_CONTENT",
    "DINING_ON_CAMPUS",
    "INFORMATION_TECHNOLOGY",
    "SAFETY_&_SECURITY",
    "HEALTH_&_WELLNESS",
  ];

  const ORDER = isUniversityLife ? UNIVERSITY_LIFE_ORDER : isAdmissions ? ADMISSIONS_ORDER : isAthletics ? ATHLETICS_ORDER : HOME_ORDER;

  const campusBlock = resolvedBlocks?.CAMPUS_TOURE_ || null;

  return (
    <div className="min-h-screen bg-[#071428] text-white">
      <div className="h-6 w-full bg-[#0e2a4a]" aria-hidden="true" />

      {/*  FIX: Pass heroHeading explicitly so HeroGlass shows correct title */}
      <HeroGlass hero={hero} pageTitle={heroHeading} />

      <main className="py-16">
        <div className="max-w-full mx-auto px-12 md:px-12">
          {/* Only show page title header for non-home pages */}
          {!isHomePage ? (
            <header className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="text-orange-400 tracking-widest text-sm uppercase font-medium">
                  {pageCategory}
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-3">
                  {pageTitle}
                </h1>
                {pageSubtitle ? (
                  <p className="mt-4 text-white/70 max-w-2xl leading-relaxed text-lg">
                    {pageSubtitle}
                  </p>
                ) : null}
              </div>
            </header>
          ) : null}

          <div className="mt-12">
            <DynamicTabsSection blocksMap={resolvedBlocks} />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {ORDER.map((key) => {
              const block = resolvedBlocks?.[key];
              if (!block) return null;

              if (String(block?.advanceData?.type || "").toUpperCase() === "LIST") {
                return <ListSection key={key} block={block} sectionKey={key} />;
              }

              if (key === "ABOUT_OUR_UNIVERSITY") {
                return <AboutUniversityHeroSection key={key} block={block} />;
              }

              if (key === "ACADEMIC_EXCELLENCE") {
                return <AcademicExcellenceSection key={key} block={block} />;
              }

              if (key === "CAMPUS_TOURE_") {
                return null;
              }

              if (key === "FACULITY") {
                return <FacultySection key={key} block={block} />;
              }

              if (key === "CURRICULUM") {
                return <CurriculumSection key={key} block={block} />;
              }

              if (key === "BLOCKS_UI") {
                return <ImageCardsSection key={key} block={block} />;
              }

              const design = block?.design || "";
              if (design === "D01") return <DesignD01 key={key} block={block} />;
              if (design === "D03") return <DesignD03 key={key} block={block} />;
              if (design === "D08") return <DesignD08 key={key} block={block} />;
              if (design === "D10") return <DesignD10 key={key} block={block} />;

              return <ContentCard key={key} block={block} fallbackTitle={key} />;
            })}
          </div>
        </div>

        {campusBlock ? <CampusTourSection block={campusBlock} /> : null}
      </main>
    </div>
  );
}
