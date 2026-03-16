<script lang="ts">
	import { page } from "$app/stores";
	import { PRODUCTS } from "$lib/data";
	import Navbar from "$lib/components/Navbar.svelte";
	import { cartState } from "$lib/stores/cart.svelte";
	import { ShoppingCart, Star, Heart, ArrowLeft } from "@lucide/svelte";

	let productId = $derived(Number($page.params.id));
	let product = $derived(PRODUCTS.find(p => p.id === productId) || PRODUCTS[0]);

	let selectedSize = $state("M");
	const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

	function handleAddToCart() {
		cartState.addItem(product);
	}
</script>

<svelte:head>
	<title>{product.name} | Riff Riot</title>
</svelte:head>

<Navbar />

<main class="max-w-7xl mx-auto px-4 py-8 md:py-16">
	<a href="/#shop" class="inline-flex items-center gap-2 text-surface-400 hover:text-primary-400 transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
		<ArrowLeft size={16} /> Back to Shop
	</a>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
		<!-- Image Gallery -->
		<div class="space-y-4">
			<div class="aspect-[3/4] bg-surface-900 overflow-hidden border border-surface-800 relative">
				{#if product.badge}
					<span class={`badge ${product.badgePreset} absolute left-4 top-4 text-xs font-black uppercase tracking-widest px-4 py-2 shadow-lg z-10`}>
						{product.badge}
					</span>
				{/if}
				<img 
					src={product.image} 
					alt={product.name} 
					class="w-full h-full object-cover"
				/>
			</div>
			<div class="grid grid-cols-4 gap-4">
				<button type="button" class="aspect-square bg-surface-900 border border-primary-500 overflow-hidden">
					<img src={product.image} alt="Thumbnail 1" class="w-full h-full object-cover opacity-100" />
				</button>
			</div>
		</div>

		<!-- Product Info -->
		<div class="flex flex-col py-4">
			<p class="text-xs font-bold uppercase tracking-[0.3em] text-primary-400 mb-2">{product.category}</p>
			
			<h1 class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4" style="font-family: 'Space Grotesk', sans-serif;">
				{product.name}
			</h1>

			<div class="flex items-center gap-4 mb-6 pb-6 border-b border-surface-800">
				<div class="flex items-center gap-2">
					<span class="text-3xl font-black">${product.price}</span>
					{#if product.originalPrice}
						<span class="text-lg text-surface-500 line-through">${product.originalPrice}</span>
					{/if}
				</div>
				<div class="flex items-center gap-1 text-sm bg-surface-900 px-3 py-1 rounded-full border border-surface-800">
					<Star size={14} class="fill-warning-400 text-warning-400" />
					<span class="font-bold">{product.rating}</span>
					<span class="text-surface-400">({product.reviews} reviews)</span>
				</div>
			</div>

			<p class="text-surface-400 leading-relaxed mb-8">
				Constructed from premium heavyweight cotton. Features an oversized drop-shoulder fit, distressed detailing, and our signature graphic print. Built to withstand the pit and the streets alike.
			</p>

			<!-- Size Selection -->
			<div class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<span class="text-sm font-bold uppercase tracking-widest">Select Size</span>
					<button type="button" class="text-xs text-surface-500 underline hover:text-surface-50">Size Guide</button>
				</div>
				<div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
					{#each SIZES as size}
						<button 
							type="button" 
							class="py-3 border text-sm font-bold transition-all {selectedSize === size ? 'border-primary-500 bg-primary-500/10 text-primary-400' : 'border-surface-700 hover:border-surface-500'}"
							onclick={() => selectedSize = size}
						>
							{size}
						</button>
					{/each}
				</div>
			</div>

			<!-- Add to Cart -->
			<div class="flex gap-4 mt-auto">
				<button 
					type="button" 
					class="btn preset-filled-primary-500 flex-1 btn-shine gap-2 h-14 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary-500/10"
					onclick={handleAddToCart}
				>
					<ShoppingCart size={20} />
					<span>Add to Cart</span>
				</button>
				<button 
					type="button" 
					class="btn-icon h-14 w-14 border border-surface-700 hover:bg-surface-800 hover:border-surface-600 transition-colors shrink-0"
					aria-label="Add to wishlist"
				>
					<Heart size={20} />
				</button>
			</div>
			
			<div class="mt-8 pt-6 border-t border-surface-800 text-xs text-surface-500 space-y-2">
				<p>✔️ Free shipping on orders over $75.</p>
				<p>✔️ 30-day hassle-free returns.</p>
			</div>
		</div>
	</div>
</main>
