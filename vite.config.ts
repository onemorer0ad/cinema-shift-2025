import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@common/*': path.resolve(__dirname, './src/common'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils/api': path.resolve(__dirname, './src/utils/api'),
      '@utils/constants': path.resolve(__dirname, './src/utils/constants'),
      '@utils/helpers': path.resolve(__dirname, './src/utils/helpers'),
      '@utils/contexts': path.resolve(__dirname, './src/utils/contexts'),
      '@utils/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@features': path.resolve(__dirname, './src/features'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/assets/scss/variables.scss" as *;`, // Подключение SCSS переменных
      },
    },
  },
});
