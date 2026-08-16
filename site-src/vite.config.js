import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Builds the MARKETING landing page straight into the repo root as
// index.html + assets/. app.html (the working demo dashboard) is untouched,
// plain JS, and lives alongside this at the repo root.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: path.resolve(__dirname, '..'),
    emptyOutDir: false,
    assetsDir: 'landing-assets',
  },
})
