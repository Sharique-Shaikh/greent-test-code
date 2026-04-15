module.exports = {
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  distDir: 'build',
  reactStrictMode: true,

  // Build setup for static export
  output: 'export', 
  images: {
    unoptimized: true,     // Static exports can't "process" images on the fly
  },
  // // ADD THIS LINE:
  // basePath: '/new', 

  // // AND THIS LINE (usually same as basePath):
  // assetPrefix: '/new',
};
