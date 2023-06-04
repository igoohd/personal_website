// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "pt",
    langDir: "locales/",
    locales: [
      {
        code: "pt",
        file: "pt.json",
      },
      {
        code: "en",
        file: "en.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }  
  },
  css: ["assets/styles/global.css"],
});
