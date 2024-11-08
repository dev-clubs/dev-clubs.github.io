import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import postcss from 'postcss'
import postcssPresetEnv from 'postcss-preset-env'
import postcssLit from "rollup-plugin-postcss-lit"

export default defineConfig({
  target: 'ES2020',
  root: 'src',
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '~', replacement: fileURLToPath(new URL('./', import.meta.url)) },
    ]
  },
  plugins: [
    postcssLit()
  ],

  build: {
    outDir: '../docs',
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
  },



  server: {
    port: 3000,
    host: true
  },

  preview: {
    port: 8080,
  },
})