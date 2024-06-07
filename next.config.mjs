/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'opjyyoygcyztphallnjo.supabase.co',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
