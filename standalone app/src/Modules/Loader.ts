import Loader from '@/components/Loader/Loader'

const LoaderModule = {
  namespaced: true,
  state: { loading: false },
  mutations: {
    START_LOADER (state: any): void {
      state.loading = true
    },
    STOP_LOADER (state: any): void {
      state.loading = false
    }
  },
  actions: {
    // start loader
    StartLoader ({ commit }: any): void {
      commit('START_LOADER')
    },
    // stop loader
    StopLoader ({ commit }: any): void {
      commit('STOP_LOADER')
    }
  },
  getters: {}
}
export default LoaderModule
