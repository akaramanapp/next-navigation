module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://next-navigation-five.vercel.app/:path*',
      },
    ]
  },
}
