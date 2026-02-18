/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Activer la revalidation ISR par défaut
  experimental: {
    // Optimisations Next.js 14
  },
};

module.exports = nextConfig;
