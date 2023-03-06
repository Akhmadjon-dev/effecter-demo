import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import { r } from './scripts/utils';

const viteConfig = defineConfig({
  resolve: {
    alias: {
      '~/': `${r('src')}/`,
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin', 'effector/babel-plugin'],
      },
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  server: {
    open: true,
  },
});

export default viteConfig;
