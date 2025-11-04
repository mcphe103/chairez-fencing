/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ new place
  typedRoutes: true,

  // If you had other experimental flags, keep them — but REMOVE typedRoutes from here
  experimental: {
    // ...other experimental flags (not typedRoutes)
  },
  reactStrictMode: true,
};

export default nextConfig;
