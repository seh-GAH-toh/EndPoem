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
			<h3 class="text-base-text pb-6 text-2xl font-extrabold antialiased">End Poem.</h3>
			{#each formState.poem as { entity, phrase }}
				<Phrase {entity} {phrase} />
			{/each}
		{:else}
			<h3 class="text-base-text pb-6 text-2xl font-extrabold antialiased">GET CATED</h3>
			<Image src={formState.poem} />
			<p class="py-2 text-xl italic">
				No, really, why did you typed your e-mail on a random website?
			</p>
		{/if}
	</article>
</section>
