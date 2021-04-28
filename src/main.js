import Vue from 'vue'
import bulma from 'bulma'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter);


Vue.use(bulma)

new Vue({
  router,
  routes,
  store,
  render: h => h(App)
}).$mount('#app')
