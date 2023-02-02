export const manifest = {
	appDir: "_app",
	appPath: "sveltekit-gh-pages/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-cf6409e3.js","imports":["_app/immutable/start-cf6409e3.js","_app/immutable/chunks/index-1664d19c.js","_app/immutable/chunks/singletons-3ed75029.js","_app/immutable/chunks/shared-23917130.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
