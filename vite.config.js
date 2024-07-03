import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/send-order': {
        target: 'http://localhost:8060/basket/send-order',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send-order/, ''),
      },
    }
  },
})
