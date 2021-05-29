import { createStore } from 'vuex'

export default createStore({
  state: {
    //para acceder a todos los componentes desde aqui array de objetos
    productos: [],
    //objeto
    carrito: {}
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload
      console.log(state.productos)
    },
    //agregar al carrito mediante button
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload

    },
    // vaciar el carrito button
    vaciarCarrito(state) {
      state.carrito = {}
    },
    //  button incrementar objet play
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1

    },
    //  button incrementar objet play
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
      if (state.carrito[payload].cantidad == 0) {
        delete state.carrito[payload]
      }
    },
    /*// button eliminar objet
 eliminar(state, payload){
   state.carrito[payload].cantidad = state.carrito[payload].cantidad = 0
   delete state.carrito[payload]
},*/
    //agregar imagen a la compra 1 funciona

    itemsImagen() {
      return this.productos.map(producto => {
        return Object.assign(producto, { picture: JSON.parse(producto.picture) })
      })
    },


  },

  actions: {
    //llamr al servidor al json
    async fetchData({ commit }) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)

      } catch (error) {
        console.log(error)
      }
    },
    //agrgar al carrito
    agregarAlCarro({ commit, state }, producto) {
      state.carrito.hasOwnProperty(producto.id)
        //si el producto existe agrregalo
        ? producto.cantidad = state.carrito[producto.id].cantidad + 1
        // si no existe
        : producto.cantidad = 1
      commit('setCarrito', producto)

    }
  },


  // total de producto y precio
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    },
    // total precio
    totalPrecio(state) {
      return parseFloat(Object.values(state.carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)).toFixed(2)
    }
  },


  modules: {
  }
})
