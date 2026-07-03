// Style Guide do Nacional B1 — usa a biblioteca real @nuxt/ui v2 (pinada em package.json,
// não a v4 usada no resto do NacionalBet). v2 não roda fora do Nuxt, por isso este é um
// app Nuxt de verdade, não Storybook.
export default defineNuxtConfig({
  compatibilityDate: '2026-07-01',
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/fonts.css', '~/assets/css/context-tokens.css'],
  app: {
    // baseURL vem do ambiente (NUXT_APP_BASE_URL) só no build do GitHub Pages;
    // em dev (`npm run dev`) fica '/' normalmente.
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Nacional B1 — Style Guide',
    },
  },
  // O breadcrumb aponta para /components (índice inexistente): redireciona para a home.
  routeRules: {
    '/components': { redirect: '/' },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
})
