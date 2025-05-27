<script lang="ts">
	import { scale } from 'svelte/transition';

	let { src } = $props();
</script>

<img transition:scale {src} alt="silly cat" class="w-full rounded-2xl shadow" />
