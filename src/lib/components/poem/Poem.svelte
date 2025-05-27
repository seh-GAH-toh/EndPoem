<script lang="ts">
	import { fade } from 'svelte/transition';
	import { formState } from '$lib/state.svelte.js';
	import Phrase from './Phrase.svelte';
	import Image from './Image.svelte';
</script>

<section
	transition:fade
	class="flex min-h-full w-full justify-center py-16 transition-all duration-300 ease-in-out md:py-24 lg:py-48"
>
	<article
		class="h-full w-10/12 transition-all duration-300 ease-in-out sm:w-9/12 md:w-8/12 lg:w-7/12"
	>
		{#if typeof formState.poem === 'object'}
			<Phrase />
		{:else}
			<Image />
		{/if}
	</article>
</section>
