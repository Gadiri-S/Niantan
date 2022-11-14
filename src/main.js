import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faSubway } from '@fortawesome/free-solid-svg-icons'
import { faClock} from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle} from '@fortawesome/free-regular-svg-icons'






/* add icons to the library */
library.add(faUserSecret,faEnvelope,faMobileAlt,faSubway,faClock,faMapMarkerAlt,faCheckCircle)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
 