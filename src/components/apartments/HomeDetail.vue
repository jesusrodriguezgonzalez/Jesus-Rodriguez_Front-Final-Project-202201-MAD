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
        <li>ID: {{ apartmentDetails._id }}</li>
      </ul>
    </div>
  </main>
  <p>
    <router-link to="/"><button>Volver</button></router-link>
    <router-link :to="`/new-incident/${apartmentDetails._id}`">
      ><button>Nueva Incidencia</button>
    </router-link>
    <button v-if="userData.rol === 'Owner'" v-on:click="deleteApartment()">Eliminar</button>
    <button v-if="userData.rol === 'Owner'" v-on:click="updateApartment()">Editar</button>
  </p>
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
    ...mapActions('apartments', ['getApartment']),
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.getApartment(id);
  },
});
</script>
