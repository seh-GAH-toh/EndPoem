<script>
	let { part } = $props();

	let text = part.split(' ');

	function rola(node, { delay = 0, duration = 1000 }) {
		const chars = '!@#$%^&*()_+=-[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const original = text.split('');
		let current = [...original].map((char) => (char === ' ' ? ' ' : randomChar()));
		let interval;

		function randomChar() {
			return chars[Math.floor(Math.random() * chars.length)];
		}

		return {
			delay,
			duration,
			tick: (t) => {
				if (interval) clearInterval(interval);
				const length = original.length;
				let progress = 0;

				interval = setInterval(() => {
					for (let i = 0; i < length; i++) {
						if (i <= progress) {
							current[i] = original[i];
						} else if (original[i] !== ' ') {
							current[i] = randomChar();
						}
					}
					node.textContent = current.join('');
					progress++;
					if (progress > length) clearInterval(interval);
				}, duration / length);
			}
		};
	}
</script>

{#each text as t, index (index)}
	<p transition:rola={{ delay: index * 100 }}>{t}</p>
{/each}
