import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ✅ Use './' for correct relative asset paths in Vercel
  plugins: [react(), tailwindcss()]
})
