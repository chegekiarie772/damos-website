import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // This is the most important part for local files
  plugins: [react()],
})