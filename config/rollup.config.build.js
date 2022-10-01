import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: ['src/javascripts/*.ts'],
  output: {
    dir: 'build/assets/',
    format: 'umd',
    entryFileNames: '[name].js',
    sourcemap: false,
    plugins: [terser()],
  },
  plugins: [
    multiInput(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
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
