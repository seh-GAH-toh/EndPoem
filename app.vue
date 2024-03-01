<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
const isSubmitted = useSubmitted();
const isCreditsOpen = useCredits();
</script>

<template>
  <main
    class="font-['Open_Sans'] flex min-h-screen w-full items-center justify-center bg-[#FBFBFB] dark:bg-[#29292a] dark:text-[#FBFBFB] text-[#29292a]"
  >
    <section
      v-if="!isSubmitted"
      class="fade-in-fwd flex flex-col items-center justify-center gap-5 xl:gap-10"
    >
      <LazyHomeTitle />
      <LazyHomeForm />
    </section>
    <section v-else class="flex flex-col items-center justify-center">
      <LazyPoemCredits v-if="isCreditsOpen" />
      <LazyPoemText v-else />
      <LazyPoemButton />
    </section>
  </main>
  <footer
    v-show="!isSubmitted"
    class="w-full absolute bottom-0 p-3 text-center text-sm opacity-60"
  >
    <i>
      This website gather limited user data. To see how it's handled, visit the
      <NuxtLink
        to="https://github.com/ArthurSegato/TheEndPoem/#data-protection-legislations-gdpr-lgpd-and-others"
        class="underline underline-offset-2"
        >project's repository
      </NuxtLink>
      .
    </i>
  </footer>
  <SpeedInsights />
</template>
