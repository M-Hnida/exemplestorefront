<script lang="ts">
	import { Mail } from "@lucide/svelte";
	import Section from "./Section.svelte";

	let { newsletterEmail = $bindable("") } = $props();
</script>

<Section
	class="border-t border-surface-800 pt-10 pb-4 text-center"
	id="newsletter"
>
	<div class="mx-auto max-w-lg space-y-5">
		<p
			class="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary-400"
		>
			Newsletter
		</p>
		<h2
			class="text-4xl font-black uppercase tracking-tighter"
			style="font-family: 'Space Grotesk', sans-serif;"
		>
			Join the Riot
		</h2>
		<p class="text-surface-400 text-sm">
			Subscribe for exclusive drops, early access, and 10% off your first
			order.
		</p>
		<form
			class="flex flex-col gap-3 sm:flex-row"
			onsubmit={(e) => e.preventDefault()}
		>
			<input
				class="input flex-1 bg-surface-800/50"
				type="email"
				placeholder="your@email.com"
				bind:value={newsletterEmail}
			/>
			<button
				type="submit"
				class="btn preset-filled-primary-500 btn-shine gap-2 uppercase tracking-widest text-xs font-black"
			>
				<Mail size={16} /><span>Subscribe</span>
			</button>
		</form>
	</div>
</Section>
