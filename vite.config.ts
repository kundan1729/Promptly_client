import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// Use VITE_API_URL for proxy target in development
const API_URL = (typeof process !== 'undefined' && process.env.VITE_API_URL) ||
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) ||
  'http://localhost:5000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});