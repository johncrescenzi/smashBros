import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			     base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
			   },
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
