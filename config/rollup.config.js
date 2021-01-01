import alias from '@rollup/plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue';

export default {
  input: ['src/javascripts/*.ts'],
  output: {
    dir: '.temp/assets/',
    format: 'es',
    entryFileNames: '[name].js',
    sourcemap: true,
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
      'process.env.NODE_ENV': JSON.stringify('development'),
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
