import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
	plugins: [
		sveltekit(),
		federation({
			name: 'shell-app',
			remotes: {
				google: 'https://www.google.com',
				bing: 'https://www.bing.com'
			},
			shared: ['react']
		})
	]
});
