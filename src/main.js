import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import App from './App.vue'
import router from './router'
import store from './store'
import settings from './tailwind-theme'
import './assets/css/style.css';









Vue.config.productionTip = false

Vue.use(VueTailwind, settings)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
