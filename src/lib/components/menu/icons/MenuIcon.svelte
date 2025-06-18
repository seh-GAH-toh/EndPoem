<script>
	let { isMenuOpen, firsApareance } = $props();
</script>

{#if !isMenuOpen && firsApareance}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full"
		><g
			fill="none"
			stroke="currentColor"
			stroke-dasharray="16"
			stroke-dashoffset="16"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			><path d="M5 5h14"
				><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /></path
			><path d="M5 12h14"
				><animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.2s"
					dur="0.2s"
					values="16;0"
				/></path
			><path d="M5 19h14"
				><animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.4s"
					dur="0.2s"
					values="16;0"
				/></path
			></g
		></svg
	>
{:else if !isMenuOpen && !firsApareance}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full"
		><path
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"
			><animate
				fill="freeze"
				attributeName="d"
				dur="0.4s"
				values="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19;M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"
			/></path
		></svg
	>
{:else}
	<svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 24 24"
		><path
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M5 5h14M5 12h14M5 19h14"
			><animate
				fill="freeze"
				attributeName="d"
				dur="0.4s"
				values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"
			/></path
		></svg
	>
{/if}
