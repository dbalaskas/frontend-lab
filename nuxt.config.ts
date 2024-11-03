// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt'
  ],
  ssr: false,
  devtools: { enabled: true },
  // css: ['~/assets/css/tailwind.css'],
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
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true
  },
  veeValidate: {
    autoImports: true,
    typedSchemaPackage: 'yup',
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  }
});
