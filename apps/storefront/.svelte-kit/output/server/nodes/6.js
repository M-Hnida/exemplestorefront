

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shipping/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.s4--9uZn.js","_app/immutable/chunks/Bz9pDSVN.js","_app/immutable/chunks/D9nMYTCY.js","_app/immutable/chunks/Bpiw11y6.js"];
export const stylesheets = [];
export const fonts = [];
