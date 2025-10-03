import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/i18n': path.resolve(__dirname, './src/i18n'),
      '@/common': path.resolve(__dirname, './src/common'),
    },
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://mdharboulle.com',
      dynamicRoutes: [
        '/',
        '/skills',
        '/portfolio',
        '/contact',
      ],
    }),
  ],
}));
