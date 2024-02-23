// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-robots",
    "nuxt-link-checker",
    "@nuxtjs/sitemap",
    "nuxt-security",
    "@nuxtjs/google-fonts",
  ],
  nitro: {
    preset: "vercel-edge",
  },
  security: {
    headers: {
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true,
      },
      xXSSProtection: "1; mode=block",
    },
  },
  googleFonts: {
    families: {
      "Open+Sans": [400, 700],
      "Nothing+You+Could+Do": [400],
    },
  },
  runtimeConfig: {
    webhooks: {
      discord: process.env.WEBHOOK_DISCORD,
    },
  },
  css: ["@/assets/css/main.css"],
  site: {
    url: "https://www.theendpoem.com",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "The End Poem by Julian Gough",
      link: [
        {
          rel: "canonical",
          href: "https://www.theendpoem.com",
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "https://www.theendpoem.com/favicon.ico",
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "https://www.theendpoem.com/favicon32.ico",
        },
        {
          type: "image/svg+xml",
          rel: "icon",
          sizes: "any",
          href: "https://www.theendpoem.com/icon.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "https://www.theendpoem.com/apple-touch-icon.png",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "The End Poem is a freehand poem written by Julian Gough that appears when the player finishes minecraft. It has been in the public domain since 2022.",
        },
        {
          name: "keywords",
          content:
            "the end poem,the end,poem,minecraft,julian,gough,julian gough,public domain,public,domain,Minecraft End Poem,Julian Gough poetry,Philosophical gaming poetry,Minecraft storyline conclusion,Reflective game conclusion,Gaming epilogue poem,Minecraft existential themes,Julian Gough creative writing,Emotional game conclusion,Minecraft narrative verse,Minecraft End Credits poem,Minecraft philosophical reflection,Julian Gough literary creation",
        },
        {
          name: "author",
          content: "Julian Gough",
        },
        {
          name: "og:title",
          content: "The End Poem by Julian Gough",
        },
        {
          name: "og:description",
          content:
            "The End Poem is a freehand poem written by Julian Gough that appears when the player finishes minecraft. It has been in the public domain since 2022.",
        },
        {
          name: "og:url",
          content: "https://www.theendpoem.com",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site:name",
          content: "The End Poem",
        },
        {
          name: "og:image",
          content: "https://www.theendpoem.com/images/facebook-card.jpg",
        },
        {
          name: "og:image:secure_url",
          content: "https://www.theendpoem.com/images/facebook-card.jpg",
        },
        {
          name: "og:image:alt",
          content:
            "An image featuring a white background with centered black text that reads 'The End Poem by Julian Gough' The text is prominently displayed against the clean white background.",
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
          content: "image/jpg",
        },
        {
          name: "twitter:title",
          content: "The End Poem by Julian Gough",
        },
        {
          name: "twitter:description",
          content:
            "The End Poem is a freehand poem written by Julian Gough that appears when the player finishes minecraft. It has been in the public domain since 2022.",
        },
        {
          name: "twitter:site",
          content: "https://www.theendpoem.com",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image",
          content: "https://www.theendpoem.com/images/twitter-card.jpg",
        },
        {
          name: "twitter:image:alt",
          content:
            "An image featuring a white background with centered black text that reads 'The End Poem by Julian Gough' The text is prominently displayed against the clean white background.",
        },
        {
          name: "twitter:image:type",
          content: "image/jpg",
        },
        {
          name: "twitter:image:width",
          content: "900",
        },
        {
          name: "twitter:image:height",
          content: "470",
        },
        {
          name: "thumbnail",
          content: "https://www.theendpoem.com/images/google-card.png",
        },
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
          name: "color-scheme",
          content: "light dark",
        },
      ],
    },
  },
});
