/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => {
    return [
      {
        source: '/ptbr',
        destination: '/',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
