/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables React Strict Mode for better debugging
  reactStrictMode: true,
  // If you plan to use images from external sites (like GitHub profile pics), 
  // you'll add their domains here later.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};

export default nextConfig;