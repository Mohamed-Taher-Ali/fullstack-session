import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['antd/es/notification'],
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },

  server: {
    watch: {
      usePolling: true,
    },
    strictPort: true,
    host: true,
    port: 8081,
  },

  build: {
    outDir: './dist',
    emptyOutDir: true,
    sourcemap: true,
  },
});
