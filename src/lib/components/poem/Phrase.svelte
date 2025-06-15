<script>
	import Obfuscated from './Obfuscated.svelte';
	import Part from './Part.svelte';

	let { poem } = $props();

	function tokenizePhrase(phrase) {
		const tokens = phrase.split(/<obfuscated>/);
		const parts = [];

		tokens.forEach((token, index) => {
			if (token) parts.push(token);
			if (index < tokens.length - 1) {
				parts.push('obfuscated');
			}
		});

		return parts;
	}
</script>

<h3
	class="text-base-text dark:text-base-text-dark font-base pb-6 text-2xl font-extrabold antialiased"
>
	End Poem.
</h3>
{#each poem as { entity, phrase }, index (index)}
	<p
		class={[
			'font-base text-base leading-7 antialiased transition-all duration-200 ease-in-out sm:leading-8 md:text-lg md:leading-10',
			entity
				? 'text-poem-green dark:text-poem-green-dark ml-10 italic sm:ml-12 md:ml-14'
				: 'text-poem-blue dark:text-poem-blue-dark font-medium'
		]}
	>
		{#each tokenizePhrase(phrase) as part, index (index)}
			{#if part != 'obfuscated'}
				<Part {part} />
			{:else}
				<Obfuscated />
			{/if}
		{/each}
	</p>
{/each}
