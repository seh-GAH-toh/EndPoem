<script>
	import NameForm from "$lib/components/NameForm.svelte";
	import Title from "$lib/components/Title.svelte";

	import { formState } from '$lib/state.svelte.js';
</script>

{#if !formState.isSubmited}
<section class="gap-12 w-full h-full flex flex-col items-center justify-center">
    <Title />
    <NameForm />
</section>
{:else}
<section class="w-full h-full flex justify-center">
    <article class="w-2/3">
        <h3 class="text-2xl font-extrabold pb-6">End Poem.</h3>
        {#each formState.poem as poem}
            <p class={poem.entity ? "text-poem-green" : "text-poem-blue"}>{poem.phrase}</p>
        {/each}
    </article>
</section>
{/if}