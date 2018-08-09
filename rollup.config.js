import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: 'src/javascripts/common.js',
  output: {
    file: '.temp/assets/javascripts/common.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    babel(babelrc()),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
}
