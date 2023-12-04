// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  runtimeConfig: {
    discordWebhook: "",
  },
  googleFonts: {
    download: true,
    families: {
      "Open+Sans": [400, 700],
      "Nothing+You+Could+Do": [400],
    },
  },
});
