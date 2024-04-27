// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: ["nitro-cloudflare-dev", "@nuxtjs/tailwindcss", "@nuxt/fonts", "nuxt-security", "nuxt-simple-robots", "@nuxtjs/sitemap", "nuxt-link-checker"],
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    webhooks: {
      discord: process.env.WEBHOOK_DISCORD,
    },
  },
  site: {
    url: 'https://www.theendpoem.com/',
  },
})