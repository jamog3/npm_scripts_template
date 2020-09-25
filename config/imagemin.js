const imagemin = require("imagemin-keep-folder");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");

// src: process.argv[2]
// dist: process.argv[3]

imagemin(
  [`${process.argv[2]}{,!(_*)/**/}*.{png,jpg,gif,svg}`],
  {
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.65, 0.8] }),
      imageminGifsicle(),
      imageminSvgo(),
    ],
    replaceOutputDir: (output) => {
      console.log(output);
      return output.replace(/images\//, `../${process.argv[3]}`);
    },
  }
).then(() => {
  console.log("Images optimized");
});
