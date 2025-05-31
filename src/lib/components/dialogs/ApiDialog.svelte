<script>
	import { menuState } from '$lib/states/menu.svelte.js';
	import { fade } from 'svelte/transition';
</script>

{#if menuState.isApiOpen}
	<dialog
		transition:fade
		class="fixed inset-0 flex h-full w-full items-center justify-center bg-transparent p-4 backdrop-blur-2xl md:p-8"
	>
		<article
			class=" bg-base-menu dark:bg-base-menu-dark flex max-h-full w-full flex-col gap-4 overflow-auto rounded-2xl p-6 transition-all duration-300 ease-in-out md:p-12 lg:w-fit lg:px-16"
		>
			<header>
				<h3
					class="text-base-text dark:text-base-text-dark w-full text-center text-2xl font-extrabold"
				>
					API
				</h3>
			</header>
			<section class="flex flex-col gap-1 md:gap-2">
				<h4 class="text-base-text dark:text-base-text-dark pb-1 text-xl font-extrabold">
					End Poem
				</h4>
				<p class="text-base-text dark:text-base-text-dark">
					The “<strong>End Poem</strong>” has been released into the
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://creativecommons.org/publicdomain/zero/1.0/">public domain</a
					>
					by its creator,
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://www.juliangough.com/"><strong>Julian Gough</strong>.</a
					>
				</p>
				<p class="text-base-text dark:text-base-text-dark">
					For insights into his decision, I highly recommend checking out his
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://theeggandtherock.com/p/i-wrote-a-story-for-a-friend">blog post</a
					>
					discussing the rationale behind this move.
				</p>
				<p class="text-base-text dark:text-base-text-dark">
					Additionaly, if you'd like to show support for his creative endeavors, consider making a
					donation via his
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://www.paypal.com/donate/?hosted_button_id=525T2WCA24268">PayPal account.</a
					>
				</p>
			</section>
			<section class="flex flex-col gap-1 md:gap-2">
				<h4 class="text-base-text dark:text-base-text-dark pb-1 text-xl font-extrabold">
					theendpoem.com
				</h4>
				<p class="text-base-text dark:text-base-text-dark">
					The "<strong>theendpoem.com</strong>" was created by
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://www.segato.dev/">Arthur Segato</a
					>
					with the goal to spread and disassociate the End Poem with
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://www.minecraft.net/en-us">Minecraft</a
					>.
				</p>
				<p class="text-base-text dark:text-base-text-dark">
					If you wish to support this project, consider making a donation via <a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://wise.com/pay/me/arthursegatop">Wise</a
					>, any amount is greatly appreciated.
				</p>
			</section>
			<section class="flex flex-col gap-1 md:gap-2">
				<h4 class="text-base-text dark:text-base-text-dark pb-1 text-xl font-extrabold">
					Especial Thanks
				</h4>
				<p class="text-base-text dark:text-base-text-dark">
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://lauranewman.com/pages/index.php">Laura Newman</a
					>, for helping with the project costs.
				</p>
				<p class="text-base-text dark:text-base-text-dark">
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://github.com/ricdoric">Eric Schneider</a
					>, for fixing my spelling mistakes.
				</p>
				<p class="text-base-text dark:text-base-text-dark">
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://github.com/MYSan7">Ria</a
					>, for fixing my coloring mistakes.
				</p>
			</section>
			<section class="flex flex-col gap-1 md:gap-2">
				<h4 class="text-base-text dark:text-base-text-dark pb-1 text-xl font-extrabold">
					External Assets
				</h4>
				<p class="text-base-text dark:text-base-text-dark">
					Icons by <a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://github.com/cyberalien/line-md">Vjacheslav Trushkin</a
					>
					and
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://heroicons.com/">Heroicons</a
					>.
				</p>
				<p class="text-base-text dark:text-base-text-dark">
					Animations by <a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://animista.net/">Animista</a
					>.
				</p>
				<p class="text-base-text dark:text-base-text-dark">
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://fonts.google.com/specimen/Nothing+You+Could+Do">Nothing You Could Do</a
					>
					by
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://kimberlygeswein.com/">Kimberly Geswein</a
					>
					and
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://fonts.google.com/specimen/Open+Sans">Open Sans</a
					>
					by
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://mattesontypographics.com/">Steve Matteson</a
					>
					on
					<a
						class="outline-base-text dark:outline-base-text-dark underline underline-offset-2 focus:outline-1"
						href="https://fonts.google.com/">Google Fonts</a
					>.
				</p>
			</section>
		</article>
	</dialog>
{/if}
