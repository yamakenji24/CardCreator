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
      'avatars.githubusercontent.com', 
      'avatars0.githubusercontent.com', 
      'avatars1.githubusercontent.com', 
      'avatars2.githubusercontent.com', 
      'avatars3.githubusercontent.com', 
      'avatars4.githubusercontent.com', 
      'grass-graph.moshimo.works',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
      'github.com'
    ],
  }
};
