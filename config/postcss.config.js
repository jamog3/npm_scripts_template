module.exports = {
  plugins: [
    // require("postcss-import")({
    //   plugins: [require("stylelint")],
    // }),
    require("postcss-import"),
    require("stylelint"),
    require("postcss-normalize"),
    // require("postcss-webfont")({
    //   publishPath: config.publicContentBase,
    //   stylesheetPath: config.webfontCSSPath,
    //   outputPath: path.resolve(config.publicAssetsRoot, "fonts"),
    // }),
    // require("postcss-preset-env")({
    //   autoprefixer: {
    //     grid: "autoplace",
    //     flexbox: "no-2009",
    //   },
    //   stage: 1,
    //   importFrom: [path.resolve(config.srcStylesRoot, "_media.css")],
    // }),
    require("postcss-sort-media-queries")({ sort: "mobile-first" }),
    require("autoprefixer")({ grid: true }),
    // require("cssnano")({
    //   configFile: path.resolve(config.configPostcssRoot, "cssnano.config.js"),
    // }),
    require("postcss-reporter")({
      clearReportedMessages: true,
      throwError: true,
    }),
  ],
};
