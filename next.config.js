/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "experimental-edge",
  },
  images: {
    domains: ["static-cdn.jtvnw.net", "vod-secure.twitch.tv"],
  },
};

const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()(nextConfig);
