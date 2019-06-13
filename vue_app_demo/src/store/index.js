import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from '@/store/getters'
import mine from '@/store/modules/mine'

export default new Vuex.Store({
  modules:{
    mine
  },
  getters
})