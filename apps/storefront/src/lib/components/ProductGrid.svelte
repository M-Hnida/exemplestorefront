<script lang="ts">
	import { Tabs } from "@skeletonlabs/skeleton-svelte";
	import { Search, ChevronRight } from "@lucide/svelte";
	import ProductCard from "./ProductCard.svelte";
	import Section from "./Section.svelte";

	let {
		categories = [],
		activeCategory = $bindable("all"),
		activeSize = $bindable("M"),
		sizes = [],
		filteredProducts = [],
		onAddToCart = () => {},
	} = $props();
</script>

<Section class="pb-12" id="shop">
	<!-- Section header — editorial ruled style -->
	<div
		class="flex items-end justify-between border-b border-surface-700 py-6 mb-6"
	>
		<div>
			<p
				class="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-primary-400 mb-1"
			>
				Collection
			</p>
			<h2
				class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none"
				style="font-family: 'Space Grotesk', sans-serif;"
			>
				Shop the Drop
			</h2>
		</div>
		<p class="text-sm text-surface-500 hidden md:block">
			{filteredProducts.length} products
		</p>
	</div>

	<!-- TABS for categories -->
	<Tabs
		value={activeCategory}
		onValueChange={(e) => (activeCategory = e.value)}
	>
		<div class="flex flex-col md:flex-row md:items-center gap-6 mb-6">
			<Tabs.List>
				{#each categories as cat (cat.id)}
					<Tabs.Trigger value={cat.id}>
						{cat.label}
					</Tabs.Trigger>
				{/each}
				<Tabs.Indicator />
			</Tabs.List>

			<!-- Size selector -->
			<div class="flex flex-wrap items-center gap-2 md:ml-auto">
				<span
					class="text-[0.6rem] font-bold uppercase tracking-widest text-surface-500"
					>Size:</span
				>
				{#each sizes as size (size)}
					<button
						type="button"
						class={`chip ${activeSize === size ? "preset-filled-primary-500" : "preset-outlined"}`}
						onclick={() => (activeSize = size)}>{size}</button
					>
				{/each}
			</div>
		</div>

		<Tabs.Content value={activeCategory}>
			<div
				class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
			>
				{#each filteredProducts as product (product.id)}
					<ProductCard
						{product}
						onAddToCart={() => onAddToCart(product)}
					/>
				{/each}

				{#if filteredProducts.length === 0}
					<div
						class="col-span-full border border-surface-800 p-10 text-center bg-surface-950"
					>
						<Search
							size={40}
							class="mx-auto text-surface-700 mb-4"
						/>
						<p
							class="text-lg font-bold uppercase tracking-widest mb-1"
						>
							No products found
						</p>
						<p class="text-sm text-surface-500 mb-4">
							Try a different search or category.
						</p>
						<button
							type="button"
							class="btn preset-filled-primary-500"
							onclick={() => {
								activeCategory = "all";
							}}
						>
							Clear Filters
						</button>
					</div>
				{/if}
			</div>
		</Tabs.Content>
	</Tabs>
</Section>
