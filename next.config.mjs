/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  experimental: {
    // keep other experimental flags here, but NOT typedRoutes
  },
  reactStrictMode: true,
};
export default nextConfig;
