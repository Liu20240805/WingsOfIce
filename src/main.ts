import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
// 引入axios
import axios from 'axios'
// 引入pinia
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$axios = axios
app.use(pinia)
app.use(router)

app.mount('#app')

