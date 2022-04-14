const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  base: '/Components/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rating: resolve(__dirname, 'rating', 'index.html'),
        videoPlayer: resolve(__dirname, 'video-player', 'index.html'),
      },
    },
  },
});
