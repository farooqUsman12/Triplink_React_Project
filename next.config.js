/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['loremflickr.com', 'picsum.photos', 'eyedel.s3.amazonaws.com'],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
            }
        ];
    },
}

module.exports = nextConfig

