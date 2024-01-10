import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import './assets/style.sass'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

const app = createApp(App)

app
  .use(router)
  .mount('#app')
