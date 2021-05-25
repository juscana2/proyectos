<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
    <div class="card">
      <img
        :src="producto.picture"
        :alt="`imagen-${producto.title}`"
        class="img-thumbnail"
      />
      <div class="card-body">
        <h5 class="card-title">{{ producto.title }}</h5>
        <p class="card-text"><span>{{ producto.precio }}</span>€</p>
        <button class="btn btn-outline-danger" @click="agregar(producto)">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["producto"],
  setup() {
    const store = useStore();
    const agregar = (producto) => {
      //console.log(producto);
      store.dispatch('agregarAlCarro',producto)
    };
    return { agregar }
  },
};
</script>


