// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "schooltheme1.institute.org.in" },
      { protocol: "https", hostname: "r1.edkt.net" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      // add other domains your CMS uses
    ],
  },
  // optional: assetPrefix if using CDN
  reactStrictMode: true,
};
