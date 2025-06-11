<script>
	import Obfuscated from './Obfuscated.svelte';

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

	/*
	function textGenerator(node) {
		const fullText = node.textContent.split(' ') || '';
		const animationDuration = fullText.length / (1 * 0.01);
		console.log(fullText);
		return {
			duration: animationDuration,
			tick: (progress) => {
				const charsToShow = ~~(fullText.length * progress);
				node.textContent = fullText.slice(0, charsToShow);
			}
		};
	}
	*/
</script>

<h3
	class="text-base-text dark:text-base-text-dark font-base pb-6 text-2xl font-extrabold antialiased"
>
	End Poem.
</h3>
{#each poem as { entity, phrase }, index (index)}
	<p
		class={[
			'font-base fade-in text-base leading-7 antialiased transition-all duration-200 ease-in-out sm:leading-8 md:text-lg md:leading-10',
			entity
				? 'text-poem-green dark:text-poem-green-dark italic'
				: 'text-poem-blue dark:text-poem-blue-dark'
		]}
	>
		{#each tokenizePhrase(phrase) as part, index (index)}
			{#if part != 'obfuscated'}
				{part}
			{:else}
				<Obfuscated />
			{/if}
		{/each}
	</p>
{/each}
