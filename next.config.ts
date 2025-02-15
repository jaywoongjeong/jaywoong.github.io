import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '', // 이전에 '/jaywoong.github.io'로 되어있었을 수 있음
    images: {
        unoptimized: true
    }
}

export default nextConfig