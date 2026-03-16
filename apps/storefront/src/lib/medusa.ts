import { sdk } from "./sdk";
import type { HttpTypes } from "@medusajs/types";

// ---- Regions ----

export async function listRegions(): Promise<HttpTypes.StoreRegion[]> {
	const { regions } = await sdk.store.region.list();
	return regions;
}

// ---- Products ----

export async function listProducts(
	query: Record<string, unknown> = {},
): Promise<{
	products: HttpTypes.StoreProduct[];
	count: number;
	limit: number;
	offset: number;
}> {
	const response = await sdk.store.product.list(query);
	return response;
}

export async function retrieveProduct(
	id: string,
	query: Record<string, unknown> = {},
): Promise<HttpTypes.StoreProduct> {
	const { product } = await sdk.store.product.retrieve(id, query);
	return product;
}

// ---- Collections ----

export async function listCollections(): Promise<
	HttpTypes.StoreCollection[]
> {
	const { collections } = await sdk.store.collection.list();
	return collections;
}

// ---- Cart ----

const CART_ID_KEY = "medusa_cart_id";

function getStoredCartId(): string | null {
	if (typeof window === "undefined") return null;
	return localStorage.getItem(CART_ID_KEY);
}

function storeCartId(id: string): void {
	if (typeof window === "undefined") return;
	localStorage.setItem(CART_ID_KEY, id);
}

export function clearStoredCartId(): void {
	if (typeof window === "undefined") return;
	localStorage.removeItem(CART_ID_KEY);
}

export async function getOrCreateCart(
	regionId: string,
): Promise<HttpTypes.StoreCart> {
	const existingId = getStoredCartId();

	if (existingId) {
		try {
			const { cart } = await sdk.store.cart.retrieve(existingId);
			return cart;
		} catch {
			// Cart expired or invalid — create a new one
		}
	}

	const { cart } = await sdk.store.cart.create({ region_id: regionId });
	storeCartId(cart.id);
	return cart;
}

export async function addToCart(
	cartId: string,
	variantId: string,
	quantity = 1,
): Promise<HttpTypes.StoreCart> {
	const { cart } = await sdk.store.cart.createLineItem(cartId, {
		variant_id: variantId,
		quantity,
	});
	return cart;
}

export async function updateCartItem(
	cartId: string,
	lineItemId: string,
	quantity: number,
): Promise<HttpTypes.StoreCart> {
	const { cart } = await sdk.store.cart.updateLineItem(
		cartId,
		lineItemId,
		{ quantity },
	);
	return cart;
}

export async function removeCartItem(
	cartId: string,
	lineItemId: string,
): Promise<void> {
	await sdk.store.cart.deleteLineItem(cartId, lineItemId);
}

// ---- Categories ----

export async function listCategories(): Promise<
	HttpTypes.StoreProductCategory[]
> {
	const { product_categories } = await sdk.store.category.list();
	return product_categories;
}
