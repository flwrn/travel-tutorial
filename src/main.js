import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/style.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'babel-polyfill'

Vue.config.productionTip = false

// 使用fastclick包来解决移动端click事件300ms延迟问题
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
