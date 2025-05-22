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
    // Enable detailed error messages in production
    reactStrictMode: true,
    onError: (error) => {
      console.error('NextJS Error:', error);
    },
    // Log more details in production
    productionBrowserSourceMaps: true,
    // Expose server-side error details in production
    reactProductionProfiling: true,
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
      ],
    },
};

export default nextConfig;