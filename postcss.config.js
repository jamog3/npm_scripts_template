module.exports = () => ({
  plugins: {
    // ベンダープレフィックス追加
    'autoprefixer': {
      'browsers': [
        'last 4 versions',
        'ie 11',
        'ios 9',
        'android 4.4'
      ],
      cascade: false
    },
    // メディアクエリをまとめる
    'css-mqpacker': {
      sort: true
    }
  }
})
