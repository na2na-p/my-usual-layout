import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const MODE = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
		tsconfigPaths(),
	],
	base: `/bundles/my-usual-layout/dashboard/`,
	build: {
		outDir: '../../dashboard',
		emptyOutDir: true,
	},
	esbuild: {
    logOverride: {'this-is-undefined-in-esm': 'silent'},
  },
});
