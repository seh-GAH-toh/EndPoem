<script setup lang="ts">
const name = useName();
const isNameSubmitted = useSubmitted();

const sendName = () => {
  useFetch("/api/name", {
    method: "POST", body: { name },
    onRequest() {
      isNameSubmitted.value = true;
    },
  });
};
</script>

<template>
  <form class="relative flex w-fit flex-col" @submit.prevent="sendName" autocomplete="off">
    <div class="peer h-12 border-b-2 transition-all duration-300 ease-in-out"
      :class="name.length >= 2 ? 'border-b-[#29292a] dark:border-b-[#FBFBFB]' : 'border-b-[#29292a]/50 dark:border-b-[#FBFBFB]/50'">
      <input id="name" v-model="name" type="text" name="name"
        class="h-full bg-transparent text-base capitalize outline-none" />
      <button type="submit" aria-label="submit" :disabled="name.length < 2"
        class="h-full dark:fill-[#FBFBFB] fill-[#29292a] px-6 outline-none transition-all duration-300 ease-in-out focus:-translate-y-1 dark:disabled:fill-[#FBFBFB]/50 disabled:fill-[#29292a]/50 disabled:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 16 16">
          <path
            d="M15.9.1a.5.5 0 0 1 0 .6l-5.8 14.5a.8.8 0 0 1-1.3.2l-3.2-5-5-3.2a.8.8 0 0 1 .2-1.3L15.3 0a.5.5 0 0 1 .6.1Zm-9.3 10 2.8 4.3 4.7-11.8zm6.8-8.2L1.6 6.6l4.3 2.8 7.5-7.5Z" />
        </svg>
      </button>
    </div>
    <label for="name" :class="name.length != 0 ? '-top-2' : 'top-4'"
      class="absolute transition-all duration-200 ease-in-out peer-focus-within:-top-2 peer-active:-top-2">
      Name:
    </label>
  </form>
</template>
