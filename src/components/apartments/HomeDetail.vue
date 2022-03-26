<template>
  <div v-if="this.apartmentDetails">
    <h1>Vivienda {{ apartmentDetails.alias }}</h1>
  </div>
  <main>
    <div class="container-details">
      <ul v-if="this.apartmentDetails">
        <img class="img" v-bind:src="apartmentDetails.photos" alt="House" />
        <li>DIRECCION: {{ apartmentDetails.direction }}</li>
        <li>CP: {{ apartmentDetails.cp }}</li>
        <li>PROVINCIA: {{ apartmentDetails.province }}</li>
        <li>ESTADO: {{ apartmentDetails.status }}</li>
        <li>ID: {{ apartmentDetails._id }}</li>
        <li>INCIDENCIAS: {{ apartmentDetails.incidents.length }}</li>
      </ul>
    </div>
  </main>

  <template v-if="this.apartmentDetails && this.userData">
    <router-link to="/"><button class="btn btn-primary">Volver</button></router-link>
    <router-link :to="`/new-incident/${apartmentDetails._id}`">
      <button class="btn btn-primary">Nueva Incidencia</button>
    </router-link>
    <router-link :to="`/list-incidents/${apartmentDetails._id}`">
      <button class="btn btn-primary">Lista Incidencias</button>
    </router-link>
    <button
      class="btn btn-primary"
      v-if="userData.rol === 'Owner'"
      v-on:click="removeApartment(apartmentDetails._id)"
    >
      Eliminar
    </button>
    <router-link :to="`/edit-apartment/${apartmentDetails._id}`">
      <button v-if="userData.rol === 'Owner'" class="btn btn-primary">Editar</button>
    </router-link>
  </template>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeDetail',
  data() {
    return {
      direction: '',
      cp: '',
      province: '',
      incidents: [],
      status: '',
      photos: '',
    };
  },

  computed: {
    ...mapGetters('apartments', ['apartmentDetails']),
    ...mapGetters('account', ['userData']),
  },
  methods: {
    ...mapActions('apartments', ['getApartment', 'deleteApartment']),
    ...mapActions('account', ['loginWithToken']),
    removeApartment(id: string) {
      this.deleteApartment(id);
    },
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.getApartment(id);
  },
});
</script>
