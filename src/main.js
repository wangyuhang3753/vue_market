import Vue from 'vue'
import App from './App'
import router from './router'
import {Carousel,CarouselItem,Checkbox,Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

import FastClick from 'fastclick'
import VuelazyLoad from 'vue-lazyload'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Checkbox)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.prototype.$message=Message
Vue.component(Message.name,Message)
//解决移动端300s延迟
FastClick.attach(document.body)
//使用懒加载插件
Vue.use(VuelazyLoad)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)

})
