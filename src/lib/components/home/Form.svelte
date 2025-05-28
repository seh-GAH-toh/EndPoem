<script lang="ts">
	import { enhance } from '$app/forms';
	import { formState } from '$lib/states/poem.svelte.js';
	import FormButton from './FormButton.svelte';

	let name = $state('');

	let isDisabled = $derived(name.length < 2);

	const handleSubmit = ({ formElement, cancel }) => {
		// Prevent default submission
		cancel();

		fetch(formElement.action, {
			method: formElement.method,
			headers: {
				'Content-Type': 'text/plain'
			},
			body: name
		}).then(async (response) => {
			// Handle response
			if (response.headers.get('content-type') == 'application/json')
				formState.poem = await response.json();
			else formState.poem = await response.text();
		});

		formState.isSubmited = true;
	};
</script>

<form
	action="/api/poem"
	method="POST"
	use:enhance={handleSubmit}
	class="bg-base-menu relative flex h-10 w-2/3 max-w-xs justify-end rounded-3xl text-sm shadow transition-all duration-300 ease-in-out md:h-12 md:text-base"
>
	<input
		type="text"
		name="name"
		id="name"
		autocomplete="off"
		placeholder="Name"
		bind:value={name}
		class="text-base-text font-base outline-base-text w-full rounded-3xl px-4 antialiased outline-0 focus:outline-1"
	/>
	<button
		type="submit"
		aria-label="submit"
		disabled={isDisabled}
		class=" bg-base-menu outline-base-text text-base-text absolute flex aspect-square h-full items-center justify-center rounded-3xl outline-0 focus:outline-1 disabled:cursor-not-allowed disabled:opacity-50"
	>
		<FormButton {isDisabled} />
	</button>
</form>
