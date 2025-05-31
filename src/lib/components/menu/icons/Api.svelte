<script>
	import { menuState } from '$lib/states/menu.svelte.js';

	function handleClick() {
		// Close about dialog
		if (menuState.isAboutOpen) menuState.isAboutOpen = false;
		menuState.isApiOpen = !menuState.isApiOpen;
	}
</script>

<li class="flex aspect-square w-6">
	<button
		onclick={handleClick}
		class="outline-base-text dark:outline-base-text-dark w-full cursor-pointer focus:outline-1"
		aria-label="API"
		title="API"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-full fill-none stroke-current stroke-[1.5]"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
			/>
		</svg>
	</button>
</li>
