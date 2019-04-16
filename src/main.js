import Vue from 'vue'
import ImportLazy from 'import-lazy'

import App from './App.vue'

Vue.use(ImportLazy)

new Vue({
  el: '#app',
  render: h => h(App)
})
