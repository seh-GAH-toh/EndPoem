<script setup lang="ts">
const isCreditsOpen = useCredits();
</script>

<template>
    <div class="fixed top-0 flex w-full h-16 px-8 items-center">
        <button @click="isCreditsOpen = !isCreditsOpen"
            class="w-8 h-8 flex flex-col items-start content-center justify-evenly ease-in-out transition-all duration-300"
            :class="{ '-rotate-90': isCreditsOpen }">
            <div class="bg-[#FBFBFB] rounded w-[57%] h-[16%] transition-all duration-300"
                :class="{ 'h-[20%]': isCreditsOpen, 'w-[20%]': isCreditsOpen, 'ml-3': isCreditsOpen }">
            </div>
            <div class="bg-[#FBFBFB] rounded w-[39%] h-[16%] transition-all duration-300"
                :class="{ 'h-[20%]': isCreditsOpen, 'w-[20%]': isCreditsOpen, 'ml-3': isCreditsOpen }">
            </div>
            <div class="bg-[#FBFBFB] rounded w-[78%] h-[16%] transition-all duration-300"
                :class="{ 'h-[20%]': isCreditsOpen, 'w-[20%]': isCreditsOpen, 'ml-3': isCreditsOpen }">
            </div>
        </button>
    </div>
</template>