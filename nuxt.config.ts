import { defineNuxtConfig } from 'nuxt/config';
import transformerDirective from '@unocss/transformer-directives'
// import presetWebFonts from '@unocss/preset-web-fonts'

// import { transformerDirectives } from "unocss";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  router: {
    base: '/' 
  },


  ////////////////////
  modules: [
    '@nuxt/content',
    // '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    '@unocss/preset-web-fonts',
    '@nuxtjs/color-mode',
    // '@vueuse/nuxt',
  ],
  // target: 'static',
  // https://github.com/nuxt-community/google-fonts-module
  
  
  /////////////////////
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    // "@nuxtjs/tailwindcss",
    // Doc: https://github.com/unocss/unocss
    '@unocss/nuxt',
    // './modules/auto-import-eslint',
    // '@nuxtjs/postcss',
    // Simple usage
    // '@nuxtjs/google-fonts',
    // With options
    // ['@nuxtjs/google-fonts', { /* module options */ }]
  ],
  // Doc: https://github.com/unocss/unocss/tree/main/packages/nuxt
  
  
  ////////////////////
  unocss: {
    preflight: true,
    // presets
    
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    typography: true, // enabled '@unocss/preset-typography'
    
    // webFonts: true, // enabled '@unocss/preset-web-fonts'
    
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
    // autoImport: true, // enabled importing tailwind.css
    // transformerDirectives: true, // enabled '@unocss/transformer-directives'
 
    // core options
    shortcuts: [],
    transformers: [
      transformerDirective({ enforce: 'pre' }),
    ],
    rules: [],
  },
  // https://tailwindcss.nuxtjs.org/examples/tailwindui
  // googleFonts: {
  //   families: {
  //     Poppins: true,
  //     Recursive: true,
  //   }
  // },

  // tailwindcss: {
  //   jit: true
  // },

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


  postcss: {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
    },
  },
  // Global Page Headers: https://go.nuxtjs.dev/config-head
  css: [
    // 'normalise.css',
    '~/assets/css/style.css',
  ],

  head: {
    link: [
      // { rel: 'icon', type: 'image/gif', href: '~/public/animated_favigon.gif'},
      { rel: 'icon', type: 'image/x-icon', href: '~/public/favicon.ico' }
    ]
  },
})
