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
    class="leading-normal p-10 sm:p-20 md:p-40 2xl:p-80 font-['Open_Sans'] flex flex-col gap-10 min-h-screen w-full items-center justify-center bg-[#FBFBFB] dark:bg-[#29292a] dark:text-[#FBFBFB] text-[#29292a]">
    <article class="fade-in">
      <q class="text-xl">{{
        quotesList[Math.floor(Math.random() * quotesList.length)]
        }}</q>
      <address class="text-right text-lg">Douglas Adams</address>
    </article>
  </main>
  <footer
    class="fade-in dark:text-[#FBFBFB] text-[#29292a] z-10 w-full absolute bottom-0 py-5 text-center left-0 px-10 sm:px-20">
    <p>
      It appears that an error has occurred. Kindly navigate back to the main
      page or click
      <NuxtLink to="/" class="underline underline-offset-2"><strong>here</strong>
      </NuxtLink>
      to proceed.
    </p>
  </footer>
</template>
