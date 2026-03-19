/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Tell Next.js to treat these as server-only packages — never bundle for the browser
  serverExternalPackages: ["mongoose", "mongodb"],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "schooltheme1.institute.org.in" },
      { protocol: "https", hostname: "r1.edkt.net" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
