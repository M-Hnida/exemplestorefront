<script lang="ts">
	import { Accordion } from "@skeletonlabs/skeleton-svelte";
	import { ChevronDown } from "@lucide/svelte";
	import { slide } from "svelte/transition";
	import Section from "./Section.svelte";

	let { faqItems = [] } = $props();
</script>

<Section id="faq">
	<div class="flex items-end border-b border-surface-700 pb-4 mb-8">
		<div>
			<p
				class="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-primary-400 mb-1"
			>
				Support
			</p>
			<h2
				class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none"
				style="font-family: 'Space Grotesk', sans-serif;"
			>
				Frequently Asked
			</h2>
		</div>
	</div>

	<Accordion collapsible>
		{#each faqItems as item, i (item)}
			{#if i !== 0}<hr class="border-surface-800" />{/if}
			<Accordion.Item value={item.id}>
				<h3>
					<Accordion.ItemTrigger
						class="font-bold flex items-center justify-between gap-2 py-4 w-full text-left text-sm uppercase tracking-widest"
					>
						{item.title}
						<Accordion.ItemIndicator class="group">
							<ChevronDown
								class="h-5 w-5 shrink-0 transition-transform group-data-[state=open]:rotate-180 text-primary-400"
							/>
						</Accordion.ItemIndicator>
					</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>
					{#snippet element(attributes)}
						{#if !attributes.hidden}
							<div
								{...attributes}
								transition:slide={{ duration: 150 }}
							>
								<p
									class="pb-4 text-sm leading-relaxed text-surface-400"
								>
									{item.description}
								</p>
							</div>
						{/if}
					{/snippet}
				</Accordion.ItemContent>
			</Accordion.Item>
		{/each}
	</Accordion>
</Section>
