<template>
  <div v-if="userData">
    <UserDetail :userData="userData" />
  </div>
  <div v-if="this.apartmentDetails">
    <h1>Vivienda {{ apartmentDetails.alias }}</h1>
  </div>
  <main>
    <div class="container-details">
      <ul v-if="this.apartmentDetails">
        <img class="img" v-bind:src="apartmentDetails.photos" alt="House" />
        <li>Dirección: {{ apartmentDetails.direction }}</li>
        <li>CP: {{ apartmentDetails.cp }}</li>
        <li>Provincia: {{ apartmentDetails.province }}</li>
        <li>Estado: {{ apartmentDetails.status }}</li>
        <li>ID: {{ apartmentDetails._id }}</li>
        <li>INCIDENCIAS: {{ apartmentDetails.incidents?.length }}</li>
        <!-- <li v-if="userData.rol === 'Tenant'">
          Propietario: {{ apartmentDetails.owner[0]?.name }}
          {{ apartmentDetails.owner[0]?.surname }}
        </li>
        <li v-if="userData.rol === 'Owner'">
          Inquilino: {{ apartmentDetails.current_tenant[0]?.name }}
          {{ apartmentDetails.current_tenant[0]?.surname }}
        </li> -->
      </ul>
    </div>
  </main>

  <template v-if="this.apartmentDetails && this.userData">
    <router-link to="/home"><button class="btn btn-info">Volver</button></router-link>
    <router-link :to="`/new-incident/${apartmentDetails._id}`">
      <button class="btn btn-info">Nueva Incidencia</button>
    </router-link>
    <router-link :to="`/list-incidents/${apartmentDetails._id}`">
      <button class="btn btn-info">Lista Incidencias</button>
    </router-link>
    <button
      class="btn btn-info"
      v-if="userData.rol === 'Owner'"
      v-on:click="removeApartment(apartmentDetails._id)"
    >
      Eliminar
    </button>
    <router-link :to="`/edit-apartment/${apartmentDetails._id}`">
      <button v-if="userData.rol === 'Owner'" class="btn btn-info">Editar</button>
    </router-link>
  </template>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'HomeDetail',
  components: { UserDetail },
  data() {
    return {
      direction: '',
      cp: '',
      province: '',
      incidents: [],
      status: '',
      photos: '',
      current_tenant: '',
    };
  },

  computed: {
    ...mapGetters('apartments', ['apartmentDetails']),
    ...mapGetters('account', ['userData']),
  },
  methods: {
    ...mapActions('apartments', ['getApartment', 'deleteApartment']),
    ...mapActions('account', ['loginWithToken', 'getUserById']),
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
