import Medusa from "@medusajs/js-sdk";

const MEDUSA_BACKEND_URL =
	import.meta.env.PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";

const MEDUSA_PUBLISHABLE_KEY =
	import.meta.env.PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";

export const sdk = new Medusa({
	baseUrl: MEDUSA_BACKEND_URL,
	debug: import.meta.env.DEV,
	publishableKey: MEDUSA_PUBLISHABLE_KEY,
});
