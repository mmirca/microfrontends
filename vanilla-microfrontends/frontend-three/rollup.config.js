import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'MicrofrontendThree',
    globals: {
      '@vanilla-mfs/frontend-one': 'MicrofrontendOne',
      '@vanilla-mfs/frontend-two': 'MicrofrontendTwo',
    }
  },
  external: [
    '@vanilla-mfs/frontend-one',
    '@vanilla-mfs/frontend-two',
  ],
  plugins: [
    copy({
      targets: [
        { src: 'public/**', dest: 'dist' },
        { src: 'node_modules/@vanilla-mfs/frontend-one/dist/*.js', dest: 'dist/libs/frontend-one' },
        { src: 'node_modules/@vanilla-mfs/frontend-two/dist/*.js', dest: 'dist/libs/frontend-two' },
      ]
    })
  ]
};
