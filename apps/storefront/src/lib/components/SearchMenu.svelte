<script lang="ts">
	import { slide } from "svelte/transition";
	import { Search, X } from "@lucide/svelte";

	let { 
		searchQuery = $bindable(""),
		isOpen = $bindable(false),
		onClose = () => {}
	} = $props();

	let searchInput: HTMLInputElement | undefined = $state(undefined);

	$effect(() => {
		if (isOpen && searchInput) {
			setTimeout(() => searchInput?.focus(), 100);
		}
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			isOpen = false;
			onClose();
			if (window.location.pathname === '/') {
				const shopSection = document.getElementById('shop');
				if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
			} else {
				window.location.href = '/#shop';
			}
		} else if (e.key === 'Escape') {
			isOpen = false;
			onClose();
		}
	}
</script>

{#if isOpen}
	<!-- Backdrop overlay -->
	<div 
		class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity" 
		role="presentation"
		onclick={() => {
			isOpen = false;
			onClose();
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape') {
				isOpen = false;
				onClose();
			}
		}}
	></div>

	<!-- Slide down search menu -->
	<div 
		class="fixed top-0 left-0 w-full bg-surface-950 border-b border-surface-800 shadow-2xl z-[101]"
		transition:slide={{ duration: 300, axis: 'y' }}
	>
		<div class="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
			<div class="w-full relative flex items-center mb-6">
				<Search class="absolute left-6 text-surface-400" size={24} />
				<input
					bind:this={searchInput}
					class="w-full bg-surface-900 border border-surface-700 rounded-full py-5 pl-16 pr-6 text-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all font-bold placeholder:font-normal"
					type="search"
					placeholder="Search for tees, hoodies, jeans..."
					bind:value={searchQuery}
					onkeydown={handleKeydown}
				/>
			</div>
			
			<div class="flex gap-4">
				<button 
					type="button" 
					class="btn preset-filled-primary-500 btn-shine px-8"
					onclick={() => handleKeydown({ key: 'Enter' } as KeyboardEvent)}
				>
					Search
				</button>
				<button 
					type="button" 
					class="btn preset-outlined"
					onclick={() => {
						isOpen = false;
						onClose();
					}}
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
{/if}
