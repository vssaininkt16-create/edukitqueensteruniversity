import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import Footer from "../components/Footer";



/* --------- CONFIG --------- */
const API_URL =
  "https://r1.edkt.net/api/s/dynamic-page/new-home-page?contentBlock=Object";

const API_HEADERS = {
  apihost: "https://schooltheme1.institute.org.in",
};

const REVALIDATE_SECONDS = 60;

/* ---------- HELPERS ---------- */
const resolveBlocks = (data) =>
  data?.data?.contentBlock ||
  data?.data?.blocks ||
  data?.contentBlock ||
  data?.blocks ||
  {};

const resolveHero = (blocks) =>
  blocks?.HERO_CONTENT || blocks?.HERO || blocks?.BANNER || null;

/* ------- DATA FETCH --------- */
export async function getStaticProps() {
  try {
    const res = await fetch(API_URL, { headers: API_HEADERS });

    if (!res.ok) {
      return {
        props: { status: res.status, data: null },
        revalidate: REVALIDATE_SECONDS,
      };
    }

    const json = await res.json().catch(() => null);

    if (!json) {
      return {
        props: { status: 500, data: null },
        revalidate: REVALIDATE_SECONDS,
      };
    }

    return {
      props: { status: 200, data: json },
      revalidate: REVALIDATE_SECONDS,
    };
  } catch {
    return {
      props: { status: 500, data: null },
      revalidate: REVALIDATE_SECONDS,
    };
  }
}

/* -------- PAGE -------- */
export default function Home({ status, data }) {
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-white">
        <div className="max-w-md w-full rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
          Homepage API data unavailable. Status: <b>{status}</b>
        </div>
      </div>
    );
  }

  const blocks = resolveBlocks(data);
  const hero = resolveHero(blocks);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar blocks={blocks} />
      <Hero hero={hero} />
      <Sections blocks={blocks} />
      <Footer />
    </div>
  );
}
