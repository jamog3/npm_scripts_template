import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['src/javascripts/*.ts'],
  output: {
    dir: '.temp/assets/',
    format: 'umd',
    entryFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: [
    multiInput(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    resolve(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          moduleResolution: 'node',
        },
      },
    }),
  ],
};
