import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '', // 완전히 비워두기
    images: {
        unoptimized: true
    }
}

export default nextConfig