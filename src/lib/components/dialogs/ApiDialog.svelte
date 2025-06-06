<script>
	import { menuState } from '$lib/states/menu.svelte.js';
	import { fade } from 'svelte/transition';
	const json = JSON.stringify(
		[
			{
				entity: 0,
				phrase: 'I see the player you mean.'
			},
			{
				entity: 1,
				phrase: 'name?'
			}
		],
		null,
		2
	);
</script>

{#if menuState.isApiOpen}
	<dialog
		transition:fade
		class="text-base-text dark:text-base-text-dark fixed inset-0 flex h-full w-full items-center justify-center bg-transparent p-4 backdrop-blur-2xl md:p-8"
	>
		<article
			class=" bg-base-menu dark:bg-base-menu-dark flex max-h-full w-fit flex-col gap-4 overflow-auto rounded-2xl p-6 transition-all duration-300 ease-in-out md:p-12 lg:px-16"
		>
			<header>
				<h3 class=" w-full text-center text-2xl font-extrabold">API Reference</h3>
			</header>
			<section class="flex flex-col gap-1 md:gap-2">
				<h4 class=" pb-1 text-xl font-extrabold">Base URL</h4>
				<p>
					<code class="bg-base-bg dark:bg-base-bg-dark rounded p-2">
						<strong class="bg-poem-green inline-block rounded p-1 leading-none">POST</strong>
						https://api.theendpoem.com/
					</code>
				</p>
				<p>Returns a customized poem using the provided name.</p>
			</section>
			<section class="flex flex-col gap-1 md:gap-2">
				<h4 class=" pb-1 text-xl font-extrabold">Request</h4>
				<p>
					<strong>Headers:</strong>
					<code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">Content-Type: text/plain</code
					>
				</p>
				<p>
					<strong>Body:</strong>
					A plain text string containing a name (e.g.,
					<code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">"julian"</code> )
				</p>
			</section>
			<section class="flex flex-col gap-1 md:gap-2">
				<h4 class=" pb-1 text-xl font-extrabold">Response</h4>
				<p>
					<strong> Headers:</strong>
					<code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5"
						>Content-Type: application/json</code
					>
				</p>
				<p>
					<strong>Status:</strong>
					<code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">200 OK</code>
				</p>
				<p>
					<strong>Response:</strong>
					A JSON array of poem lines where each line has:
				</p>
				<ul class=" list-disc pl-4">
					<li>
						<code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">entity</code>: Either
						<code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">0</code>
						or <code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">1</code>, indicating who
						is speaking.
					</li>
					<li>
						<code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">phrase:</code> A string representing
						what the entity is saying.
					</li>
				</ul>
				<p>
					<strong>Example:</strong>
				</p>
				<pre class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5"><code>{json}</code></pre>
				<p>
					<strong>Obs:</strong>
					In the <code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">phrase</code> field,
					the parts that should be replaced for an obfuscated effect are marked with
					<code class="bg-base-bg dark:bg-base-bg-dark rounded p-1.5">{'<secret>'}</code>.
				</p>
				<p>
					Since I haven't implemented that functionality yet <em>(svelte got hands)</em>, good luck.
				</p>
			</section>
		</article>
	</dialog>
{/if}
