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
		aria-label={!menuState.isApiOpen ? 'Open API Reference' : 'Close API Reference'}
		title="API Reference"
	>
		<svg
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-dasharray="80"
				stroke-dashoffset="0"
				d="M18.75 20.25H5.25C4.65326 20.25 4.08097 20.0129 3.65901 19.591C3.23705 19.169 3 18.5967 3 18V6C3 5.40326 3.23705 4.83097 3.65901 4.40901C4.08097 3.98705 4.65326 3.75 5.25 3.75H18.75C19.3467 3.75 19.919 3.98705 20.341 4.40901C20.7629 4.83097 21 5.40326 21 6V18C21 18.5967 20.7629 19.169 20.341 19.591C19.919 20.0129 19.3467 20.25 18.75 20.25Z"
			>
				<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s" values="85;0" />
			</path>
			<path stroke-dasharray="10" stroke-dashoffset="10" d="M6.75 7.5L9.75 9.75L6.75 12">
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.2s"
					dur="0.4s"
					values="11;0"
				/>
			</path>
			<path d="M11.25 12H14.25" stroke-dasharray="10" stroke-dashoffset="10">
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.5s"
					dur="0.4s"
					values="10;0"
				/>
				<animate
					attributeName="opacity"
					values="1;0;1"
					begin="1s"
					dur="2s"
					repeatCount="indefinite"
				/>
			</path>
		</svg>
	</button>
</li>
