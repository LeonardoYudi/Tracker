import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faPlay, faStop, faList, faBook} from '@fortawesome/free-solid-svg-icons'
import './input.css'
import roteador from './roteador'
import { key, store } from './store'
library.add(faUserSecret,faPlay,faStop,faList,faBook)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store,key)
.use(roteador)
.mount('#app')
