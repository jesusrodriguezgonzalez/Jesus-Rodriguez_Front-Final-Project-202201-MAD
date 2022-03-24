<template>
  <div>
    <h1>Viviendas</h1>
  </div>
  <main>
    <div class="container-details">
      <ul v-if="this.apartmentDetails">
        <li>direction: Direcion</li>
        <li>cp: CP</li>
        <li>province: {{ apartmentDetails.province }}</li>
        <li>incidents: {{ apartmentDetails.incidents }}</li>
        <li>status: {{ apartmentDetails.status }}</li>
      </ul>
    </div>
  </main>
  <p>
    <router-link to="/">Inicio</router-link>
  </p>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters('apartments', ['apartmentDetails']),
  },
  methods: {
    ...mapActions('apartments', ['getApartment']),
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.getApartment(id);
  },
};
</script>
