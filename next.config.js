module.exports = {
    images: {
        domains: ["cdn.shopify.com", "images.unsplash.com"],
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/landing',
            permanent: true,
          },
        ]
      },
}