<script>
	import { scale } from 'svelte/transition';

	let { src } = $props();
</script>

<h3 class="text-base-text dark:text-base-text-dark pb-6 text-2xl font-extrabold antialiased">
	GET CATED
</h3>
<img
	transition:scale
	{src}
	alt="silly cat"
	class="text-base-text dark:text-base-text-dark w-full rounded-2xl shadow"
/>
<p class="text-base-text dark:text-base-text-dark w-full py-2 text-center text-xl italic">
	No, really, why did you typed your e-mail on a random website?
</p>
