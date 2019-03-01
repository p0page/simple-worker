import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'
import { join } from 'path'

export default {
  input: join(__dirname, './src/main.ts'),
  output: {
    file: 'dist/worker.min.js',
    format: 'iife',
    name: '$worker',
    sourcemap: true
  },
  plugins: [
    typescript(),
    uglify(),
    filesize()
  ]
}