/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img1.wsimg.com',
      
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
      
      },
      {
        protocol: 'https',
        hostname: 'rslyhvvrmyezryvlmpva.supabase.co',
      
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-lga3-2.xx.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com'
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'dhjhkxawhe8q4.cloudfront.net'
      },
      {
        protocol: 'https',
        hostname: '1000logos.net'
      },
    ],
  },
};

export default nextConfig;