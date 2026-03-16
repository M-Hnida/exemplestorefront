<svelte:head>
	<title>Contact Us — Riff Riot Wear</title>
	<meta name="description" content="Contact Riff Riot Wear — get in touch with our support team for questions about orders, products, or partnerships." />
</svelte:head>

<script lang="ts">
	import { Mail, MapPin, Clock } from "@lucide/svelte";

	let name = $state("");
	let email = $state("");
	let subject = $state("general");
	let message = $state("");
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
	}
</script>

<main class="mx-auto max-w-3xl space-y-10 px-4 py-16">
	<h1 class="h1 text-4xl font-black uppercase tracking-wider" style="font-family: 'Space Grotesk', sans-serif;">
		Contact Us
	</h1>
	<p class="text-lg opacity-70">
		Got a question? We'd love to hear from you. Fill out the form below or reach us directly.
	</p>

	<div class="grid gap-8 md:grid-cols-3">
		<div class="card preset-tonal-surface flex items-start gap-3 p-5">
			<Mail size={20} class="mt-0.5 shrink-0 text-primary-500" />
			<div>
				<p class="font-bold">Email</p>
				<a href="mailto:hello@riffriotwear.com" class="text-sm text-primary-500 underline">hello@riffriotwear.com</a>
			</div>
		</div>
		<div class="card preset-tonal-surface flex items-start gap-3 p-5">
			<MapPin size={20} class="mt-0.5 shrink-0 text-primary-500" />
			<div>
				<p class="font-bold">Location</p>
				<p class="text-sm opacity-60">Online only — worldwide shipping</p>
			</div>
		</div>
		<div class="card preset-tonal-surface flex items-start gap-3 p-5">
			<Clock size={20} class="mt-0.5 shrink-0 text-primary-500" />
			<div>
				<p class="font-bold">Response Time</p>
				<p class="text-sm opacity-60">Within 24 hours</p>
			</div>
		</div>
	</div>

	{#if submitted}
		<div class="card preset-tonal-primary space-y-2 p-8 text-center">
			<p class="h3 font-bold">Message Sent! 🤘</p>
			<p class="opacity-70">We'll get back to you within 24 hours.</p>
			<button type="button" class="btn preset-filled-primary-500 mt-4" onclick={() => (submitted = false)}>
				Send Another
			</button>
		</div>
	{:else}
		<form class="space-y-6" onsubmit={handleSubmit}>
			<div class="grid gap-4 sm:grid-cols-2">
				<label class="label">
					<span class="label-text">Name</span>
					<input class="input" type="text" placeholder="Your name" bind:value={name} required />
				</label>
				<label class="label">
					<span class="label-text">Email</span>
					<input class="input" type="email" placeholder="your@email.com" bind:value={email} required />
				</label>
			</div>

			<label class="label">
				<span class="label-text">Subject</span>
				<select class="select" bind:value={subject}>
					<option value="general">General Inquiry</option>
					<option value="order">Order Issue</option>
					<option value="return">Return / Exchange</option>
					<option value="partnership">Partnership</option>
					<option value="press">Press / Media</option>
				</select>
			</label>

			<label class="label">
				<span class="label-text">Message</span>
				<textarea class="input min-h-[150px]" placeholder="Tell us what's up..." bind:value={message} required></textarea>
			</label>

			<button type="submit" class="btn preset-filled-primary-500 btn-shine">
				<Mail size={16} />
				<span>Send Message</span>
			</button>
		</form>
	{/if}
</main>
