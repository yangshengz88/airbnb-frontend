import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'http',
        hostname: 'localhost',
        port:  '8000',
        pathname: '/**'
      }
    ]

  }
};

export default nextConfig;
