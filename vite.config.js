import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://gojogourav.github.io/Password_Generator/dist/",
  plugins: [react()],
})
