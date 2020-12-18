process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [],
      domains: [
        'avatars0.githubusercontent.com', 
        'grass-graph.moshimo.works',
        'lh4.googleusercontent.com',
        'github.com'
      ],
      path: '/_next/image',
      loader: 'default',
  },
};