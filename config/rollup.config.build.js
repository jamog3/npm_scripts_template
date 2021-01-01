import alias from '@rollup/plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue';
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
    alias({
      entries: {
        vue: 'node_modules/vue/dist/vue.esm-bundler.js',
      },
    }),
    multiInput(),
    vuePlugin({
      target: 'browser',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
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
