<script lang="ts">
	import { X, Trash2, ArrowRight } from "@lucide/svelte";
	import { cartState } from "$lib/stores/cart.svelte";

	function closeCart() {
		cartState.isOpen = false;
	}
</script>

{#if cartState.isOpen}
	<!-- Backdrop overlay -->
	<div 
		class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity" 
		role="presentation"
		onclick={closeCart}
	></div>

	<!-- Slideover panel -->
	<div class="fixed top-0 right-0 h-full w-full sm:w-96 bg-surface-950 border-l border-surface-800 shadow-2xl z-[101] flex flex-col transform transition-transform duration-300 translate-x-0">
		
		<!-- Header -->
		<div class="flex items-center justify-between p-4 border-b border-surface-800">
			<h2 class="text-lg font-black uppercase tracking-widest flex items-center gap-2">
				Your Cart 
				<span class="badge preset-filled-primary-500 rounded-full">{cartState.count}</span>
			</h2>
			<button 
				type="button" 
				class="btn-icon hover:bg-surface-800"
				onclick={closeCart}
			>
				<X size={20} />
			</button>
		</div>

		<!-- Cart Items list -->
		<div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
			{#if cartState.items.length === 0}
				<div class="flex flex-col items-center justify-center h-full text-surface-500">
					<p class="mb-4">Your cart is empty.</p>
					<button class="btn preset-outlined" onclick={closeCart}>Continue Shopping</button>
				</div>
			{:else}
				{#each cartState.items as item, idx}
					<div class="flex gap-4 p-3 bg-surface-900 border border-surface-800 hover:border-surface-700 transition-colors">
						<img src={item.image || 'https://via.placeholder.com/80'} alt={item.name} class="w-20 h-24 object-cover" />
						<div class="flex-1 flex flex-col py-1">
							<p class="text-[0.6rem] font-bold uppercase tracking-widest text-primary-400 mb-1">{item.category}</p>
							<h3 class="text-sm font-bold leading-tight mb-2">{item.name}</h3>
							<div class="mt-auto flex justify-between items-center">
								<span class="font-black">${item.price}</span>
								<button 
									type="button"
									class="btn-icon btn-icon-sm text-surface-500 hover:text-error-500 hover:bg-error-500/10"
									onclick={() => cartState.removeItem(idx)}
								>
									<Trash2 size={14} />
								</button>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Footer / Checkout -->
		{#if cartState.items.length > 0}
			<div class="p-4 border-t border-surface-800 bg-surface-900/50">
				<div class="flex justify-between items-center mb-4">
					<span class="text-sm font-bold uppercase tracking-widest text-surface-400">Total</span>
					<span class="text-2xl font-black">${cartState.total.toFixed(2)}</span>
				</div>
				<button class="btn preset-filled-primary-500 w-full btn-shine gap-2 py-3">
					<span>Checkout</span>
					<ArrowRight size={16} />
				</button>
			</div>
		{/if}
	</div>
{/if}
