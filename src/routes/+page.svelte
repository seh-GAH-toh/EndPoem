<script>
	import Home from '$lib/components/home/Home.svelte';
	import Poem from '$lib/components/poem/Poem.svelte';

	import { formState } from '$lib/state.svelte.js';
</script>

{#if !formState.isSubmited}
	<Home />
{:else}
	<Poem />
{/if}
