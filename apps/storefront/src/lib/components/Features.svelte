<script lang="ts">
	import Section from "./Section.svelte";
	let { features = [] } = $props();
</script>

<Section class="border-y border-surface-800 bg-surface-950 !mt-0">
	<div
		class="grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-800"
	>
		{#each features as feature (feature.title)}
			{@const Icon = feature.icon}
			<div
				class="flex flex-col gap-3 p-4 md:p-6 hover:bg-surface-900 transition-colors"
			>
				<Icon size={20} class={feature.color} />
				<p class="text-sm font-bold uppercase tracking-widest">
					{feature.title}
				</p>
				<p class="text-xs text-surface-500 leading-relaxed">
					{feature.description}
				</p>
			</div>
		{/each}
	</div>
</Section>
