<script lang="ts">
	import { enhance } from '$app/forms';
    import { formState } from '$lib/state.svelte.js';

    const handleSubmit = () => {
        formState.isSubmited = true;
        return async ({result }) => {
            formState.poem = result.data;
        }
  }
</script>

<form method="POST" use:enhance={handleSubmit} class="rounded-3xl bg-base-menu flex w-xs h-12 relative justify-end shadow">
    <input type="text" name="name" id="name" autocomplete="off" placeholder="Name" bind:value={formState.name} class="w-full rounded-3xl px-4 outline-0 focus:outline-1">
    <button type="submit" aria-label="submit" disabled={formState.name.length < 2} class="h-full aspect-square flex items-center justify-center rounded-3xl absolute bg-base-menu outline-0 focus:outline-1 disabled:opacity-50 disabled:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>              
    </button>
</form>