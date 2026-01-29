import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'http',
        hostname: 'localhost',
        port:  '8000',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: '52.3.229.163',
        port:  '1337',
        pathname: '/**'
      }
    ]

  }
};

export default nextConfig;
