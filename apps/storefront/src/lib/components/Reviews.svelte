<script lang="ts">
	import { Quote } from "@lucide/svelte";
	import { Avatar } from "@skeletonlabs/skeleton-svelte";
	import Section from "./Section.svelte";

	let { reviews = [] } = $props();

	function renderStars(rating: number): string {
		const full = Math.round(rating);
		return "★".repeat(full) + "☆".repeat(5 - full);
	}
</script>

<Section id="reviews">
	<div class="flex items-end border-b border-surface-700 pb-4 mb-8">
		<div>
			<p
				class="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-primary-400 mb-1"
			>
				Testimonials
			</p>
			<h2
				class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none"
				style="font-family: 'Space Grotesk', sans-serif;"
			>
				What People Say
			</h2>
		</div>
	</div>

	<div class="grid gap-px md:grid-cols-3 bg-surface-800 border border-surface-800">
		{#each reviews as review (review.name)}
			<div class="bg-surface-950 p-6 space-y-6">
				<Quote size={20} class="text-primary-500/40" />
				<p class="text-sm leading-relaxed text-surface-300">
					{review.text}
				</p>
				<div
					class="flex items-center gap-3 pt-2 border-t border-surface-800"
				>
					<Avatar class="size-9">
						<Avatar.Image src={review.avatar} alt={review.name} />
						<Avatar.Fallback>{review.name.charAt(0)}</Avatar.Fallback>
					</Avatar>
					<div class="flex-1">
						<p class="text-xs font-black uppercase tracking-widest">
							{review.name}
						</p>
						<p
							class="text-[0.6rem] text-surface-500 uppercase tracking-widest"
						>
							{review.product}
						</p>
					</div>
					<span class="text-xs text-warning-400"
						>{renderStars(review.rating)}</span
					>
				</div>
			</div>
		{/each}
	</div>
</Section>
