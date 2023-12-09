// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  routeRules: {
    "/**": {
      headers: {
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "X-XSS-Protection": "1; mode=block",
        "Strict-Transport-Security":
          "max-age=31536000; includeSubDomains; preload",
      },
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-link-checker",
  ],
  runtimeConfig: {
    discordWebhook: "",
  },
  css: ["@/assets/css/main.css"],
  site: {
    url: "https://theendpoem.com/",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "canonical",
          href: "https://theendpoem.com/",
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "https://theendpoem.com/favicon.ico",
        },
        {
          type: "image/svg+xml",
          rel: "icon",
          sizes: "any",
          href: "https://theendpoem.com/icon.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "https://theendpoem.com/apple-touch-icon.png",
        },
      ],
      meta: [
        {
          name: "google",
          content: "notranslate",
        },
        {
          name: "robots",
          content: "",
        },
        {
          name: "revisit-after",
          content: "1 day",
        },
        {
          name: "theme-color",
          content: "#29292a",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "keywords",
          content:
            "the end poem,the end,poem,minecraft,julian,gough,julian gough,public domain,public,domain,Minecraft End Poem,Julian Gough poetry,Philosophical gaming poetry,Minecraft storyline conclusion,Reflective game conclusion,Gaming epilogue poem,Minecraft existential themes,Julian Gough creative writing,Emotional game conclusion,Minecraft narrative verse,Minecraft End Credits poem,Minecraft philosophical reflection,Julian Gough literary creation",
        },
        {
          property: "og:site:name",
          content: "The End Poem",
        },
        {
          name: "author",
          content: "Julian Gough",
        },
        {
          name: "color-scheme",
          content: "dark light",
        },
        {
          property: "og:image:width",
          content: "1240",
        },
        {
          property: "og:image:height",
          content: "650",
        },
        {
          property: "og:image:type",
          content: "image/gif",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image:type",
          content: "image/gif",
        },
        {
          name: "twitter:image:width",
          content: "900",
        },
        {
          name: "twitter:image:height",
          content: "470",
        },
      ],
    },
  },
});
