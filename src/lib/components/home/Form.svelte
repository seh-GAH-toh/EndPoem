<script>
	import Submit from '$lib/components/home/icons/Submit.svelte';

	import { enhance } from '$app/forms';
	import { poemState } from '$lib/states/poem.svelte.js';
	import { email, is, pipe, string } from 'valibot';

	const EmailSchema = pipe(string(), email());

	let name = $state('');
	let isDisabled = $derived(name.length < 2);

	const handleSubmit = ({ formElement, cancel }) => {
		// Prevent default submission
		cancel();

		// Log to discord in case of a email is submited
		if (is(EmailSchema, name)) {
			fetch('/api/log', {
				method: 'POST',
				headers: { 'Content-Type': 'text/plain' },
				body: name
			});

			poemState.poem = false;
		} else {
			fetch(formElement.action, {
				method: formElement.method,
				headers: { 'Content-Type': 'text/plain' },
				body: name
			}).then(async (response) => {
				poemState.poem = await response.json();
			});
		}

		poemState.wasNameSubmited = true;
	};
</script>

<form
	action="/api/poem"
	method="POST"
	use:enhance={handleSubmit}
	class="bg-base-menu dark:bg-base-menu-dark relative flex h-10 w-2/3 max-w-xs justify-end rounded-3xl text-sm shadow transition-all duration-300 ease-in-out md:h-12 md:text-base"
>
	<input
		type="text"
		name="name"
		id="name"
		autocomplete="off"
		placeholder="Name"
		aria-label="player"
		autocorrect="off"
		required
		bind:value={name}
		class="text-base-text dark:text-base-text-dark font-base outline-base-text dark:outline-base-text-dark w-full rounded-3xl px-4 antialiased outline-0 focus:outline-1"
	/>
	<Submit {isDisabled} />
</form>
