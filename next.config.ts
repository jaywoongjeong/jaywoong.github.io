import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/jaywoong.github.io' : '',
    images: {
        unoptimized: true
    },
    typescript: {
        ignoreBuildErrors: false,
    }
}

export default nextConfig