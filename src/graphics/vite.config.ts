import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	base: `/bundles/my-usual-layout/graphics/`,
	build: {
		outDir: '../../graphics',
		emptyOutDir: true,
	},
});
