/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // appDir: true,
    serverComponentsExternalPackages: ['bcrypt'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
