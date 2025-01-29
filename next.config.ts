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
        hostname: '3.139.80.82',
        port:  '1337',
        pathname: '/**'
      }
    ]

  }
};

export default nextConfig;
