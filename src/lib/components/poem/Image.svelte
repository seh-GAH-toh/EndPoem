<script lang="ts">
	import { formState } from '$lib/state.svelte';
	import { scale } from 'svelte/transition';
</script>

<h3 class="text-base-text pb-6 text-2xl font-extrabold antialiased">GET CATED</h3>
<img transition:scale SRC={formState.poem} alt="silly cat" class="w-full rounded-2xl shadow" />
<p class="w-full py-2 text-center text-xl italic">
	No, really, why did you typed your e-mail on a random website?
</p>
