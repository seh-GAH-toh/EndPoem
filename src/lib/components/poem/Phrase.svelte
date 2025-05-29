<script>
	let { poem } = $props();

	let displayedLines = $state([]);

	let currentLineIndex = 0;
	let isTyping = false;

	let lastLine = $state();

	$effect(() => {
		if (!isTyping && currentLineIndex < poem.length) {
			revealNextLine();
		}
	});

	function revealNextLine() {
		if (currentLineIndex < poem.length) {
			isTyping = true;
			displayedLines.push(poem[currentLineIndex]);
		}
	}

	function onAnimationComplete() {
		isTyping = false;
		currentLineIndex++;
		revealNextLine();
		lastLine.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function typewriter(node) {
		const fullText = node.textContent || '';
		const animationDuration = fullText.length / (3 * 0.01);

		return {
			duration: animationDuration,
			tick: (progress) => {
				const charsToShow = ~~(fullText.length * progress);
				node.textContent = fullText.slice(0, charsToShow);
			}
		};
	}
</script>

<h3 class="text-base-text pb-6 text-2xl font-extrabold antialiased">End Poem.</h3>

{#each displayedLines as { entity, phrase }, i}
	<p
		in:typewriter
		onintroend={onAnimationComplete}
		bind:this={lastLine}
		class={[
			'fade-in text-base leading-7 antialiased transition-all duration-200 ease-in-out sm:leading-8 md:text-lg md:leading-10',
			entity ? 'text-poem-green' : 'text-poem-blue italic'
		]}
	>
		{phrase}
	</p>
{/each}
