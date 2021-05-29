<template>
  <div class="container">
    <br>
  
  <h1 class="p-3 mb-2 color-indianred text-white"><img  id="logo" src="/image/carro.png" alt="Carro"> Almibares... </h1>
 
 <!-- {{productos}}-->
  <!--<pre>
  {{carrito}}
  </pre>-->
  
   
    <!--llamar al componente Carrito-->

   <Carrito />
  <div class="row">
  <!--llamar al componente card y crear el ciclo for para replicar-->
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
//impor card ,Carrito desde
import Card from './components/Card'
import Carrito from './components/Carrito'

export default {
  name: 'App',
  components: {
    //add componente
    Card, Carrito
    },
    setup(){
      const store =useStore()
      //acceder y leer recive funcion de fecht
      onMounted(()=>{
        store.dispatch('fetchData')

      })
// sereciben todos los date del json
      const productos = computed(()=> store.state.productos)
     // const carrito = computed (() => store.state.carrito)
      //return{productos , carrito}
      return{productos}


    }
}

</script>
<style>
@import '/assets/vue.css';
</style>





