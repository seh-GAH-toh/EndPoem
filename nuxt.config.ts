// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: ["nitro-cloudflare-dev", "@nuxtjs/tailwindcss", "@nuxt/fonts", "nuxt-security", "@nuxtjs/seo"],
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    webhooks: {
      discord: process.env.WEBHOOK_DISCORD,
    },
  },
  site: {
    url: 'https://www.theendpoem.com/',
    name: 'The End Poem by Julian Gough',
    description: 'The End Poem is a freehand poem written by Julian Gough that appears when the player finishes minecraft. It has been in the public domain since 2022.',
    defaultLocale: 'en',
  },
})