// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  eslint: {
    checker: true
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi']
    }
  },
  tailwindcss: {
    cssPath: ['~assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true
  }
});
