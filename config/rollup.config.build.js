import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: 'src/javascripts/common.js',
  output: {
    file: 'build/assets/javascripts/common.js',
    format: 'iife',
    sourcemap: false
  },
  plugins: [
    babel(babelrc()),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    uglify({
      output: {
        // /*! で始まる License Comment を残す
        comments: /^!/
      }
    })
  ]
};
