<script setup lang="ts">
const isSubmitted = useSubmitted();
</script>

<template>
    <main
        class="font-['Open_Sans'] flex min-h-screen w-full flex-col items-center justify-center bg-[#FBFBFB] dark:bg-[#29292a] dark:text-[#FBFBFB] text-[#29292a]">
        <div class="flex flex-col items-center gap-10" v-if="!isSubmitted">
            <TheTitle />
            <TheForm />
        </div>
        <ThePoem v-else />
    </main>
</template>