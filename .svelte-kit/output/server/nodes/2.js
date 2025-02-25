

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C6q5R9YY.js","_app/immutable/chunks/CzqLcSh8.js","_app/immutable/chunks/B4o3QOX8.js","_app/immutable/chunks/B0q4WlrQ.js"];
export const stylesheets = ["_app/immutable/assets/2.B0ryV_Te.css"];
export const fonts = [];
