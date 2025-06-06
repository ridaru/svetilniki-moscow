import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.html'],

  build: {
    outDir: 'dist'
  },

  server: {
    open: true
  }
});
