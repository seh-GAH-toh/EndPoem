<script>
	import { poemState } from '$lib/states/poem.svelte.js';

	async function togglePoemSpeed() {
		switch (poemState.speed) {
			case 600:
				poemState.speed = 1500;
				break;
			case 1500:
				poemState.speed = 1000;
				break;
			case 1000:
				poemState.speed = 600;
				break;
		}
	}

	function currentSpeed(speed) {
		if (speed === 1500) return 'Slow';
		if (speed === 1000) return 'Medium';
		else return 'Fast';
	}

	let getCurrentSpeed = $state(currentSpeed);
</script>

<li class="flex aspect-square w-6">
	<button
		class="outline-base-text dark:outline-base-text-dark w-full cursor-pointer focus:outline-1"
		aria-label={`Text Speed ${getCurrentSpeed(poemState.speed)}`}
		title={`Text Speed - ${getCurrentSpeed(poemState.speed)}`}
		onclick={togglePoemSpeed}
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><mask id="lineMdSpeed0"
				><path
					fill="none"
					stroke="#fff"
					stroke-dasharray="56"
					stroke-dashoffset="56"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.6s"
						values="56;0"
					/></path
				><g transform="rotate(-100 12 14)"
					><path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"
						><animate
							fill="freeze"
							attributeName="d"
							begin="0.4s"
							dur="0.2s"
							values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z"
						/></path
					><path
						fill="#fff"
						d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"
						><animate
							fill="freeze"
							attributeName="d"
							begin="0.4s"
							dur="0.2s"
							values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z"
						/></path
					>
					{#if poemState.speed === 1500}
						<animateTransform
							fill="freeze"
							attributeName="transform"
							begin="0.4s"
							dur="0.3s"
							type="rotate"
							values="-100 12 14;-45 12 14"
						/>
					{:else if poemState.speed === 1000}
						<animateTransform
							fill="freeze"
							attributeName="transform"
							begin="0.4s"
							dur="0.3s"
							type="rotate"
							values="-100 12 14;10 12 14"
						/>
					{:else}
						<animateTransform
							fill="freeze"
							attributeName="transform"
							begin="0.4s"
							dur="0.3s"
							type="rotate"
							values="-100 12 14;45 12 14"
						/>
					{/if}
				</g></mask
			><rect width="24" height="24" fill="currentColor" mask="url(#lineMdSpeed0)" /></svg
		>
	</button>
</li>
