import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  console.log("Env:", process.env);
  return defineConfig({
    base: process.env.VITE_BASE || '/',
    plugins: [react()],
  })
}
