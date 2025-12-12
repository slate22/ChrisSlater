import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    // Base url for assets in production. 
    // Should match the path from the domain root to the dist folder.
    base: process.env.NODE_ENV === 'development'
        ? '/'
        : '/wp-content/themes/chrisslater-hybrid/frontend/dist/',
    build: {
        manifest: true,
        outDir: 'dist',
        rollupOptions: {
            input: './src/main.tsx'
        }
    },
    server: {
        host: 'localhost',
        port: 5173,
        strictPort: true,
        cors: true,
        origin: 'http://localhost:5173'
    }
})
