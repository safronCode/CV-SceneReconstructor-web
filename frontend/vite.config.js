import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    origin: 'http://localhost:5173'
  },
  base: '/static/scene_reconstructor/',
  build: {
    manifest: 'manifest.json',
    emptyOutDir: true,
    outDir: '../static/scene_reconstructor/',
    rollupOptions: {
      input: './src/main.js',
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})