import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin( nuxtApp => {
    nuxtApp.aos = AOS.init({
        once: false
    })
})