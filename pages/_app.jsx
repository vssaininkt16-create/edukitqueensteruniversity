import Head from 'next/head';
import { useRouter } from 'next/router';
import '../src/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Pages that manage their own top spacing (hero goes full-bleed behind navbar)
const FULL_BLEED_PAGES = ['/', '/academics', '/admissions', '/courses', '/athletics', '/university-life', '/dashboard', '/login', '/register'];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const websiteData = pageProps?.websiteData || {};
  const isFullBleed = FULL_BLEED_PAGES.includes(router.pathname) || router.pathname.startsWith('/[');

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@400;500;600;700&family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {websiteData?.website?.title && <title>{websiteData.website.title}</title>}
      </Head>
      <Navbar websiteData={websiteData} />
      <main style={isFullBleed ? {} : { paddingTop: '5rem' }}>
        <Component {...pageProps} />
      </main>
      <Footer websiteData={websiteData} />
    </>
  );
}
