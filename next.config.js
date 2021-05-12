module.exports = {
  future: {
    webpack5: true
  },
  images: {
    domains: ['www.petlove.com.br']
  },
  publicRuntimeConfig: {
    backendUrl: process.env.HOST || 'http://localhost:3333'
  }
}
