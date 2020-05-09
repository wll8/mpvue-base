import Vue from 'vue'
import App from './App'
import fly from './http/index.js'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.prototype.$http = fly
Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
