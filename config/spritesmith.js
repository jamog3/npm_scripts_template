module.exports = {
  src: 'src/images/_sprites/*.png', // これらの画像を1個にまとめる。
  destImage: 'src/images/sprites.png', // 生成される画像
  destCSS: 'src/stylesheets/_partial/_sprites.sass', // 生成されるCSS
  algorithm: 'binary-tree', // 並び方
  padding: 2,
  cssTemplate: 'config/spritesmith.sass.template.mustache'
};
