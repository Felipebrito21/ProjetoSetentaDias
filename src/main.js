import Vue from 'vue'
import bulma from 'bulma'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(bulma)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
