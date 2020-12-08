import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  cache: false,
  input: './src/lambda.ts',
  plugins: [
    nodeResolve({
      preferBuiltins: true,
    }),
    json(),
    typescript({
      /**
       * Packages like 'serverless-http' cannot be used without this
       * property.
       */
      allowSyntheticDefaultImports: true,
      declaration: false,
      target: 'es2017',
      module: 'commonjs',
    }),
    commonjs({
      includes: /\**node_modules\**/,
    }),
  ],
  output: {
    exports: 'named',
    format: 'cjs',
    file: 'rollup/bundle.js',
  },
};
