
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: './src/consoleSocialMedia.js',
    output: {
      file: 'csm.min.js',
      name: 'ConsoleSocialMedia',
      format: 'umd',
      exports: 'named',
      compact: true
    },
    onwarn: (warning, next) => {
      if (warning.code === 'CIRCULAR_DEPENDENCY') {
        return;
      }
      next(warning);
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: '> 1%, IE 10, not op_mini all, not dead',
                node: 10
              }
            }
          ]
        ],
        runtimeHelpers: true
      }),
      resolve(),
      commonjs(),
      uglify()
    ],
    external: []
  }
];
