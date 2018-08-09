module.exports = {
  src: 'src/images/_sprites/*.png', // これらの画像を1個にまとめる。
  destImage: 'src/images/sprite.png', // 生成される画像
  destCSS: 'src/stylesheets/_partial/_sprite.sass', // 生成されるCSS
  algorithm: 'binary-tree', // 並び方
  padding: 2
};
