<script>
	let { poem, speed } = $props();

	let currentLineIndex = 0;
	let isRunning = false;

	let displayedLines = $state([]);
	let lastLine = $state();

	function revealNextLine() {
		if (!isRunning && currentLineIndex < poem.length) {
			isRunning = true;
			displayedLines.push(poem[currentLineIndex]);
		}
	}

	$effect(() => revealNextLine());

	function onAnimationComplete() {
		isRunning = false;
		currentLineIndex++;
		revealNextLine();
	}

	function typewriter(node) {
		const fullText = node.textContent || '';
		const animationDuration = fullText.length / (speed * 0.01);

		return {
			duration: animationDuration,
			tick: (progress) => {
				const charsToShow = ~~(fullText.length * progress);
				node.textContent = fullText.slice(0, charsToShow);
			}
		};
	}
</script>

<h3
	class="text-base-text dark:text-base-text-dark font-base pb-6 text-2xl font-extrabold antialiased"
>
	End Poem.
</h3>
{#each displayedLines as { entity, phrase }, i}
	<p
		in:typewriter
		onintroend={onAnimationComplete}
		bind:this={lastLine}
		class={[
			'font-base fade-in text-base leading-7 antialiased transition-all duration-200 ease-in-out sm:leading-8 md:text-lg md:leading-10',
			entity
				? 'text-poem-green dark:text-poem-green-dark italic'
				: 'text-poem-blue dark:text-poem-blue-dark'
		]}
	>
		{phrase}
	</p>
{/each}
