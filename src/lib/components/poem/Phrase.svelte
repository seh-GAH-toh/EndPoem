<script>
	let { poem } = $props();
	let visibleLines = 0;

	function typewriter(node) {
		const text = node.textContent || '';
		const duration = text.length * 50; // 50ms per character

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	// Reveal next line after animation
	async function revealLinesSequentially() {
		for (let i = 0; i < poem.length; i++) {
			visibleLines = i + 1;
			await new Promise((resolve) => {
				// Wait for the animation to finish before continuing
				const text = poem[i].phrase;
				const duration = text.length * 50;
				setTimeout(resolve, duration);
			});
		}
	}
	revealLinesSequentially();
</script>

<h3 class="text-base-text pb-6 text-2xl font-extrabold antialiased">End Poem.</h3>
{#each poem.slice(0, visibleLines) as { entity, phrase }}
	<p
		in:typewriter
		class={[
			'text-base leading-7 antialiased transition-all duration-200 ease-in-out sm:leading-8 md:text-lg md:leading-10',
			entity ? 'text-poem-green' : 'text-poem-blue italic'
		]}
	>
		{phrase}
	</p>
{/each}
