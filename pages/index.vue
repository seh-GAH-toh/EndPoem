<script setup lang="ts">
const isSubmitted = useSubmitted();
const isCreditsOpen = useCredits();
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
