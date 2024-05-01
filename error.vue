<script setup lang="ts">
const quotesList = [
  "For a moment, nothing happened. Then, after a second or so, nothing continued to happen.",
  "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
  "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.",
  "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.",
  "Don't Panic.",
  "Time is an illusion. Lunchtime doubly so.",
  "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
  "A learning experience is one of those things that says, 'You know that thing you just did? Don't do that.",
];
</script>

<template>
  <main
    class="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-[#FBFBFB] p-10 font-['Open_Sans'] leading-normal text-[#29292a] sm:p-20 md:p-40 2xl:p-80 dark:bg-[#29292a] dark:text-[#FBFBFB]"
  >
    <article class="fade-in">
      <q class="text-xl">{{
        quotesList[Math.floor(Math.random() * quotesList.length)]
      }}</q>
      <address class="text-right text-lg">Douglas Adams</address>
    </article>
  </main>
  <footer
    class="fade-in absolute bottom-0 left-0 z-10 w-full px-10 py-5 text-center text-[#29292a] sm:px-20 dark:text-[#FBFBFB]"
  >
    <p>
      It appears that an error has occurred. Kindly navigate back to the main
      page or click
      <NuxtLink to="/" class="underline underline-offset-2"
        ><strong>here</strong>
      </NuxtLink>
      to proceed.
    </p>
  </footer>
</template>
