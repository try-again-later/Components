const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rating: resolve(__dirname, 'rating', 'index.html')
      }
    }
  }
});
