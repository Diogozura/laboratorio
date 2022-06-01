/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://easyimobiliario.com.br/',
  },
}

module.exports = nextConfig
