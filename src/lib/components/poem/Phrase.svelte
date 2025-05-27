<script lang="ts">
	import { formState } from '$lib/state.svelte';

	function typewriter(node: HTMLElement) {
		const text = node.textContent;

		const duration = text.length / (2 * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<h3 class="text-base-text pb-6 text-2xl font-extrabold antialiased">End Poem.</h3>
{#each formState.poem as { entity, phrase }}
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
