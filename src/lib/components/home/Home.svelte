<script>
	import { fade } from 'svelte/transition';

	import Title from '$lib/components/home/Title.svelte';
	import Form from '$lib/components/home/Form.svelte';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<section transition:fade class="flex h-full w-full flex-col items-center justify-center gap-12">
		<Title />
		<Form />
	</section>
{/if}
