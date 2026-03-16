// @ts-nocheck
import type { PageServerLoad } from "./$types";
import { listProducts, listCollections, listRegions } from "$lib/medusa";

export const load = async () => {
	try {
		const [productsResponse, collections, regions] = await Promise.all([
			listProducts({
				limit: 20,
				fields: "*variants.calculated_price,+variants.inventory_quantity",
			}),
			listCollections(),
			listRegions(),
		]);

		return {
			products: productsResponse.products,
			collections,
			regions,
		};
	} catch (error) {
		// Medusa backend might not be running — return empty data
		// so the storefront can still render as a proof of concept
		console.warn("Failed to fetch from Medusa:", error);
		return {
			products: [],
			collections: [],
			regions: [],
		};
	}
};
;null as any as PageServerLoad;