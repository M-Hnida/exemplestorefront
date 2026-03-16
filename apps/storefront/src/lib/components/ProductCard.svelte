<script lang="ts">
	import { Heart, Eye, ShoppingCart, Star } from "@lucide/svelte";

	let {
		product,
		onAddToCart = () => {},
	}: {
		product: any;
		onAddToCart?: (event?: MouseEvent) => void;
	} = $props();

	function discount(original: number, current: number): number {
		return Math.round(((original - current) / original) * 100);
	}
</script>

<div class="product-card group bg-surface-950 border border-surface-800 rounded-sm overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:border-surface-600">
	<!-- Image & Actions -->
	<div class="relative overflow-hidden aspect-[3/4] bg-surface-900 border-b border-surface-800">
		<a href="/product/{product.id}" class="absolute inset-0 block z-0 overflow-hidden">
			<img
				src={product.image}
				alt={product.name}
				class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
			/>
		</a>
		
		<div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

		{#if product.badge}
			<span
				class={`badge ${product.badgePreset} absolute left-0 top-3 text-[0.6rem] font-black uppercase tracking-widest px-3 py-1 shadow-md`}
			>
				{product.badge}
			</span>
		{/if}

		<button
			type="button"
			class="btn-icon btn-icon-sm bg-surface-900/80 hover:bg-primary-500 hover:text-white backdrop-blur-md absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
			aria-label="Add to wishlist"
		>
			<Heart size={16} />
		</button>
		
		<!-- Hover Actions -->
		<div class="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex gap-2">
			<button
				type="button"
				class="btn preset-filled-primary-500 flex-1 btn-sm btn-shine shadow-lg"
				onclick={onAddToCart}
			>
				<ShoppingCart size={14} /><span>Add to Cart</span>
			</button>
			<button
				type="button"
				class="btn btn-icon preset-tonal btn-sm shadow-lg border border-surface-700 hover:border-surface-500"
				aria-label="Quick view"
			>
				<Eye size={14} />
			</button>
		</div>
	</div>

	<!-- Info -->
	<div class="p-4 flex flex-col flex-1 bg-surface-950">
		<div class="flex justify-between items-start mb-2">
			<p
				class="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-surface-400 group-hover:text-primary-400 transition-colors"
			>
				{product.category}
			</p>
			<div class="flex items-center gap-1 text-[0.6rem] text-surface-400">
				<Star size={10} class="fill-warning-400 text-warning-400" />
				<span class="font-bold">{product.rating}</span>
				<span>({product.reviews || 0})</span>
			</div>
		</div>
		
		<h3 class="text-base font-bold leading-tight mb-3 flex-1 hover:text-primary-400 transition-colors">
			<a href="/product/{product.id}">{product.name}</a>
		</h3>
		
		<div class="flex items-center gap-2 mt-auto">
			<span class="text-lg font-black">${product.price}</span>
			{#if product.originalPrice}
				<span class="text-xs text-surface-500 line-through"
					>${product.originalPrice}</span
				>
				<span class="text-[0.6rem] font-black text-error-400"
					>-{discount(product.originalPrice, product.price)}%</span
				>
			{/if}
		</div>
	</div>
</div>
