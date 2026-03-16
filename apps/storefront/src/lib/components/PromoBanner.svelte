<script lang="ts">
	import { ArrowRight } from "@lucide/svelte";
	import Section from "./Section.svelte";
</script>

<Section>
	<div
		class="mt-10 border border-primary-500/30 bg-surface-900 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:justify-between"
	>
		<div class="space-y-3">
			<p
				class="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary-400"
			>
				⚡ Limited Drop
			</p>
			<h2
				class="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none"
				style="font-family: 'Space Grotesk', sans-serif;"
			>
				Get 20% Off Your<br />First Order
			</h2>
			<p class="text-surface-400">
				Use code <strong
					class="text-surface-50 bg-surface-800 px-2 py-0.5 font-black"
					>RIFF20</strong
				> at checkout.
			</p>
		</div>
		<button
			type="button"
			class="btn btn-lg preset-filled-primary-500 btn-shine shrink-0 gap-2 uppercase tracking-widest text-sm font-black"
		>
			<span>Claim Offer</span><ArrowRight size={18} />
		</button>
	</div>
</Section>
