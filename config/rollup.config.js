import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/javascripts/common.ts',
  output: {
    dir: '.temp/assets/javascripts/',
    format: 'iife',
    entryFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: [
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
