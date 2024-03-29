import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const mode = process.env.APP_ENV

console.log( 'app env mode: ', mode )

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // base: mode === 'prod' ? '/les6toits.front/' : '/',
  base: '/',
})
