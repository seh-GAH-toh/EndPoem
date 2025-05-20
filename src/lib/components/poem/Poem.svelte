<script lang="ts">
	import { formState } from '$lib/state.svelte.js';
	import Phrase from './Phrase.svelte';
</script>

<section class="flex min-h-full w-full justify-center py-48">
	<article class="h-full w-7/12">
		<h3 class="text-base-text pb-6 text-2xl font-extrabold antialiased">End Poem.</h3>
		{#each formState.poem as entrie}
			<Phrase entity={entrie.entity} phrase={entrie.phrase} />
		{/each}
	</article>
</section>
