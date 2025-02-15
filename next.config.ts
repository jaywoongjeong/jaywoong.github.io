import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
}

export default nextConfig