<script>
	import Home from '$lib/components/home/Home.svelte';
	import Poem from '$lib/components/poem/Poem.svelte';

	import { formState } from '$lib/state.svelte.js';
</script>

<main class="h-full w-full p-4">
	{#if !formState.isSubmited}
		<Home />
	{:else}
		<Poem />
	{/if}
</main>
