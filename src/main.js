import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
 //import 'bootstrap';   
// import './assets/app.scss'
//import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';


library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.use(BootstrapVue)
Vue.config.productionTip = false;

//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/bootstrap-vue.css'
new Vue({
  render: h => h(App),
}).$mount('#app')
