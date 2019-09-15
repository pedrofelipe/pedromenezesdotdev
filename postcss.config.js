const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')(),
    require('postcss-hexrgba'),
    postcssPresetEnv({
      browsers: [
        'defaults',
        'IE 11',
        'iOS >= 8',
      ],
      stage: 1,
    }),
  ],
};
