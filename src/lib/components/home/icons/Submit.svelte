<script>
	let { isDisabled } = $props();

	// Remove visual bug of icon animation showing up and disapearing
	// by running the animation on background
	let opacity = $state(0);
	setTimeout(() => {
		opacity = 1;
	}, 400);
</script>

<button
	type="submit"
	aria-label="submit"
	disabled={isDisabled}
	class=" bg-base-menu dark:bg-base-menu-dark outline-base-text dark:outline-base-text-dark text-base-text dark:text-base-text-dark absolute flex aspect-square h-full items-center justify-center rounded-3xl outline-0 focus:outline-1 disabled:cursor-not-allowed disabled:opacity-50"
>
	{#if isDisabled}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><g
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				{opacity}
				><path stroke-dasharray="16" stroke-dashoffset="0" d="M5 12h13.5"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.2s"
						dur="0.2s"
						values="0;16"
					/></path
				><path stroke-dasharray="10" stroke-dashoffset="0" d="M19 12l-5 5M19 12l-5 -5"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.2s"
						values="0;10"
					/></path
				></g
			></svg
		>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><g
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 12h13.5"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.2s"
						values="16;0"
					/></path
				><path stroke-dasharray="10" stroke-dashoffset="10" d="M19 12l-5 5M19 12l-5 -5"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.2s"
						dur="0.2s"
						values="10;0"
					/></path
				></g
			></svg
		>
	{/if}
</button>
