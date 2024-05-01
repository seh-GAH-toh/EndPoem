<script setup lang="ts">
const isNameSubmitted = useSubmitted();
</script>

<template>
  <section
    v-if="!isNameSubmitted"
    class="fade-in flex flex-col items-center justify-center gap-5 xl:gap-10"
  >
    <LazyHomeTitle />
    <LazyHomeForm />
    <LazyHomeDisclaimer />
  </section>
  <section v-else class="fade-in flex flex-col items-center justify-center">
    <LazyPoemMenu />
    <LazyPoemText />
  </section>
</template>
