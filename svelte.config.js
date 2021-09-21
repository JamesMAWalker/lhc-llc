import sveltePreprocess from 'svelte-preprocess'
/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel'

const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};

export default config;
