<script setup lang="ts">
const isMenuOpen = useMenu();
</script>

<template>
  <header class="fixed top-0 flex w-full h-16 px-8 items-center">
    <button
      class="w-8 h-8 flex flex-col items-start content-center justify-evenly ease-in-out transition-all duration-300"
      :class="{ '-rotate-90': isMenuOpen }" @click="isMenuOpen = !isMenuOpen">
      <div class="bg-[#FBFBFB] rounded h-[16%] transition-all duration-300"
        :class="isMenuOpen ? 'h-[20%] w-[20%] ml-3' : 'w-[57%]'"></div>
      <div class="bg-[#FBFBFB] rounded h-[16%] transition-all duration-300"
        :class="isMenuOpen ? 'h-[20%] w-[20%] ml-3' : 'w-[39%]'"></div>
      <div class="bg-[#FBFBFB] rounded h-[16%] transition-all duration-300"
        :class="isMenuOpen ? 'h-[20%] w-[20%] ml-3' : 'w-[78%]'"></div>
    </button>
  </header>
  <div v-show="isMenuOpen"
    class="leading-6 gap-6 flex flex-col px-20 py-32 sm:px-48 lg:px-80 md:px-64 2xl:px-[36rem] md:py-44 2xl:py-56">
    <article class="leading-6 gap-4 flex flex-col">
      <h4 class="text-2xl md:text-3xl 2xl:text-4xl font-bold">Special Thanks</h4>
      <p class="text-sm md:text-base 2xl:text-lg">
        To all those who generously donated and supported me in sustaining this project:
      </p>
      <ul>
        <li>
          - <NuxtLink to="https://lauranewman.com/pages/index.php" class="underline">Laura Newman</NuxtLink>
        </li>
      </ul>
    </article>
    <article class="leading-6 gap-4 flex flex-col">
      <h4 class="text-2xl md:text-3xl 2xl:text-4xl font-bold">Credits</h4>
      <p class="text-sm md:text-base 2xl:text-lg">
        The <strong>“End Poem”</strong> has been released into the
        <NuxtLink class="underline" to="https://creativecommons.org/publicdomain/zero/1.0/" tabindex="0">public
          domain</NuxtLink>
        by its creator,
        <NuxtLink class="underline" to="https://www.juliangough.com" tabindex="0">Julian Gough</NuxtLink>. For insights
        into
        his
        decision, I highly recommend checking out his
        <NuxtLink class="underline" to="https://theeggandtherock.substack.com/p/i-wrote-a-story-for-a-friend"
          tabindex="0">blog
          post</NuxtLink>
        discussing the rationale behind this move. Additionaly, if you'd like to
        show support for his creative endeavors, consider making a donation via
        his
        <NuxtLink class="underline" to="https://www.paypal.com/donate/?hosted_button_id=525T2WCA24268" tabindex="0">
          PayPal
          account</NuxtLink>.
      </p>
      <p class="text-sm md:text-base 2xl:text-lg">
        The <strong>"theendpoem.com"</strong> was created by
        <NuxtLink class="underline" to="https://github.com/ArthurSegato" tabindex="0">Arthur Segato</NuxtLink>
        with the goal to spread and disassociate the End Poem with
        <NuxtLink class="underline" to="https://en.wikipedia.org/wiki/Minecraft" tabindex="0">Minecraft</NuxtLink>, if
        you
        wish to
        support this project, consider making a donation via
        <NuxtLink class="underline" to="https://donate.stripe.com/9AQbMl1Pt5DV4i4288" tabindex="0">Stripe</NuxtLink>,
        any
        amount is
        greatly appreciated.
      </p>
      <p class="text-sm md:text-base 2xl:text-lg">
        Below are listed all the resources utilized in its development. Should you
        encounter any issues or wish to request improvements, please don't
        hesitate to reach out via email at
        <NuxtLink class="underline" to="mailto:hello@theendpoem.com" tabindex="0">hello@theendpoem.com</NuxtLink>,
        Alternatively, if you'd prefer to take the initiative to fix
        any
        concerns yourself, you're more than welcome to contribute directly to the
        <NuxtLink class="underline" to="https://github.com/ArthurSegato/Website-TheEndPoem" tabindex="0">Github
          repository</NuxtLink>.
      </p>
      <p class="text-sm md:text-base 2xl:text-lg">
        Icons by
        <NuxtLink class="underline" to="https://icons.getbootstrap.com" tabindex="0">Bootstrap Icons</NuxtLink>,
        <NuxtLink class="underline" to="https://fonts.google.com/specimen/Open+Sans" tabindex="0">Open Sans</NuxtLink>
        and
        <NuxtLink class="underline" to="https://fonts.google.com/specimen/Nothing+You+Could+Do" tabindex="0">Nothing
          You
          Could
          Do</NuxtLink>
        by Google Fonts, Animations by
        <NuxtLink class="underline" to="https://animista.net" tabindex="0">Animista</NuxtLink>,
        <NuxtLink class="underline" to="https://codepen.io/himalayasingh/pen/KOdJPM" tabindex="0">Menu
          button</NuxtLink>.
      </p>
    </article>
  </div>
</template>
