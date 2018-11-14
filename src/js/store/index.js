import Vue from 'vue'
import Vuex from 'vuex'
import configManager from '../configManager'

Vue.use(Vuex)

const root = {
  namespaced: true,
  state: {
    config: {
      sampleConfig: ''
    }
  },
  mutations: {
    saveConfig (state, payload) {
      state.config = payload
      configManager.write(payload)
    }
  },
  actions: {
    fetchConfig ({ commit }) {
      configManager.load().then(config => {
        if (config) {
          const data = JSON.parse(config)
          commit('saveConfig', data)
        }
      })
    }
  }
}

export default new Vuex.Store({
  modules: {
    root
  }
})
