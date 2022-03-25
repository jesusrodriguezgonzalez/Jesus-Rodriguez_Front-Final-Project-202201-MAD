<template>
  <div class="container-details">
    <ul v-if="this.apartment">
      <li>Direccion: {{ apartment.direction }}</li>
      <li>Codigo Postal: {{ apartment.cp }}</li>
      <li>Provincia: {{ apartment.province }}</li>
      <li>Incidencias: {{ apartment.incidents }}</li>
      <li>Estado: {{ apartment.status }}</li>
      <li>ID: {{ apartment._id }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeCard',
  data() {
    return {
      direction: '',
      cp: '',
      province: '',
      incidents: [],
      status: '',
    };
  },
  props: {
    apartment: {
      type: Object,
    },
  },
});
</script>
