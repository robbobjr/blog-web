/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => {
    return [
      {
        source: '/',
        destination: '/ptbr',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
