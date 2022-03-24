<template>
  <div>
    <h1>Viviendas</h1>
  </div>
  <main>
    <div class="container-details">
      <ul v-if="this.userData">
        <li>direction: Direcion</li>
        <li>cp: CP</li>
        <li>province: Provincia/li></li>
        <li>incidents: Incidencia</li>
        <li>status: Status</li>
      </ul>
    </div>
  </main>
  <p>
    <router-link to="/">Inicio</router-link>
  </p>
</template>

<script lang="ts">
export default {
  name: 'UserDetail',
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
