import imagemin from 'imagemin-keep-folder';
import imageminWebp from 'imagemin-webp';
// import imageminMozjpeg from 'imagemin-mozjpeg';
// import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';

// src: process.argv[2]
// dist: process.argv[3]

imagemin([`${process.argv[2]}{,!(_*)/**/}*.{png,jpg,gif,svg}`], {
  plugins: [
    imageminWebp({ quality: 80 }),
    // imageminMozjpeg({ quality: 80 }),
    // imageminPngquant({ quality: [0.65, 0.8] }),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    console.log(output);
    return output.replace(/images\//, `../${process.argv[3]}`);
  },
}).then(() => {
  console.log('Images optimized');
});
