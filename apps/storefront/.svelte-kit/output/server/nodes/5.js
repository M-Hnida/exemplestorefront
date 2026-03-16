

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/returns/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BV2oEvzJ.js","_app/immutable/chunks/Bz9pDSVN.js","_app/immutable/chunks/D9nMYTCY.js","_app/immutable/chunks/Bpiw11y6.js"];
export const stylesheets = [];
export const fonts = [];
