<script>
	import { fade } from 'svelte/transition';
	import { poemState } from '$lib/states/poem.svelte.js';
	import Phrase from '$lib/components/poem/Phrase.svelte';
	import Image from '$lib/components/poem/Image.svelte';
	import Menu from '$lib/components/poem/menu/Menu.svelte';
</script>

<section
	transition:fade
	class="flex min-h-full w-full justify-center py-16 transition-all duration-300 ease-in-out md:py-24 lg:py-48"
>
	<Menu />
	<article
		class="h-full w-10/12 transition-all duration-300 ease-in-out sm:w-9/12 md:w-8/12 lg:w-7/12"
	>
		{#if typeof poemState.poem === 'object'}
			<Phrase poem={poemState.poem} />
		{:else}
			<Image src={poemState.poem} />
		{/if}
	</article>
</section>
