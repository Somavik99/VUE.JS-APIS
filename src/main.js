import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'

library.add(faTrash)
const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
