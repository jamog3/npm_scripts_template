module.exports = {
  src: 'src/images/_sprites/*.png', // これらの画像を1個にまとめる。
  destImage: 'src/images/sprites.png', // 生成される画像
  destCSS: 'src/stylesheets/common/_sprites.scss', // 生成されるCSS
  algorithm: 'binary-tree', // 並び方
  padding: 2,
  cssTemplate: 'config/spritesmith.scss.template.mustache',
};
