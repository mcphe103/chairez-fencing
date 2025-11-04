/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ NEW: moved out of "experimental"
  typedRoutes: true,

  experimental: {
    // keep other experimental flags here (if any)
    // just REMOVE typedRoutes from inside experimental
  },
  reactStrictMode: true,
};

export default nextConfig;
