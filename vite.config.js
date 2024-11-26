import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/pw2_pockemon_demo_202403/',
  plugins: [react()],
})
