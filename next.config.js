const nextSafe = require("next-safe");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  headers: () => {
    return [
      {
        source: "/:path*",
        headers: [
          ...nextSafe({
            isDev: process.env.NODE_ENV !== "production",
            contentSecurityPolicy: {
              "script-src": ["'self'", "'sha256-fDVtD703YIdPFRhb6ZJE/SvcwyA7gZRWfRRM6K6r9EA='"],
              "connect-src": ["'self'", "https://api.emailjs.com"]
            }
          }),
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
