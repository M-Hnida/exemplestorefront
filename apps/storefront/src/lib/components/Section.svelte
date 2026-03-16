<script lang="ts">
	let { children, class: className = "", id = "", fullWidth = false } = $props();
</script>

<section {id} class="mt-10 md:mt-16 {className}">
	{#if fullWidth}
		{@render children()}
	{:else}
		<div class="mx-auto max-w-7xl px-4 md:px-8">
			{@render children()}
		</div>
	{/if}
</section>
