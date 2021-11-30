/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/museasia',
        destination: 'https://youtube.com/playlist?list=PLwLSw1_eDZl2FRizEh6a46FMtDzXRUeXq',
        permanent: false,
        basePath: false
      },
    ]
  },
}
