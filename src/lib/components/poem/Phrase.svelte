<script>
	import { fade } from 'svelte/transition';
	import Obfuscated from './Obfuscated.svelte';
	import { tick } from 'svelte';

	let { poem, duration } = $props();

	let revealedLines = $state([]);

	let currentLineIndex = 0;
	let isRunning = false;

	function splitPhraseIntoSegments(phrase) {
		const rawSegments = phrase.split(/<obfuscated>/);
		const structuredSegments = [];

		rawSegments.forEach((segment, i) => {
			if (segment) structuredSegments.push(segment);
			if (i < rawSegments.length - 1) {
				structuredSegments.push('obfuscated');
			}
		});

		return structuredSegments;
	}

	function revealNextLine() {
		if (!isRunning && currentLineIndex < poem.length) {
			isRunning = true;
			revealedLines.push(poem[currentLineIndex]);
		}
	}

	function onAnimationComplete() {
		isRunning = false;
		currentLineIndex++;
		revealNextLine();
	}

	$effect(() => revealNextLine());
</script>

<h3
	class="text-base-text dark:text-base-text-dark font-base pb-6 text-2xl font-extrabold antialiased"
>
	End Poem.
</h3>
{#each revealedLines as { entity, phrase }, lineIndex (lineIndex)}
	<p
		transition:fade={{ duration }}
		onintroend={onAnimationComplete}
		class={[
			'font-base break-words text-base leading-7 antialiased transition-all duration-200 ease-in-out sm:leading-8 md:text-lg md:leading-10',
			entity
				? 'text-poem-green dark:text-poem-green-dark ml-10 italic sm:ml-12 md:ml-14'
				: 'text-poem-blue dark:text-poem-blue-dark font-medium'
		]}
	>
		{#each splitPhraseIntoSegments(phrase) as segment, segmentIndex (segmentIndex)}
			{#if segment != 'obfuscated'}
				{segment}
			{:else}
				<Obfuscated />
			{/if}
		{/each}
	</p>
{/each}
