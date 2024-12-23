import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.okx.com',
        changeOrigin: true,   // Modifies the origin of the request to match the target
        rewrite: (path) => path.replace(/^\/api/, '')  // Removes the `/api` prefix
      }
    }
  }
});
