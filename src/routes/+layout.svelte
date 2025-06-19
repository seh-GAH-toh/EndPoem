<script>
	import SvelteSeo from 'svelte-seo';
	import '../app.css';

	let { children } = $props();
</script>

<SvelteSeo
	title="End Poem by Julian Gough"
	description="The End Poem is a freehand poem written by Julian Gough that appears when the player finishes Minecraft. It has been in the public domain since 2022."
	keywords="minecraft, julian, gough, julian gough, poem, end, end poem, the end, the end poem, minecraft poem, julian gough poem, julian gough minecraft"
	applicationName="End Poem"
	themeColor="#f2f2f2"
	notranslate="true"
	canonical="https://theendpoem.com/"
	twitter={{
		title: 'End Poem by Julian Gough',
		description:
			'The End Poem is a freehand poem written by Julian Gough that appears when the player finishes Minecraft. It has been in the public domain since 2022.',
		image: 'https://theendpoem.com/card_twitter.jpg',
		imageAlt: 'A light background with soft, dark lettering: End Poem by Julian Gough.',
		card: 'summary_large_image'
	}}
	openGraph={{
		title: 'End Poem by Julian Gough',
		description:
			'The End Poem is a freehand poem written by Julian Gough that appears when the player finishes Minecraft. It has been in the public domain since 2022.',
		type: 'website',
		url: 'https://theendpoem.com/',
		locale: 'en_US',
		site_name: 'End Poem',
		images: [
			{
				url: 'https://theendpoem.com/card_og.jpg',
				secure_url: 'https://theendpoem.com/card_og.jpg',
				alt: 'A light background with soft, dark lettering: End Poem by Julian Gough.',
				width: '1200',
				height: '630',
				type: 'image/jpeg'
			}
		]
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'End Poem by Julian Gough',
		description:
			'The End Poem is a freehand poem written by Julian Gough that appears when the player finishes Minecraft. It has been in the public domain since 2022.',
		url: 'https://theendpoem.com/'
	}}
/>

{@render children()}
