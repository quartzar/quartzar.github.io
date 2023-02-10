import { defineNuxtConfig } from 'nuxt/config';
import transformerDirective from '@unocss/transformer-directives'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  
  typescript: { shim: false },
  
  target: 'static',
  
  router: { base: '/' },
  
  vite: {
    plugins: [
      Icons({
        // feature below is experimental
        autoInstall: true,
      }),
    ],
  },


  ////////////////////
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@unocss/preset-web-fonts',
    '@unocss/preset-icons',
    '@unocss/preset-attributify',
    '@unocss/preset-typography',
    '@unocss/preset-uno',
    '@unocss/webpack',
    '@nuxtjs/color-mode',
    
    // '@iconify/vue',
    
    'nuxt-icon',
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
    // scrollbar: true, // `unocss-preset-scrollbar`

    // presets: [
    //   presetScrollbar,
    // ],
    
    webFonts: {
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: [
          {
            name: 'Rubik',
            weights: ['400', '700', '800'],
          }
        ],
        serif: 'Poppins',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        // lato: [
        //   {
        //     name: 'Lato',
        //     weights: ['400', '700'],
        //     italic: true,
        //   },
        //   {
        //     name: 'sans-serif',
        //     provider: 'none',
        //   },
        // ],
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
    documentDriven: true,
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
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
      // { rel: 'icon', type: 'image/x-icon', href: '~/public/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '~/public/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '~/public/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '~/public/favicon-16x16.png' },
      { rel: 'manifest', href: '~/public/site.webmanifest' },
      { rel: 'mask-icon', href: '~/public/safari-pinned-tab.svg', color: '#5bbad5' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ]
  },
})