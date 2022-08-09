import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	base: 'http://localhost:9090/bundles/my-usual-layout/dashboard/dist/'
})
