import Head from 'next/head';
import '../src/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  const websiteData = pageProps?.websiteData || {};

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600&family=Montserrat:wght@400;500;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {websiteData?.website?.title && <title>{websiteData.website.title}</title>}
      </Head>
      <Navbar websiteData={websiteData} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer websiteData={websiteData} />
    </>
  );
}
