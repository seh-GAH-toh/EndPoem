<script>
	const quotesList = [
		'For a moment, nothing happened. Then, after a second or so, nothing continued to happen.',
		'I may not have gone where I intended to go, but I think I have ended up where I needed to be.',
		'There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.',
		'The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.',
		"Don't Panic.",
		'Time is an illusion. Lunchtime doubly so.',
		'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.',
		"A learning experience is one of those things that says, 'You know that thing you just did? Don't do that."
	];
</script>

<section
	class="fade-in flex h-full w-full flex-col items-center justify-center transition-all duration-300 ease-in-out"
>
	<article class="max-w-10/12 md:max-w-8/12">
		<q class="text-base-text dark:text-base-text-dark font-base text-xl"
			>{quotesList[Math.floor(Math.random() * quotesList.length)]}</q
		>
		<address class="text-base-text dark:text-base-text-dark font-base text-right text-lg">
			Douglas Adams
		</address>
	</article>
</section>

<footer
	class="fade-in text-base-text dark:text-base-text-dark absolute bottom-0 left-0 z-10 w-full px-10 py-5 text-center sm:px-20"
>
	<p>
		It appears that an error has occurred. Kindly navigate back to the main page or click
		<a href="/" class="underline underline-offset-2"><strong>here</strong></a>
		to proceed.
	</p>
</footer>
