import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true,
    proxy: {
      // Proxy API calls to backend during development
      '/api': {
        target: 'https://bloghub-backend-l3v8.onrender.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  define: {
    'process.env.VITE_FRONTEND_URL': JSON.stringify(process.env.VITE_FRONTEND_URL),
    'process.env.VITE_BACKEND_URL': JSON.stringify(process.env.VITE_BACKEND_URL),
    'process.env.VITE_API_BASE_URL': JSON.stringify(process.env.VITE_API_BASE_URL),
  }
})
