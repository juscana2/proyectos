<template>
 <div class="container">
      <h2>Carrito de compras </h2>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody id="items">
          
            <Item
            v-for="item in items" :key="item.id"
            :item="item"
             />
             </tbody>

        <tfoot>
          <tr id="footer">
            <th scope="row" colspan="5" v-if="Object.keys(items).length === 0">Carrito vacío - comience a comprar!</th>
            <Footer v-else/>
          </tr>
        </tfoot>
      </table>
     
    </div>
</template>
<script>
import { computed } from 'vue'
import {useStore} from 'vuex'
import Item from './Item'
import Footer from './Footer'

export default {
    components: {Item,Footer},
    setup(){
        const store =useStore()
        const items = computed (()=> store.state.carrito)

        return{items}
    }

}
</script>

