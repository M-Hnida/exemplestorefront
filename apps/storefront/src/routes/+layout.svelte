<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import CartDrawer from "$lib/components/CartDrawer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
<CartDrawer />

<style>
	@import "tailwindcss";
	@import "@skeletonlabs/skeleton";
	@import "@skeletonlabs/skeleton-svelte";
	/* Theme: must match data-theme in app.html */
	@import "@skeletonlabs/skeleton/themes/nosh";

	:global {

	body {
		font-family: "Inter", system-ui, sans-serif;
		letter-spacing: -0.01em;
		overflow-x: hidden;
		background: var(--color-surface-950);
		color: var(--color-surface-50);
	}

	html {
		scroll-behavior: smooth;
	}

	/* Hero */
	.hero-gradient {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0.55) 30%,
			rgba(0, 0, 0, 0.55) 60%,
			rgba(0, 0, 0, 0.92) 100%
		);
	}

	.hero-text-glow {
		text-shadow:
			0 0 60px rgba(var(--color-primary-500), 0.3),
			0 0 120px rgba(var(--color-primary-500), 0.15);
	}

	/* Product cards */
	.product-card {
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		border: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(255, 255, 255, 0.03);
	}

	.product-card:hover {
		transform: translateY(-8px);
		border-color: rgba(var(--color-primary-500), 0.3);
		box-shadow:
			0 20px 40px rgba(0, 0, 0, 0.4),
			0 0 40px rgba(var(--color-primary-500), 0.08);
	}

	.product-card:hover .product-image {
		transform: scale(1.05);
	}

	.product-card:hover .wishlist-btn {
		opacity: 1 !important;
		transform: translateX(0);
	}

	.product-card:hover .quick-view-overlay {
		opacity: 1;
	}

	.product-image {
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.wishlist-btn {
		opacity: 0 !important;
		transform: translateX(8px);
		transition: all 0.3s ease;
	}

	.quick-view-overlay {
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	/* Badge glow */
	.badge-pulse {
		animation: badge-glow 2s ease-in-out infinite;
	}

	@keyframes badge-glow {
		0%, 100% { box-shadow: 0 0 8px rgba(var(--color-error-500), 0.4); }
		50% { box-shadow: 0 0 20px rgba(var(--color-error-500), 0.7); }
	}

	/* Shine effect */
	.btn-shine {
		position: relative;
		overflow: hidden;
	}

	.btn-shine::after {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 50%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
		transition: left 0.6s ease;
	}

	.btn-shine:hover::after {
		left: 150%;
	}

	/* Marquee */
	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee 25s linear infinite;
	}

	@keyframes marquee {
		from { transform: translateX(0); }
		to { transform: translateX(-50%); }
	}

	/* Gradient border */
	.gradient-border {
		position: relative;
	}

	.gradient-border::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg,
			transparent 5%,
			rgba(var(--color-primary-500), 0.5),
			rgba(var(--color-tertiary-500), 0.5),
			transparent 95%
		);
	}

	/* Animated gradient */
	.animated-gradient {
		background-size: 200% 200%;
		animation: gradient-shift 6s ease infinite;
	}

	@keyframes gradient-shift {
		0% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
		100% { background-position: 0% 50%; }
	}

	/* Feature card */
	.feature-card {
		transition: all 0.3s ease;
		border: 1px solid rgba(255, 255, 255, 0.06);
	}

	.feature-card:hover {
		transform: translateY(-4px);
		border-color: rgba(var(--color-primary-500), 0.2);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
	}

	.feature-card:hover .feature-icon {
		transform: scale(1.15) rotate(-5deg);
	}

	.feature-icon {
		transition: transform 0.3s ease;
	}

	/* Glass */
	.glass-card {
		backdrop-filter: blur(16px);
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	/* Section glow divider */
	.section-glow::before {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 160px;
		height: 2px;
		background: linear-gradient(90deg, transparent, rgba(var(--color-primary-500), 0.6), transparent);
	}

	/* Glow dot */
	.glow-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: rgba(var(--color-primary-500), 1);
		box-shadow: 0 0 12px rgba(var(--color-primary-500), 0.6);
	}

	/* Scrollbar */
	::-webkit-scrollbar { width: 6px; }
	::-webkit-scrollbar-track { background: transparent; }
	::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.12); border-radius: 3px; }
	::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.25); }

	/* Horizontal scroll snap */
	.scroll-snap-x {
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
	}
	.scroll-snap-x::-webkit-scrollbar { display: none; }
	.snap-center { scroll-snap-align: center; }

	} /* end :global */
</style>
