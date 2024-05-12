<script setup lang="ts">
const isMenuOpen = useMenu();
</script>

<template>
  <header class="fixed top-0 flex h-16 w-full items-center px-8">
    <button
      class="flex h-8 w-8 flex-col content-center items-start justify-evenly transition-all duration-300 ease-in-out"
      :class="{ '-rotate-90': isMenuOpen }"
      @click="isMenuOpen = !isMenuOpen"
    >
      <div
        class="h-[16%] rounded bg-[#FBFBFB] transition-all duration-300"
        :class="isMenuOpen ? 'ml-3 h-[20%] w-[20%]' : 'w-[57%]'"
      ></div>
      <div
        class="h-[16%] rounded bg-[#FBFBFB] transition-all duration-300"
        :class="isMenuOpen ? 'ml-3 h-[20%] w-[20%]' : 'w-[39%]'"
      ></div>
      <div
        class="h-[16%] rounded bg-[#FBFBFB] transition-all duration-300"
        :class="isMenuOpen ? 'ml-3 h-[20%] w-[20%]' : 'w-[78%]'"
      ></div>
    </button>
  </header>
</template>
