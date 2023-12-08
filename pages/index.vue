<script setup lang="ts">
const isSubmitted = useSubmitted();
const isCreditsOpen = useCredits();

useHead({
  meta: [
    {
      name: 'thumbnail',
      content: 'https://theendpoem.com/images/google-card.png'
    }
  ]
})

useSeoMeta({
  title: 'The End Poem by Julian Gough',
  description: "The End Poem is a freehand poem written by Julian Gough that appears when the player finishes minecraft. It has been in the public domain since 2022.",
  ogTitle: 'The End Poem by Julian Gough',
  ogDescription: "The End Poem is a freehand poem written by Julian Gough that appears when the player finishes minecraft. It has been in the public domain since 2022.",
  ogUrl: 'https://theendpoem.com/',
  ogImage: {
    url: 'https://theendpoem.com/images/facebook-card.jpg',
    secureUrl: 'https://theendpoem.com/images/facebook-card.jpg',
    alt: 'An image featuring a white background with centered black text that reads "The End Poem by Julian Gough" The text is prominently displayed against the clean white background.',
  },
  twitterTitle: 'The End Poem by Julian Gough',
  twitterDescription: "The End Poem is a freehand poem written by Julian Gough that appears when the player finishes minecraft. It has been in the public domain since 2022.",
  twitterImage: {
    url: 'https://theendpoem.com/images/twitter-card.jpg',
    alt: 'An image featuring a white background with centered black text that reads "The End Poem by Julian Gough" The text is prominently displayed against the clean white background.',
  },
  twitterSite: 'https://theendpoem.com/',
})
</script>

<template>
  <span
    class="w-full h-2 absolute top-0 left-0 bg-red-600 sm:bg-orange-600 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-600 2xl:bg-purple-600"></span>
  <main
    class="font-['Open_Sans'] flex min-h-screen w-full items-center justify-center bg-[#FBFBFB] dark:bg-[#29292a] dark:text-[#FBFBFB] text-[#29292a]">
    <div class="fade-in-fwd flex flex-col items-center justify-center gap-5 xl:gap-10" v-if="!isSubmitted">
      <TheTitle />
      <TheForm />
    </div>
    <div class="flex flex-col items-center justify-center" v-else>
      <LazyTheCredits v-if="isCreditsOpen" />
      <LazyThePoem v-else />
      <LazyThePoemButton />
    </div>
  </main>
</template>
