export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/bali-swing.jpg","images/logo.svg","images/Screenshot 2025-02-20 004426.jpg","images/Screenshot 2025-02-20 004831.jpg","images/Screenshot_2025-02-20_004831-removebg-preview.png","images/tips/130644843.jpg","images/tips/8F7A1154-2-scaled.jpg","images/tips/8F7A1511.jpg","images/tips/alex-azabache-hz4tKDvQHoo-unsplash-scaled.jpg","images/tips/bali/DSC03735.jpg","images/tips/bali/DSC04052.jpg","images/tips/bali/IMG_7387-scaled.jpg","images/tips/bali/YDH_2238.jpg","images/tips/daniele-colucci-MchEBdctI24-unsplash-scaled.jpg","images/tips/destinations/athens-315833_1920.jpg","images/tips/destinations/bird-7237037_1920.jpg","images/tips/destinations/boat-7767575_1920.jpg","images/tips/destinations/camping-7947055_1920.jpg","images/tips/destinations/france-7370939_1920.jpg","images/tips/destinations/gran-canaria-1684745_1280.jpg","images/tips/destinations/gran-canaria-4360002_1920.jpg","images/tips/destinations/roe-deer-9394840_1920.jpg","images/tips/destinations/women-5534478_1920.jpg","images/tips/DSC04814.jpg","images/tips/hisham-zayadnh-hP9QlSnyX1A-unsplash-scaled.jpg","manifest.json","videos/6034698_Business_Traveling_1920x1080.mp4"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png",".json":"application/json",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.BMkzAgdS.js",app:"_app/immutable/entry/app.DKhf2Zyd.js",imports:["_app/immutable/entry/start.BMkzAgdS.js","_app/immutable/chunks/DwDK1PZr.js","_app/immutable/chunks/CzqLcSh8.js","_app/immutable/chunks/B0q4WlrQ.js","_app/immutable/entry/app.DKhf2Zyd.js","_app/immutable/chunks/CzqLcSh8.js","_app/immutable/chunks/B4o3QOX8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
