import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images:{
    remotePatterns:[
      {
        protocol : "https",
        hostname:"aceternity.com"
      }
    ]
  }
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);