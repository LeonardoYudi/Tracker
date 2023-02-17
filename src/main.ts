import { createApp } from 'vue'
//@ts-ignore
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import './input.css'
library.add(faUserSecret,faPlay,faStop)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
