<script>
	import { menuState } from '$lib/states/menu.svelte.js';

	function handleClick() {
		// Close api dialog
		if (menuState.isApiOpen) menuState.isApiOpen = false;
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
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke="currentColor"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M12 8H12" opacity="0">
				<animate attributeName="opacity" begin="0.2s" dur="0.2s" to="1" fill="freeze" />
			</path>
			<path
				stroke-dasharray="10"
				stroke-dashoffset="10"
				d="M11.25 11.2499L11.291 11.2299C11.4192 11.1659 11.5631 11.1399 11.7057 11.1551C11.8482 11.1703 11.9834 11.226 12.0952 11.3157C12.2071 11.4053 12.2909 11.5251 12.3368 11.6609C12.3826 11.7967 12.3886 11.9428 12.354 12.0819L11.646 14.9179C11.6111 15.0571 11.6169 15.2034 11.6627 15.3393C11.7084 15.4753 11.7922 15.5953 11.9041 15.6851C12.016 15.7749 12.1513 15.8307 12.294 15.8459C12.4367 15.8611 12.5807 15.8351 12.709 15.7709L12.75 15.7499"
			>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.4s"
					dur="0.4s"
					values="10;0"
				/>
			</path>
			<path
				stroke-dasharray="60"
				stroke-dashoffset="60"
				d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
			>
				<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.8s" values="60;0" />
			</path>
		</svg>
	</button>
</li>
