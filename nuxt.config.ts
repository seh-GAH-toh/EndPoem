// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "nuxt-security",
    "@nuxtjs/seo",
  ],
  nitro: {
    preset: "vercel-edge",
  },
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    webhooks: {
      discord: process.env.WEBHOOK_DISCORD,
    },
  },
  site: {
    url: "https://www.theendpoem.com/",
    name: "End Poem by Julian Gough",
    description:
      "The End Poem is a freehand poem written by Julian Gough that appears when the player finishes minecraft. It has been in the public domain since 2022.",
    defaultLocale: "en",
  },
  schemaOrg: {
    identity: {
      type: "Person",
      name: "Julian Gough",
      sameAs: ["https://www.juliangough.com"],
    },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
      xXSSProtection: "1; mode=block",
    },
  },
  ogImage: {
    enabled: false,
  },
});
