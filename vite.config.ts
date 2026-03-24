import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'

export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  root: path.resolve(__dirname, 'src/ui'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: false,
    cssCodeSplit: false,
    assetsInlineLimit: Infinity,
  },
})
