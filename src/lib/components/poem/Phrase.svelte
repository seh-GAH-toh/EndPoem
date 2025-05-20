<script lang="ts">
	let { phrase, entity, finished = $bindable() } = $props();

	finished = false;

	const words = phrase.split(' ');

	let line = $state('');

	for (let i = 0; i < words.length; i++) {
		setTimeout(() => {
			line += words[i] + ' ';
		}, i * 200);
		finished = true;
	}
</script>

<p class="text-poem-green text-lg leading-10 antialiased">
	{line}
</p>
