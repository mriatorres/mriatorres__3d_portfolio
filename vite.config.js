import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mriatorres__3d_portfolio/',
  build: {
    chunkSizeWarningLimit: 1600,
    mime: {
      '.js': 'application/javascript',
      '.css': 'text/css',
    },
  },
  server: {
    middleware: [
      {
        async handle(req, res, next) {
          if (req.url.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
          } else if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
          }
          return next();
        },
      },
    ],
  },
})