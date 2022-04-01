import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'MicrofrontendOne'
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'public/**',
          dest: 'dist'
        }
      ]
    })
  ]
};
