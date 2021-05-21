import { createStore } from 'vuex'

export default createStore({
  state: {
    //para acceder a todos los componentes desde aqui array de objetos
    productos: []
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload
      console.log(state.productos)
    }
  },
  actions: {
    //llamr al servidory al json
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)

    } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
