<script>
	import Menu from '$lib/components/menu/Menu.svelte';
	import Home from '$lib/components/home/Home.svelte';
	import Poem from '$lib/components/poem/Poem.svelte';
	import AboutDialog from '$lib/components/dialogs/AboutDialog.svelte';

	import { poemState } from '$lib/states/poem.svelte.js';
</script>

<Menu />
{#if !poemState.wasNameSubmited}
	<Home />
{:else}
	<Poem />
{/if}
<AboutDialog />
