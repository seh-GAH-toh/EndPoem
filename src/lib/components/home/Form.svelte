<script lang="ts">
	import { enhance } from '$app/forms';
	import { formState } from '$lib/state.svelte.js';

	const handleSubmit = () => {
		formState.isSubmited = true;
		return async ({ result }) => {
			formState.poem = result.data;
		};
	};
</script>

<form
	method="POST"
	use:enhance={handleSubmit}
	class="bg-base-menu w-xs relative flex h-12 justify-end rounded-3xl shadow"
>
	<input
		type="text"
		name="name"
		id="name"
		autocomplete="off"
		placeholder="Name"
		bind:value={formState.name}
		class="text-base-text font-base outline-base-text w-full rounded-3xl px-4 antialiased outline-0 focus:outline-1"
	/>
	<button
		type="submit"
		aria-label="submit"
		disabled={formState.name.length < 2}
		class="bg-base-menu outline-base-text text-base-text absolute flex aspect-square h-full items-center justify-center rounded-3xl outline-0 focus:outline-1 disabled:cursor-not-allowed disabled:opacity-50"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
			/>
		</svg>
	</button>
</form>
