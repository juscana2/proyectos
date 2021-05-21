<template>
  <div class="container">
  <h1>Carrito Dulce</h1>
  {{productos}}
   <hr>
  <div class="row">
  <!--llamar al componente card-->
  <Card
  v-for="producto of productos" :key="producto.id"
  :producto="producto"
 
  />

    </div>
 
   </div>
</template>

<script>
import{useStore} from 'vuex'
import { computed, onMounted } from 'vue'
//impoer card desde
import Card from './components/Card'



export default {
  name: 'App',
  components: {
    Card
    },
    setup(){
      const store =useStore()
      //acceder y leer recive funcion de fecht
      onMounted(()=>{
        store.dispatch('fetchData')

      })
// sereciben todos los date del json
      const productos = computed(()=> store.state.productos)
      return{productos}


    }
}
//union de los componentes
</script>





