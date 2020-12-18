module.exports = {
  exportPathMap: async () => {
    return {
      '/': {
        page: '/'
      }
    }
  },
  env: {
    GITHUB_CLIENT: process.env.GITHUB_CLIENT,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_CLIENT: process.env.GOOGLE_CLIENT,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  },
  images: {
    domains: [
      'avatars0.githubusercontent.com', 
      'grass-graph.moshimo.works',
      'lh4.googleusercontent.com',
      'github.com'
    ],
  }
};
