import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "../scss/custom.css";
import "bootstrap/dist/js/bootstrap.js";

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
