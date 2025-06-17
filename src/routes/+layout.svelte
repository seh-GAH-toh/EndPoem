<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>End Poem by Julian Gough</title>
	<meta
		name="description"
		content="The End Poem is a freehand poem written by Julian Gough that appears when the player finishes Minecraft. It has been in the public domain since 2022."
	/>
	<meta property="og:title" content="End Poem by Julian Gough" />
	<meta
		property="og:description"
		content="The End Poem is a freehand poem written by Julian Gough that appears when the player finishes Minecraft. It has been in the public domain since 2022."
	/>
	<meta property="og:url" content="https://www.theendpoem.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en" />
	<meta name="twitter:card" content="summary_large_image" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Julian Gough",
			"sameAs": ["https://www.juliangough.com"]
		}
	</script>
</svelte:head>

{@render children()}
