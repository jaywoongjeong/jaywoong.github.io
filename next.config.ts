import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/jaywoong.github.io',  // 저장소 이름과 일치하게 설정
    images: {
        unoptimized: true
    }
}

export default nextConfig