<template>
  <div>
    <h1>Viviendas</h1>
  </div>
  <main>
    <div class="container-details">
      <ul v-if="this.userData">
        <li>direction: Direcion</li>
        <li>cp: CP</li>
        <li>province: {{ apartment.province }}</li>
        <li>incidents: {{ apartment.incidents }}</li>
        <li>status: {{ apartment.sattus }}</li>
      </ul>
    </div>
  </main>
  <p>
    <router-link to="/">Inicio</router-link>
  </p>
</template>

<script lang="ts">
export default {
  name: 'HomeDetail',
  data() {
    return {
      direction: '',
      cp: '',
      province: '',
      incidents: [],
      status: '',
    };
  },
};
</script>
