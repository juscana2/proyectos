<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td><img :src=" item.picture " class="imgcarrito" alt="" /></td>
    <td>
      <button class="btn btn-info btn-sm" @click="aumentar(item.id)">+</button>
      <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">
        -
      </button>
      <!--
            
              <button class="btn btn-danger btn-sm" @click="eliminar(item.id)">
                x
            </button>-->
    </td>
    <td>
      <span>{{parseFloat( item.precio * item.cantidad ).toFixed(2)}}</span> €
    </td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["item"],
  setup() {
    const store = useStore();
    const aumentar = (id) => {
      store.commit("aumentar", id);
    };
    const disminuir = (id) => {
      store.commit("disminuir", id);
    };
    //const eliminar = id => {store.commit('eliminar', id)}
    //constante imagen
    const  itemsImagen = (id) => {
      store.commit("itemsImagen", id);
    };

    return { aumentar, disminuir,  itemsImagen }; //,eliminar}
  },
};
</script>
