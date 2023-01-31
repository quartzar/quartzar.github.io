// import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // target: 'static',
  // ssr: false,
  router: {
    base: '/' 
  },

  modules: [
    // NUXT 
    '@nuxt/content',
    'nuxt-icon',
    // UNOCSS
    '@unocss/nuxt'
  ],

  // CONFIGURATION
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
})
