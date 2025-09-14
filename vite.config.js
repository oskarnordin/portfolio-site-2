import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to the repo name so assets work on GitHub Pages project site
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-site-2/',
})