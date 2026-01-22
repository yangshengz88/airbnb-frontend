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
        hostname: '98.80.141.113',
        port:  '1337',
        pathname: '/**'
      }
    ]

  }
};

export default nextConfig;
