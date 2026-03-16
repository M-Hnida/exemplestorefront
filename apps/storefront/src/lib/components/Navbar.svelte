<script lang="ts">
	import {
		Flame,
		Menu,
		X,
		Search,
		Heart,
		ShoppingCart,
	} from "@lucide/svelte";
	import { AppBar } from "@skeletonlabs/skeleton-svelte";
	import { cartState } from "$lib/stores/cart.svelte";
	import { slide } from "svelte/transition";
	import SearchMenu from "$lib/components/SearchMenu.svelte";

	let {
		searchQuery = $bindable(""),
		showMobileMenu = $bindable(false),
		activeCategory = $bindable("all"),
		categories = [],
	} = $props();

	let searchOpen = $state(false);
</script>

<div
	class="gradient-border sticky top-0 z-50 bg-surface-950/80 backdrop-blur-xl"
>
	<AppBar>
		<AppBar.Toolbar
			class="flex w-full items-center justify-between mx-auto max-w-7xl"
		>
			<AppBar.Lead class="flex items-center gap-4">
				<button
					type="button"
					class="btn-icon hover:preset-tonal md:hidden"
					onclick={() => (showMobileMenu = !showMobileMenu)}
					aria-label="Toggle menu"
				>
					{#if showMobileMenu}<X size={20} />{:else}<Menu
							size={20}
						/>{/if}
				</button>
				<a href="/" class="flex items-center gap-3">
					<div
						class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500"
					>
						<Flame size={20} class="text-white" />
					</div>
					<div class="flex flex-col leading-none">
						<strong
							class="text-lg font-black uppercase tracking-[0.15em]"
							style="font-family: 'Space Grotesk', sans-serif;"
							>Riff Riot</strong
						>
						<span
							class="text-[0.55rem] font-medium uppercase tracking-[0.3em] text-primary-400"
							>Streetwear</span
						>
					</div>
				</a>
			</AppBar.Lead>

			<AppBar.Trail class="flex items-center gap-3">
				<button
					type="button"
					class="btn-icon hover:preset-tonal"
					onclick={() => searchOpen = true}
					aria-label="Search">
					<Search size={18} />
				</button>
				<button
					type="button"
					class="btn-icon hover:preset-tonal"
					aria-label="Wishlist"><Heart size={18} /></button
				>
				<div class="relative inline-block">
					{#if cartState.count > 0}
						<span
							class="badge-icon preset-filled-error-500 absolute -right-1 -top-1 z-10 text-[0.6rem] font-bold badge-pulse"
							>{cartState.count}</span
						>
					{/if}
					<button
						type="button"
						class="btn-icon preset-filled-primary-500"
						title="Cart"
						onclick={() => cartState.toggle()}
						aria-label="Cart"><ShoppingCart size={18} /></button
					>
				</div>
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>
</div>

{#if showMobileMenu}
	<div
		class="border-b border-surface-800 bg-surface-900 p-4 md:hidden relative z-40"
		transition:slide={{ duration: 200 }}
	>
		<nav
			class="flex flex-col gap-1 text-xs uppercase font-bold tracking-widest"
		>
			{#each categories as cat (cat.id)}
				<button
					type="button"
					class={`p-3 text-left w-full hover:preset-tonal ${activeCategory === cat.id ? "preset-filled-primary-500" : ""}`}
					onclick={() => {
						activeCategory = cat.id;
						showMobileMenu = false;
					}}
				>
					{cat.label}
				</button>
			{/each}
		</nav>
	</div>
{/if}

<SearchMenu 
	bind:searchQuery 
	bind:isOpen={searchOpen} 
	onClose={() => showMobileMenu = false}
/>
