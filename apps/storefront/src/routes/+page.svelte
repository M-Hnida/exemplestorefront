<script lang="ts">
	import {
		Star,
		Flame,
		Tag,
		Truck,
		Shield,
		RotateCcw,
		Mail,
		Zap,
		Sparkles,
		Package,
	} from "@lucide/svelte";
	import type { PageData } from "./$types";
	import { goto } from "$app/navigation";
	import { cartState } from "$lib/stores/cart.svelte";
	import { PLACEHOLDER_IMAGE, PRODUCTS } from "$lib/data";

	// Components
	import Navbar from "$lib/components/Navbar.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Features from "$lib/components/Features.svelte";
	import ProductGrid from "$lib/components/ProductGrid.svelte";
	import Reviews from "$lib/components/Reviews.svelte";
	import PromoBanner from "$lib/components/PromoBanner.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import Newsletter from "$lib/components/Newsletter.svelte";

	// --- Props (server data) ---
	let { data }: { data: PageData } = $props();

	// --- State ---
	let activeCategory = $state("all");
	let activeSize = $state("M");
	let searchQuery = $state("");
	let showMobileMenu = $state(false);
	let newsletterEmail = $state("");

	// --- Constants ---
	const CATEGORIES = [
		{ id: "all", label: "All Items", icon: Sparkles },
		{ id: "tees", label: "Tees", icon: Flame },
		{ id: "hoodies", label: "Hoodies", icon: Zap },
		{ id: "jackets", label: "Jackets", icon: Shield },
		{ id: "bottoms", label: "Bottoms", icon: Tag },
		{ id: "footwear", label: "Footwear", icon: Star },
	];
	const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];



	const FEATURES = [
		{
			icon: Truck,
			title: "Free Shipping",
			description: "On orders over $75",
			color: "text-primary-400",
		},
		{
			icon: Shield,
			title: "Secure Payment",
			description: "256-bit SSL encrypted",
			color: "text-tertiary-400",
		},
		{
			icon: RotateCcw,
			title: "Easy Returns",
			description: "30-day return policy",
			color: "text-success-400",
		},
		{
			icon: Package,
			title: "Premium Quality",
			description: "Handpicked materials",
			color: "text-warning-400",
		},
	];

	const REVIEWS = [
		{
			name: "Alex M.",
			avatar: "https://i.pravatar.cc/80?img=12",
			rating: 5,
			text: "Insane quality. The hoodie feels premium and the fit is perfect. Already ordered two more.",
			product: "Grunge Riot Hoodie",
		},
		{
			name: "Jordan K.",
			avatar: "https://i.pravatar.cc/80?img=33",
			rating: 5,
			text: "Best streetwear I've found online. Fast shipping and the jacket is 🔥",
			product: "Rebel Bomber Jacket",
		},
		{
			name: "Sam R.",
			avatar: "https://i.pravatar.cc/80?img=47",
			rating: 4,
			text: "Love the aesthetic. Unique pieces you won't find anywhere else. The tee runs slightly large.",
			product: "Skull Voltage Tee",
		},
	];

	const FAQ_ITEMS = [
		{
			id: "faq-1",
			title: "What is your return policy?",
			description:
				"We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original packaging with tags attached. Contact returns@riffriotwear.com to start your return.",
		},
		{
			id: "faq-2",
			title: "How long does shipping take?",
			description:
				"Standard shipping takes 5-7 business days. Express shipping is 2-3 business days. Free standard shipping on orders over $75. International shipping is available to most countries.",
		},
		{
			id: "faq-3",
			title: "Do you ship internationally?",
			description:
				"Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by destination. Customs duties and taxes are the responsibility of the recipient.",
		},
		{
			id: "faq-4",
			title: "How do I track my order?",
			description:
				"Once your order ships, you'll receive a confirmation email with a tracking number. You can use this to track your package on the carrier's website.",
		},
	];

	// --- Medusa integration ---
	let hasMedusaData = $derived(data.products.length > 0);

	let displayProducts = $derived(
		hasMedusaData
			? data.products.map((p: any) => ({
					id: p.id,
					name: p.title ?? "Untitled",
					price:
						p.variants?.[0]?.calculated_price?.calculated_amount ??
						0,
					originalPrice:
						p.variants?.[0]?.calculated_price?.original_amount ??
						null,
					image:
						p.thumbnail ?? p.images?.[0]?.url ?? PLACEHOLDER_IMAGE,
					category:
						p.collection?.title?.toLowerCase() ??
						p.type?.value?.toLowerCase() ??
						"all",
					badge: (p.metadata?.badge as string | null) ?? null,
					badgePreset: (p.metadata?.badge_preset as string) ?? "",
					rating: 4.5,
					reviews: 0,
				}))
			: PRODUCTS,
	);

	let filteredProducts = $derived(
		displayProducts.filter((p) => {
			const matchesCategory =
				activeCategory === "all" || p.category === activeCategory;
			const matchesSearch =
				searchQuery === "" ||
				p.name.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		}),
	);

	// --- Functions ---
	function handleAddToCart(product: any) {
		cartState.addItem(product);
	}
</script>

<svelte:head>
	<title>Riff Riot Wear — Streetwear That Screams</title>
	<meta
		name="description"
		content="Premium punk, grunge, and metal-inspired streetwear. Tees, hoodies, jackets, and more."
	/>
</svelte:head>

<Navbar
	bind:searchQuery
	bind:showMobileMenu
	bind:activeCategory
	categories={CATEGORIES}
/>

<Hero />

<Features features={FEATURES} />

<ProductGrid
	categories={CATEGORIES}
	bind:activeCategory
	bind:activeSize
	sizes={SIZES}
	{filteredProducts}
	onAddToCart={handleAddToCart}
/>

<Reviews reviews={REVIEWS} />

<PromoBanner />

<FAQ faqItems={FAQ_ITEMS} />

<Newsletter bind:newsletterEmail />
