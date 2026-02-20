/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "r1.edkt.net" },
      { protocol: "https", hostname: "schooltheme1.institute.org.in" },
    ],
  },
};

export default nextConfig;
