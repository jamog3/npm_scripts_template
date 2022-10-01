module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-import'),
    require('postcss-rem'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: 'autoplace',
      },
      stage: 1,
    }),
    require('postcss-sort-media-queries')({ sort: 'mobile-first' }),
    process.env.NODE_ENV === 'production' &&
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
