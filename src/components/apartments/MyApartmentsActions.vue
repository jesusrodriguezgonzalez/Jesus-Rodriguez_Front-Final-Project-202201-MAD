<template>
  <div class="container-details">
    <nav>
      <router-link to="/new-apartment">Nuevo apartamento</router-link> |
      <router-link to="/new-incident">Nueva incidencia</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MyApartmentsActions',
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
};
</script>
