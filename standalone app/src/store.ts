import Vue from 'vue'
import Vuex from 'vuex'
import LoaderModule from './Modules/Loader'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Loader: LoaderModule
  }
})
