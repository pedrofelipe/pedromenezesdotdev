const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withImages(withCSS({
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  cssModules: true,
}));
