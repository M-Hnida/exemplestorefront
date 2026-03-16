<script lang="ts">
	import { ArrowRight, ChevronDown } from "@lucide/svelte";
	import Section from "./Section.svelte";

	let {
		image = "images/heromodel.png",
		title = "riot.",
		subtitle = "Wear the statement. Built for the streets. Designed for the stage.",
		description = "Handcrafted underground drops. Spring/summer collection. Protection keep authentic.",
		season = "S26",
		brandLabel = "Riff / Riot",
		yearText = "Materials of\\nCreation 2026",
	} = $props();
</script>

<Section
	fullWidth={true}
	class="bg-surface-950 text-surface-50 w-full overflow-hidden flex flex-col min-h-[90vh] !mt-0"
	id="hero"
>
	<div class="mx-auto max-w-7xl w-full flex flex-col flex-1">
		<!-- Top meta row -->
		<div
			class="flex w-full items-center justify-between px-4 md:px-8 py-6 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-surface-400 border-b border-surface-800 relative z-20"
		>
			<div class="flex items-center gap-6 md:gap-16">
				<span class="text-primary-400">+1</span>
				<span>Collection</span>
			</div>
			<div class="hidden md:flex items-center gap-12">
				<a href="#shop" class="hover:text-surface-50 transition-colors"
					>Shop</a
				>
				<span
					class="flex items-center gap-1 hover:text-surface-50 transition-colors cursor-pointer"
					>New Arrivals <ChevronDown size={10} /></span
				>
				<span class="text-base -mt-1">···</span>
			</div>
		</div>

		<!-- Main split layout -->
		<div class="relative flex-1 w-full flex flex-col md:flex-row">
			<!-- LEFT: big type + labels -->
			<div
				class="w-full md:w-1/2 relative px-4 md:px-8 pt-8 md:pt-12 pb-16 flex flex-col justify-between z-10"
			>
				<!-- Top label columns -->
				<div class="hidden lg:flex flex-row gap-10 max-w-md mb-8">
					<div class="flex-1 border-t border-surface-600 pt-2">
						<p
							class="text-[0.6rem] font-bold uppercase tracking-widest mb-1 text-primary-400"
						>
							{brandLabel}
						</p>
						<p
							class="text-[0.45rem] leading-[1.8] uppercase text-surface-500 font-semibold max-w-[160px]"
						>
							{description}
						</p>
					</div>
					<div class="flex-1 border-t border-surface-600 pt-2 mt-5">
						<p
							class="text-[0.45rem] leading-[1.8] uppercase text-surface-500 font-semibold max-w-[160px]"
						>
							{subtitle}
						</p>
					</div>
				</div>

				<!-- Giant headline -->
				<h1
					class="text-[7rem] sm:text-[9rem] md:text-[10rem] lg:text-[13rem] font-bold tracking-[-0.05em] leading-[0.82] text-surface-50 lowercase break-all break-words"
					style="font-family: 'Space Grotesk', sans-serif;"
				>
					{title}
				</h1>

				<!-- Bottom CTA row -->
				<div class="mt-8 flex items-center gap-4 relative z-20">
					<a
						href="#shop"
						class="btn preset-filled-primary-500 btn-shine gap-2"
						><span>Shop Now</span><ArrowRight size={16} /></a
					>
					<a href="#reviews" class="btn preset-outlined gap-2"
						>See Reviews</a
					>
				</div>

				<!-- Rotated number — bottom left -->
				<div
					class="absolute bottom-6 left-6 md:left-10 hidden md:block select-none pointer-events-none"
				>
					<span
						class="p-10 block -rotate-90 origin-bottom-left text-[5rem] lg:text-[6rem] font-black tracking-tighter text-surface-700 leading-none"
						>001</span
					>
				</div>
			</div>

			<!-- RIGHT: image + tinted panel -->
			<div
				class="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full flex items-end justify-center md:justify-end overflow-hidden group"
			>
				<!-- Subtle gradient overlay on left to blend seamlessly with left section -->
				<div
					class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-950 to-transparent z-10 hidden md:block pointer-events-none"
				></div>

				<!-- Top gradient to blend with top section -->
				<div
					class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface-950 to-transparent z-10 pointer-events-none"
				></div>

				<!-- Image perfectly filling its container -->
				<img
					src={image}
					alt={title}
					class="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125 mix-blend-luminosity opacity-90 transition-transform duration-[2s]"
				/>

				<!-- Arrow CTA box -->
				<a
					href="#shop"
					class="absolute bottom-0 md:bottom-0 left-0 md:-left-12 h-14 w-14 bg-primary-500 hover:bg-primary-400 transition-colors flex items-center justify-center text-white z-20"
				>
					<ArrowRight size={22} />
				</a>

				<!-- Top-right annotation block -->
				<div
					class="absolute right-4 md:right-10 top-4 md:top-8 hidden lg:flex flex-col gap-1 text-right z-20 pointer-events-none"
				>
					<span
						class="text-[0.65rem] font-black uppercase tracking-widest text-primary-400"
						>{brandLabel}</span
					>
					<span
						class="text-[0.5rem] uppercase tracking-[0.15em] text-surface-400 leading-relaxed whitespace-pre-line text-right"
					>
						{yearText}
					</span>
					<div class="ml-auto mt-2 h-16 w-px bg-surface-600"></div>
				</div>

				<!-- Outlined ghost text on edge -->
				<div
					class="absolute bottom-32 right-[-1rem] text-[8rem] font-black tracking-tight rotate-90 origin-right text-transparent select-none hidden md:block pointer-events-none z-10"
					style="-webkit-text-stroke: 1px rgba(var(--color-surface-500), 0.5);"
				>
					{season}
				</div>
			</div>
		</div>
	</div>
</Section>
