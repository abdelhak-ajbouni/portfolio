const { NODE_ENV, IMGIX_PATH } = process.env;
const isDev = NODE_ENV === 'development'

const images = isDev ? {} : {
  loader: 'imgix',
  path: IMGIX_PATH,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images,
}

module.exports = nextConfig
