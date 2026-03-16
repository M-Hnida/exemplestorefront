import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DmE_46eH.js","_app/immutable/chunks/Bz9pDSVN.js","_app/immutable/chunks/D9nMYTCY.js","_app/immutable/chunks/Bpiw11y6.js","_app/immutable/chunks/Bau2SuQ8.js","_app/immutable/chunks/rro9WXMD.js","_app/immutable/chunks/DHbFlQ8M.js","_app/immutable/chunks/COQx-r-q.js","_app/immutable/chunks/BPPrLw61.js","_app/immutable/chunks/DP2n3jh2.js","_app/immutable/chunks/Cm1x7Hiq.js","_app/immutable/chunks/opn6a1-r.js","_app/immutable/chunks/DpG2h5iv.js"];
export const stylesheets = [];
export const fonts = [];
