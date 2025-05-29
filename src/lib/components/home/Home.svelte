<script>
	import { fade } from 'svelte/transition';

	import Title from '$lib/components/home/Title.svelte';
	import Form from '$lib/components/home/form/Form.svelte';
</script>

<section
	transition:fade
	class="fade-in flex h-full w-full flex-col items-center justify-center gap-12"
>
	<Title />
	<Form />
</section>
