import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createHead } from '@vueuse/head'
const head = createHead();

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(head)
  .mount('#app')

