import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import DefaultTemplate from "./templates/DefaultTemplate";
import AboutTemplate from "./templates/AboutTemplate";
import AcademicsTemplate from "./templates/AcademicsTemplate";
import AdmissionTemplate from "./templates/AdmissionTemplate";

const REVALIDATE_SECONDS = 60;
const API_HOST = "https://schooltheme1.institute.org.in";
const API_BASE = "https://r1.edkt.net";

/* ---- Helpers ---- */
const asString = (v, fallback = "") =>
  v === null || v === undefined ? fallback : String(v).trim() || fallback;

const sanitizeSlug = (slug) =>
  asString(slug, "home").toLowerCase().replace(/[^a-z0-9-_]/g, "");

const chooseTemplate = (slug = "") => {
  const s = slug.toLowerCase();
  if (s.includes("about")) return AboutTemplate;
  if (s.includes("academic")) return AcademicsTemplate;
  if (s.includes("admission")) return AdmissionTemplate;
  return DefaultTemplate;
};

/* ---- Known Slugs ---- */
const KNOWN_SLUGS = [
  "university-life",
  "academics-page",
  "admissions-page",
  "courses-page",
  "athletics-page",
];

/* ---- getStaticPaths ---- */
export async function getStaticPaths() {
  const paths = KNOWN_SLUGS.map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: "blocking" };
}

/* ---- getStaticProps ---- */
export async function getStaticProps({ params }) {
  const slug = sanitizeSlug(params?.slug);
  if (!slug) return { notFound: true };

  try {
    const res = await fetch(
      `${API_BASE}/api/s/dynamic-page/${slug}?contentBlock=Object`,
      {
        headers: {
          apihost: API_HOST,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) return { notFound: true };

    const raw = await res.json();

    // ✅ Correct path from API response
    const pageData = raw?.data?.pageData || null;
    const contentBlock = raw?.data?.contentBlock || {};

    if (!pageData) return { notFound: true };

    return {
      props: {
        pageData: {
          title: asString(pageData?.title),
          description: asString(pageData?.description),
          metaTags: pageData?.metaTags || {},
        },
        contentBlock,
        slug,
      },
      revalidate: REVALIDATE_SECONDS,
    };
  } catch (error) {
    console.error(`getStaticProps error [${slug}]:`, error);
    return { notFound: true };
  }
}

/* ---- Page Component ---- */
export default function DynamicSlugPage({ pageData, contentBlock, slug, error }) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;
  if (error || !pageData) return <div>Page not found</div>;

  const Template = chooseTemplate(slug);

  return (
    <>
      <Head>
        <title>{pageData.title || "Queenster University"}</title>
        {pageData.description && (
          <meta name="description" content={pageData.description} />
        )}
      </Head>

      {/*Pass contentBlock to template */}
      <Template pageData={pageData} contentBlock={contentBlock} slug={slug} />
    </>
  );
}