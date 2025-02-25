

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.urpbZCIH.js","_app/immutable/chunks/CzqLcSh8.js","_app/immutable/chunks/B4o3QOX8.js"];
export const stylesheets = ["_app/immutable/assets/0.BkOxCiPL.css"];
export const fonts = [];
