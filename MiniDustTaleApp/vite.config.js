import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        host: false, // Temporary change!
        port: 5173,
        strictPort: true,
        cors: true
    }
})
