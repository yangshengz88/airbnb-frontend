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
        hostname: '34.200.218.185',
        port:  '1337',
        pathname: '/**'
      }
    ]

  }
};

export default nextConfig;
