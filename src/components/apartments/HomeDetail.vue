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
        <li>status: {{ apartmentDetails.status }}</li>
        <li>incidents: {{ apartmentDetails.incidents }}</li>
      </ul>
    </div>
  </main>

  <template v-if="this.apartmentDetails && this.userData">
    <router-link to="/"><button>Volver</button></router-link>
    <router-link :to="`/new-incident/${apartmentDetails._id}`">
      ><button>Nueva Incidencia</button>
    </router-link>
    <router-link :to="`/new-incident/${apartmentDetails._id}`">
      ><button>Lista Incidencias</button>
    </router-link>
    <button v-if="userData.rol === 'Owner'" v-on:click="removeApartment(apartmentDetails._id)">
      Eliminar
    </button>
    <button v-if="userData.rol === 'Owner'">Editar</button>
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
    if (localStorage.getItem('token')) {
      const tokenUser = localStorage.getItem('token');
      this.loginWithToken(tokenUser);
    }
    const route = useRoute();
    const { id } = route.params;
    this.getApartment(id);
  },
});
</script>
