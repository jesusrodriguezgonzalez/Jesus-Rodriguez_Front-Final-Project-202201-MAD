<template>
  <div class="container-details">
    <div class="card-apartment">
      <ul v-if="this.apartment">
        <li>Alias: {{ apartment.alias }}</li>
        <li>Direccion: {{ apartment.direction }}</li>
        <li>Codigo Postal: {{ apartment.cp }}</li>
        <li>Provincia: {{ apartment.province }}</li>
        <li>Incidencias: {{ apartment.incidents.length }}</li>
        <li>Estado: {{ apartment.status }}</li>
        <li>Inquilino: {{ apartment.current_tenant }}</li>
        <li>ID: {{ apartment._id }}</li>
      </ul>
    </div>
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
<style lang="scss">
.card-apartment {
  width: 350px;
  border-radius: 15px;
  margin: 20px;
  color: #143656;
}
</style>
