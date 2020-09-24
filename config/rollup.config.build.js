import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/javascripts/common.ts",
  output: {
    dir: "build/assets/javascripts/",
    format: "iife",
    entryFileNames: "[name].js",
    sourcemap: false,
    plugins: [terser()],
  },
  plugins: [
    commonjs({
      include: "node_modules/**",
    }),
    resolve(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "es2015",
          moduleResolution: "node",
        },
      },
    }),
  ],
};
