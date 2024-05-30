import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import our custom CSS
import '../src/scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router, bootstrap)

app.mount('#app')
