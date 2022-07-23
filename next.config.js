const nextSafe = require("next-safe");

console.log(process.env.NODE_ENV);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  headers: () => {
    return [
      {
        source: "/:path*",
        headers: [
          ...nextSafe({
            isDev: process.env.NODE_ENV !== "production",
            contentSecurityPolicy: {
              "script-src": [
                "'self'",
                "'sha256-fDVtD703YIdPFRhb6ZJE/SvcwyA7gZRWfRRM6K6r9EA='"
              ]
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
