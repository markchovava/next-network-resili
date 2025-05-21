/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{ 
        ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    experimental: {
      serverActions: {
        bodySizeLimit: '300mb',
      },
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '127.0.0.1',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: '143.110.255.30',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'admin.networkresilience.co.zw',
          pathname: '/**',
        },
      ],
      domains: [
        '127.0.0.1', 
        'localhost',
        'admin.networkresilience.co.zw',
      ], // Add your domains here
    },
};

export default nextConfig;
