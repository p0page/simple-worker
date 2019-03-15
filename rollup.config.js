import typescript from 'rollup-plugin-typescript2'
import filesize from 'rollup-plugin-filesize'
import { terser } from "rollup-plugin-terser";
import { join } from 'path'

export default {
  input: join(__dirname, './src/main.ts'),
  output: [
    {
      file: 'dist/simpleWorker.iife.js',
      format: 'iife',
      name: 'SimpleWorker',
    },
    {
      file: 'dist/simpleWorker.es.js',
      format: 'es'
    }
  ],
  plugins: [
    typescript(),
    terser(),
    filesize()
  ]
}