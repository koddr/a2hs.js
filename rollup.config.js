/**
 *  Rollup.js Config
 */

import babel from 'rollup-plugin-babel'
import compiler from '@ampproject/rollup-plugin-closure-compiler'

export default [
  {
    input: './src/a2hs.js',
    output: {
      name: 'a2hs',
      file: './a2hs.min.js',
      format: 'iife'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      compiler({
        compilation_level: 'ADVANCED'
      })
    ]
  }
]
