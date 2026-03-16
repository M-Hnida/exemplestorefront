export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/heromodel.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DIVJwKNT.js",app:"_app/immutable/entry/app.CgNLRpp1.js",imports:["_app/immutable/entry/start.DIVJwKNT.js","_app/immutable/chunks/Bau2SuQ8.js","_app/immutable/chunks/D9nMYTCY.js","_app/immutable/chunks/rro9WXMD.js","_app/immutable/entry/app.CgNLRpp1.js","_app/immutable/chunks/D9nMYTCY.js","_app/immutable/chunks/DHbFlQ8M.js","_app/immutable/chunks/COQx-r-q.js","_app/immutable/chunks/Bz9pDSVN.js","_app/immutable/chunks/rro9WXMD.js","_app/immutable/chunks/BPPrLw61.js","_app/immutable/chunks/DP2n3jh2.js","_app/immutable/chunks/DpG2h5iv.js","_app/immutable/chunks/5mz3x0HL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/returns",
				pattern: /^\/returns\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/shipping",
				pattern: /^\/shipping\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/terms",
				pattern: /^\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/testing",
				pattern: /^\/testing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
