import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import router from './router/index.js'

import router from '@/router'

// 产品级别提示   不开启
Vue.config.productionTip = false

// main.js 入口文件
// 职责1：引入需要依赖的模块（js,包，css,其他资源）
// 职责2：创建一个根Vue实例

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
