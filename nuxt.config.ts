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
                href: "https://fonts.googleapis.com/css?family=Sora:300,400,500,600,700,800",
                rel: "stylesheet"
            },
            {
                href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",
                rel: "stylesheet"
            },
            {
                href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900",
                rel: "stylesheet"
            }
        ],
        script: [

        ]
    }
}
})


