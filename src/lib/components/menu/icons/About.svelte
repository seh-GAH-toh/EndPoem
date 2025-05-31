<script>
	import { menuState } from '$lib/states/menu.svelte.js';

	function handleClick() {
		menuState.isAboutOpen = !menuState.isAboutOpen;
	}
</script>

<li class="flex aspect-square w-6">
	<button
		onclick={handleClick}
		class="outline-base-text dark:outline-base-text-dark w-full cursor-pointer focus:outline-1"
		aria-label="About"
		title="About"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			class="w-full fill-none stroke-current stroke-[1.5]"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
			/>
		</svg>
	</button>
</li>
