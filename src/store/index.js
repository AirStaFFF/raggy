import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    attributes: [
      {
        customData: {
          // start,
          // end,
          title: 'Cookout with girl.',
          class: 'bg-orange-500 text-white',
        },
        dates: {
          // start: null,
          // end: null,
          months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          days: 12,
        }
      }
    ]
  },
  mutations: {
    UPDATE_ATTRIBUTES(state, payload) {
      state.attributes.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
