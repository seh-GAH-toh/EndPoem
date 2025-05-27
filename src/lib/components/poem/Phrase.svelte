<script lang="ts">
	let { phrase, entity, finished = $bindable(false) } = $props();

	function typewriter(node: HTMLElement, { speed = 1 }: { speed?: number }) {
		const text = node.textContent;

		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	finished = true;
</script>

<p
	in:typewriter={{ speed: 2 }}
	class="text-poem-green text-base leading-7 antialiased transition-all duration-200 ease-in-out sm:leading-8 md:text-lg md:leading-10"
>
	{phrase}
</p>
