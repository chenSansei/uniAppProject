import Vue from 'vue'
import App from './App'
import MinRouter from './libs/MinRouter'
import MinRequest from './libs/MinRequest'
import minRequest from './libs/api.js'
import minRouter from './libs/router'
import port from './libs/port'

Vue.config.productionTip = false
// 注册路由
Vue.use(MinRouter)
// 注册请求
Vue.use(MinRequest)
App.mpType = 'app'
Vue.prototype.$port=port
const app = new Vue({
    ...App,
	minRequest,
	minRouter,
})
app.$mount()
