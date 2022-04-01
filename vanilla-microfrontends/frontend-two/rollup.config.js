import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'MicrofrontendTwo'
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
