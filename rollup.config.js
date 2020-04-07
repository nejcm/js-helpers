import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
// eslint-disable-next-line import/extensions
import pkg from './package.json';

const external = (id) => !id.startsWith('.') && !id.startsWith('/');
const externals =  ['react', 'react-dom', 'prop-types', 'lodash'];

const babelConfig = (
  {useESModules, targets} = {
    useESModules: true,
    targets: {browsers: 'last 2 versions'},
  },
) => ({
  comments: false,
  runtimeHelpers: true,
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/transform-runtime', {useESModules, regenerator: false}],
    'no-side-effect-class-properties',
    ['babel-plugin-transform-react-remove-prop-types', {mode: 'unsafe-wrap'}],
    ['babel-plugin-transform-async-to-promises', {inlineHelpers: true}],
    'babel-plugin-minify-dead-code-elimination',
  ],
  exclude: 'node_modules/**',
});

const umdConfig = ({minify} = {}) => ({
  input: pkg.source,
  external: externals,
  output: {
    name: pkg.name,
    file: minify ? pkg['umd:main'].replace('.js', '.min.js') : pkg['umd:main'],
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      lodash: 'lodash'
    },
  },
  plugins: [
    resolve(),
    babel(
      babelConfig({
        targets: {browsers: ['last 2 versions', 'safari >= 7']},
      }),
    ),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        minify ? 'production' : 'development',
      ),
    }),
    commonjs(),
    minify ? uglify() : { },
    filesize(),
  ],
});

const rollupConfig = [
  // Browser-friendly UMD builds
  umdConfig(),
  umdConfig({minify: true}),

  // CommonJS
  {
    input: pkg.source,
    external,
    output: [{file: pkg.main, format: 'cjs'}],
    plugins: [resolve(), babel(babelConfig({useESModules: false})), filesize()],
  },

  // ES module
  {
    input: pkg.source,
    external,
    output: [{file: pkg.module, format: 'esm'}],
    plugins: [resolve(), babel(babelConfig()), filesize()],
  },
];

export default rollupConfig;
