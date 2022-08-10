import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const MODE = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	base: `/bundles/my-usual-layout/graphics/`,
	build: {
		outDir: '../../graphics',
		emptyOutDir: true,
	},
});
