import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    // basePath를 제거하거나 '/'로 설정
    images: {
        unoptimized: true
    }
}

export default nextConfig