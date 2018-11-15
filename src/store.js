import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

// const hostname = 'http://192.168.1.104:3000'
const hostname = ''

export default new Vuex.Store({
  state: {
    city: defaultCity,
    hostname: hostname
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {

      }
    }
  }
})
