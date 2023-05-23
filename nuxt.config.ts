// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: 'My App',
        meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
        ],

        link: [
            {
                href: "https://fonts.googleapis.com/css2?family=Sora:wght@300&display=swap",
                rel: "stylesheet"
            }
        ],
        script: [

        ]
    }
}
})


