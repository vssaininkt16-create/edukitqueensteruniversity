import React from "react";
import Link from "next/link";
import HeroGlass from "../../src/components/blosks/HeroGlass";

/* ---------- helpers ---------- */
function asString(v, fallback = "") {
  if (v === null || v === undefined) return fallback;
  const s = String(v).trim();
  return s.length ? s : fallback;
}

function toArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [];
}

function mediaUrl(v) {
  if (!v) return "";
  if (typeof v === "string") return v;
  if (v?.url) return v.url;
  if (v?.src) return v.src;
  if (Array.isArray(v) && v[0]) return mediaUrl(v[0]);
  if (Array.isArray(v?.media) && v.media[0]) return mediaUrl(v.media[0]);
  return "";
}

export default function AdmissionTemplate({ pageData, blocks, contentBlock }) {
  const source = blocks ?? contentBlock ?? {};

  // ✅ IMPORTANT: handle backend typos too
  const hero =
    source.ADMISSION_HERO ||
    source.HERO_CONTENT ||
    source.HERO_CONTENTE || // backend typo
    source.BANNER ||
    null;

  const programContent = source.PROGRAM_CONTENT || {};
  const curriculum = toArray(source.CURRICULUM);
  const outcomes = toArray(source.CAREER_OUTCOMES);
  const faculty = toArray(source.FACULTY || source.FACULTIY); // backend typo
  const programLinks = toArray(source.PROGRAM_LINKS);

  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO */}
      {hero ? (
        <HeroGlass hero={hero} pageTitle={pageData?.title} />
      ) : (
        <header className="py-10 px-6 bg-white border-b">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold text-slate-900">
              {pageData?.title || "Admissions"}
            </h1>
            <p className="mt-3 text-slate-600">
              {asString(pageData?.description, "")}
            </p>
          </div>
        </header>
      )}

      {/* BODY */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* MAIN CONTENT */}
        <section className="lg:col-span-8 space-y-14">
          {/* PROGRAM OVERVIEW */}
          <section>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-[#1f3a63] mb-4">
                  {asString(programContent?.title, "Program Overview")}
                </h2>

                {programContent?.descriptionHtml ? (
                  <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: String(programContent.descriptionHtml || ""),
                    }}
                  />
                ) : (
                  <>
                    <p className="text-gray-600 mb-4">
                      {asString(
                        programContent?.description,
                        "Program overview content will be displayed here."
                      )}
                    </p>
                  </>
                )}
              </div>

              {/* QUICK FACTS */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">
                  {asString(programContent?.quickFactsTitle, "Quick Facts")}
                </h3>

                <ul className="text-sm space-y-2 text-gray-700">
                  {(toArray(programContent?.quickFacts) || []).length ? (
                    toArray(programContent.quickFacts).map((x, i) => (
                      <li key={i}>
                        <strong>{asString(x?.label, "Info")}:</strong>{" "}
                        {asString(x?.value, "-")}
                      </li>
                    ))
                  ) : (
                    <>
                      <li>
                        <strong>Duration:</strong>{" "}
                        {asString(programContent?.duration, "—")}
                      </li>
                      <li>
                        <strong>Total Credits:</strong>{" "}
                        {asString(programContent?.credits, "—")}
                      </li>
                      <li>
                        <strong>Mode:</strong>{" "}
                        {asString(programContent?.mode, "—")}
                      </li>
                      <li>
                        <strong>Campus:</strong>{" "}
                        {asString(programContent?.campus, "—")}
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* CURRICULUM */}
          <section id="curriculum">
            <h3 className="text-3xl font-bold text-[#1f3a63] mb-6">
              Curriculum
            </h3>

            <div className="overflow-x-auto rounded-2xl shadow-sm">
              <table className="w-full text-sm bg-white">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="px-6 py-4">Course Code</th>
                    <th className="px-6 py-4">Course Title</th>
                    <th className="px-6 py-4">Credits</th>
                  </tr>
                </thead>

                <tbody>
                  {curriculum.length ? (
                    curriculum.map((c, idx) => (
                      <tr key={c?.code || idx} className="border-t">
                        <td className="px-6 py-4 font-medium">
                          {asString(c?.code, "-")}
                        </td>
                        <td className="px-6 py-4">
                          {asString(c?.title, "-")}
                        </td>
                        <td className="px-6 py-4">
                          {asString(c?.credits, "-")}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-t">
                      <td className="px-6 py-4" colSpan={3}>
                        No curriculum data from backend.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* OUTCOMES */}
          <section id="careers">
            <h3 className="text-3xl font-bold text-[#1f3a63] mb-4">
              Career Outcomes
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {outcomes.length ? (
                outcomes.map((o, i) => <li key={i}>{asString(o?.text || o, "")}</li>)
              ) : (
                <li>No career outcomes data from backend.</li>
              )}
            </ul>
          </section>

          {/* FACULTY */}
          <section id="faculty">
            <h3 className="text-3xl font-bold text-[#1f3a63] mb-6">
              Faculty
            </h3>

            <div className="grid sm:grid-cols-3 gap-8">
              {faculty.length ? (
                faculty.map((f, idx) => (
                  <div
                    key={f?.name || idx}
                    className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={mediaUrl(f?.img || f?.image || f?.photo)}
                      alt={asString(f?.name, "Faculty")}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(asString(f?.name, "Faculty")) +
                          "&background=1f3a63&color=fff";
                      }}
                      className="mx-auto w-28 h-28 rounded-full object-cover mb-4 ring-2 ring-gray-200"
                    />
                    <div className="font-semibold">{asString(f?.name, "")}</div>
                    <div className="text-sm text-gray-600">
                      {asString(f?.role, "")}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No faculty data from backend.</p>
              )}
            </div>
          </section>
        </section>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
            <h4 className="text-lg font-semibold text-[#1f3a63] mb-4">
              Program Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#curriculum" className="hover:underline">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:underline">
                  Career Outcomes
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:underline">
                  Faculty
                </a>
              </li>

              {/* optional backend links */}
              {programLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={asString(l?.href || l?.link || "#")}
                    className="hover:underline"
                  >
                    {asString(l?.text || l?.title || "Link")}
                  </a>
                </li>
              ))}
            </ul>

            <Link
              href={asString(programContent?.applyLink, "/apply")}
              className="block mt-6 text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold"
            >
              {asString(programContent?.applyText, "Apply Now")}
            </Link>
          </div>
        </aside>
      </main>

      {/* remove this debug in prod */}
      {process.env.NODE_ENV === "development" && source && (
        <div className="max-w-7xl mx-auto px-6 pb-10 text-xs text-slate-500">
          <strong>Backend block keys:</strong>{" "}
          {Object.keys(source || {}).join(", ") || "none"}
        </div>
      )}
    </div>
  );
}