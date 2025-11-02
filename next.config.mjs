// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,       // don't fail build on ESLint
  },
  typescript: {
    ignoreBuildErrors: true,        // don't fail build on TS types
  },
  experimental: {
    typedRoutes: false,             // avoids strict route typing surprises
  },
}

export default nextConfig
