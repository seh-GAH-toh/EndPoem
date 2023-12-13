<script setup lang="ts">
const isSubmitted = useSubmitted();
const isCreditsOpen = useCredits();
</script>

<template>
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
  <p class="w-full absolute bottom-0 p-3 text-center text-sm opacity-60">
    <i>
      This website gather limited user data. To see how it's handled, visit the <NuxtLink
        to="https://github.com/ArthurSegato/TheEndPoem/#data-protection-legislations-gdpr-lgpd-and-others"
        class="underline underline-offset-2">project's repository
      </NuxtLink>
      .
    </i>
  </p>
</template>
