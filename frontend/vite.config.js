import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['@urql/svelte'],
	  },
	  server: {
		proxy: {
		  '/query': {
			target: 'http://localhost:8080/', // Change this to your backend server URL
			changeOrigin: true,
			pathRewrite: {
			  '^/query': '/query',
			},
		  },
		},
	  },

});
