<script>
	import Title from '$lib/components/home/Title.svelte';
	import Form from '$lib/components/home/Form.svelte';
	import { fade } from 'svelte/transition';
</script>

<section
	transition:fade
	class="fade-in flex h-full w-full flex-col items-center justify-center gap-12"
>
	<Title />
	<Form />
</section>
