import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'
export default {
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'mobile.html'),
      },
    },
  },
}