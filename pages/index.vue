<script setup lang="ts">
const isSubmitted = useSubmitted();
</script>

<template>
    <main class="flex min-h-screen w-full flex-col items-center justify-center bg-[#181a1b] text-[#f6f5f4]">
        <div class="flex flex-col items-center gap-10" v-if="!isSubmitted">
            <TheTitle />
            <TheForm />
        </div>
        <ThePoem v-else />
    </main>
</template>