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
      //тест
      '/test':{
        target:'http://localhost:8060/test/test',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test/, ''),
      },
      '/check-token': {
        target: 'http://localhost:8060/check-token/check-token',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/check-token/, ''),
      },
      '/send-order': {
        target: 'http://localhost:8060/send-order',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send-order/, ''),
      },
//категории продуктов
      '/get-categories':{
          target:'http://localhost:8060/product/category',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/category/, ''),
      },
//регистрация
      '/register':{
        target: 'http://localhost:8060',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/register$/, '/register/register'),
      },
//авторизация      
      '/auth':{
        target: 'http://localhost:8060/auth',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/auth/, ''),
      },
//добавление изображений
      '/add-image-menu-products':{
        target:'http://localhost:8060/admin/add-image-menu-products',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/add-image-menu-products/, ''),
      },
      '/admin/add-image-stocks-populars':{
        target:'http://localhost:8060/admin/add-image-stocks-populars/upload/',
        changeOrigin:true,
       rewrite: (path) => path.replace(/^\/admin\/add-image-stocks-populars\/upload/, ''),
      },
//получение изображений
      '/admin/get-images-stocks':{
        target:'http://localhost:8060/admin/get-images-stocks/get-images/',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/admin\/get-images-stocks\/get-images/, ''),
      },
      '/admin/get-images-populars':{
        target:'http://localhost:8060/admin/get-images-populars/get-images/',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/admin\/get-images-populars\/get-images/, ''),
      },
  //данные для админки 
      '/product/pizza':{
        target:'http://localhost:8060/product/pizza-products/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/product/, ''),  
      },
      '/product/desserts':{
        target:'http://localhost:8060/product/desserts-products/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/product/, ''),  
      },
      '/product/snacks':{
        target:'http://localhost:8060/product/snacks-products/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/product/, ''),  
      },
      '/product/drancks':{
        target:'http://localhost:8060/product/drancks-products/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/product/, ''),  
      },
      '/product/combo':{
        target:'http://localhost:8060/product/combo-products/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/product/, ''),  
      },
    }
  },
})
