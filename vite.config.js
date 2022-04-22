const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  base: '/Components/',
  root: './src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
        rating: resolve(__dirname, 'src', 'rating', 'index.html'),
        videoPlayer: resolve(__dirname, 'src', 'video-player', 'index.html'),
      },
    },
    outDir: resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: [
      {
        find: '@root',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
});
