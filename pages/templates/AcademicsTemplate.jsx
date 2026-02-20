import HeroGlass from "../../src/components/blosks/HeroGlass";

const API_HOST = "https://schooltheme1.institute.org.in";

/* -------------------------
  Utilities
--------------------------*/
function stripHtml(html = "") {
  return String(html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function safeUrl(v = "") {
  const s = String(v || "").trim();
  if (!s) return "";
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  return `${API_HOST}${s.startsWith("/") ? "" : "/"}${s}`;
}

function isVideoUrl(url = "") {
  const u = String(url || "").toLowerCase();
  return (
    u.endsWith(".mp4") ||
    u.endsWith(".webm") ||
    u.endsWith(".mov") ||
    u.includes(".m3u8")
  );
}

/* -------------------------
  Media Component
--------------------------*/
function Media({ src }) {
  const url = safeUrl(src);
  if (!url) return null;

  if (isVideoUrl(url)) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-sm">
        <video src={url} controls playsInline className="h-full w-full" />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
      <img
        src={url}
        alt="media"
        className="h-full w-full object-cover"
        onError={(e) => (e.currentTarget.style.display = "none")}
        loading="lazy"
      />
    </div>
  );
}

/* -------------------------
  Academics Video Hero
  (Video background / Image fallback)
--------------------------*/
function AcademicsVideoHero({ hero = {}, pageTitle }) {
  const title = pageTitle || hero?.title || hero?.heading || "Academics";
  const subtitle = stripHtml(
    hero?.subtitle || hero?.sub_title || hero?.tagline || "ACADEMICS"
  );

  const desc =
    stripHtml(hero?.description || hero?.content || hero?.short_description) ||
    "Explore our academic programs and discover a world of learning, innovation, and excellence.";

  // backend se hero media
  const heroMediaRaw =
    hero?.video ||
    hero?.hero_video ||
    hero?.media ||
    hero?.background ||
    hero?.bg ||
    hero?.banner ||
    hero?.image ||
    "";

  const heroMedia = safeUrl(heroMediaRaw);

  const btnText = stripHtml(hero?.button_text || hero?.btn_text || "Read More →");

  const isVideo = isVideoUrl(heroMedia);

  return (
    <section className="relative w-full min-h-[560px] overflow-hidden">
      {/* video/image background */}
      <div className="absolute inset-0 z-0">
        {heroMedia ? (
          isVideo ? (
            <video
              src={heroMedia}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-[1.03]"
            />
          ) : (
            <img
              src={heroMedia}
              alt="Academics Hero"
              className="w-full h-full object-cover scale-[1.03]"
              loading="lazy"
            />
          )
        ) : (
          <div className="w-full h-full bg-slate-900" />
        )}

        {/* overlays */}
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-y-0 left-0 w-[45%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.72), rgba(0,0,0,0.28), rgba(0,0,0,0))",
          }}
        />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* left */}
        <div className="text-white">
          <div className="text-[14px] tracking-[2px] opacity-90 mb-2">
            {subtitle}
          </div>
          <h1 className="text-[44px] md:text-[60px] font-black leading-[1.05]">
            {title}
          </h1>
          <div className="mt-5 w-24 h-[5px] rounded-full bg-orange-500" />
        </div>

        {/* right glass */}
        <div className="flex lg:justify-end">
          <div className="w-full max-w-[560px] p-7 md:p-9 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-[10px] shadow-[0_22px_60px_rgba(0,0,0,0.32)]">
            <p className="text-white/90 leading-[1.75] text-[15px] md:text-[16px]">
              {desc}
            </p>

            <button
              type="button"
              className="mt-7 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-white font-extrabold text-[15px] hover:-translate-y-[1px] transition"
              onClick={() =>
                document
                  .getElementById("page-content")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------
  Section Card (same as DefaultTemplate)
--------------------------*/
function SectionCard({ heading, subHeading, content, media, index = 0 }) {
  const hasText = Boolean(stripHtml(content || ""));
  const hasMedia = Boolean(media);
  const reverse = index % 2 === 1;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="p-7 md:p-10">
          <div className="max-w-3xl">
            {heading ? (
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                {heading}
              </h2>
            ) : null}

            {subHeading ? (
              <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
                {subHeading}
              </p>
            ) : null}

            <div className="mt-6 h-[3px] w-16 rounded-full bg-orange-500" />
          </div>

          {(hasMedia || hasText) && (
            <div
              className={`mt-10 grid grid-cols-1 gap-8 md:gap-10 ${
                hasMedia ? "md:grid-cols-2" : ""
              } ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {hasMedia ? (
                <div className="min-h-[220px]">
                  <Media src={media} />
                </div>
              ) : null}

              {hasText ? (
                <div className="prose prose-slate max-w-none">
                  <div
                    className="text-slate-700 leading-relaxed text-[15px] md:text-[16px]"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------
  Academics Template (FINAL)
--------------------------*/
export default function AcademicsTemplate({ pageData, blocks }) {
  const resolvedBlocks =
    blocks ||
    pageData?.blocks ||
    pageData?.page_blocks ||
    pageData?.data?.blocks ||
    {};

  const hero =
    resolvedBlocks?.HERO_CONTENT ||
    resolvedBlocks?.HERO ||
    resolvedBlocks?.BANNER ||
    {};

  const entries = Object.entries(resolvedBlocks || {}).filter(([key, val]) => {
    return val && key !== "HERO_CONTENT" && key !== "HERO" && key !== "BANNER";
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO with VIDEO */}
      <AcademicsVideoHero
        hero={hero}
        pageTitle={pageData?.title || pageData?.page_title || "Academics"}
      />

      {/* BACKEND SECTIONS */}
      <div id="page-content">
        {entries.length ? (
          <div className="pb-12">
            {entries.map(([key, block], idx) => {
              const heading = stripHtml(block?.heading || block?.title || key);
              const subHeading = stripHtml(block?.subHeading || "");
              const content = block?.content || "";
              const media = block?.media || block?.image || block?.video || "";

              return (
                <SectionCard
                  key={key}
                  index={idx}
                  heading={heading}
                  subHeading={subHeading}
                  content={content}
                  media={media}
                />
              );
            })}
          </div>
        ) : (
          <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">
                No sections found
              </h2>
              <p className="mt-2 text-slate-600">
                Backend blocks empty hain ya API response me blocks missing hain.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
