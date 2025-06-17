<script>
	import MenuIcon from '$lib/components/menu/icons/MenuIcon.svelte';
	import About from '$lib/components/menu/icons/About.svelte';
	import Api from '$lib/components/menu/icons/Api.svelte';
	import Github from '$lib/components/menu/icons/Github.svelte';
	import TextSpeed from '$lib/components/menu/icons/TextSpeed.svelte';

	import { fade, slide } from 'svelte/transition';

	let isMenuOpen = $state(false);
	let firsApareance = $state(true);
	const handleMenu = async () => {
		isMenuOpen = !isMenuOpen;
		firsApareance = false;
	};
</script>

<nav
	class="fade-in bg-base-menu dark:bg-base-menu-dark dark:text-base-text-dark dark:outline-base-text-dark text-base-text outline-base-text fixed right-4 top-4 z-10 overflow-hidden rounded-full p-4 focus-within:outline-1 sm:left-5 sm:right-auto sm:top-10 md:left-8 lg:left-16"
>
	<button
		aria-label="Menu"
		title="Menu"
		class="flex aspect-square w-6 cursor-pointer outline-0"
		onclick={handleMenu}
	>
		<MenuIcon {isMenuOpen} {firsApareance} />
	</button>
	{#if isMenuOpen}
		<ul class="flex flex-col gap-4 pt-4" transition:slide>
			<About />
			<Api />
			<Github />
			<TextSpeed />
		</ul>
	{/if}
</nav>
