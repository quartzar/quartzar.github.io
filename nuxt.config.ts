import { defineNuxtConfig } from 'nuxt/config';
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: { shim: false },
  target: 'static',
  router: { base: '/' },
  // transition: { name: 'page', mode: 'out-in' },
  // pageTransition: {
  //   name: 'my-page',
  //   mode: 'out-in',
  //   beforeEnter (el) {
  //     console.log('Before enter...');
  //   }
  // },


  ////////////////////
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@unocss/preset-web-fonts',
    '@unocss/preset-icons',
    '@unocss/preset-attributify',
    '@unocss/preset-typography',
    '@nuxtjs/color-mode',
    // '@vueuse/nuxt',
  ],
  
  
  /////////////////////
  buildModules: [
    '@unocss/nuxt',
  ],
  
  
  // https://github.com/unocss/unocss/tree/main/packages/nuxt
  unocss: {
    preflight: true,
    // Presets
    uno: true, // `@unocss/preset-uno`
    icons: true, // `@unocss/preset-icons`
    attributify: true, // `@unocss/preset-attributify`,
    typography: true, // '@unocss/preset-typography'
    
    webFonts: {
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Poppins',
        serif: 'Recursive',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    },
    autoImport: true, // enabled importing tailwind.css
 
    // Core Options
    shortcuts: [],
    transformers: [
      transformerDirective({ enforce: 'pre' }),
    ],
    rules: [],
  },


  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },


  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'material-default'
    }
  },


  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
  css: [
    '@unocss/reset/normalize.css',
    '~/assets/css/main.css',
  ],


  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/public/favicon.ico' }
    ]
  },
})
