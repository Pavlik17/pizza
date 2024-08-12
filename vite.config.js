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
      '/check-token': {
        target: 'http://localhost:8060/check-token',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/check-token/, ''),
      },
      '/send-order': {
        target: 'http://localhost:8060/send-order',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send-order/, ''),
      },
      '/auth':{
        target: 'http://localhost:8060/auth',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/auth/, ''),
      },
      '/add-image-stocks-populars':{
        target:'http://localhost:8060/add-image-stocks-populars',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/add-image-stocks-populars/, ''),
      },
      '/add-image-menu-products':{
        target:'http://localhost:8060/add-image-menu-products',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/add-image-menu-products/, ''),
      },
    }
  },
})
