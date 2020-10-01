module.exports = {
  plugins: [
    require('postcss-import'),
    require('stylelint'),
    require('postcss-normalize'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: 'autoplace',
      },
      stage: 1,
    }),
    require('postcss-sort-media-queries')({ sort: 'mobile-first' }),
    require('cssnano')({
      autoprefixer: {
        add: false,
      },
      preset: 'advanced',
    }),
    require('postcss-reporter')({
      clearReportedMessages: true,
      throwError: false,
    }),
  ],
};
