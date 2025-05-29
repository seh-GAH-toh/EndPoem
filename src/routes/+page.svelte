<script>
	import Home from '$lib/components/home/Home.svelte';
	import Poem from '$lib/components/poem/Poem.svelte';

	import { poemState } from '$lib/states/poem.svelte.js';
</script>

{#if !poemState.wasNameSubmited}
	<Home />
{:else}
	<Poem />
{/if}
