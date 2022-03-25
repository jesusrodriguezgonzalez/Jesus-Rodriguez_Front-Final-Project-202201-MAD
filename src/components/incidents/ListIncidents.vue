<template>
  <h2>Lista de incidencias</h2>
  <div v-if="this.incidentsData">
    <div v-for="(incident, index) of incidentsData" :key="index">
      <li>
        TITULO:{{ incident.title }} 🔍
        <router-link :to="`/edit-incident/${incident._id}`">
          <button>✏</button>
        </router-link>
        <button v-on:click="removeIncident(incident._id)">❌</button>
      </li>
    </div>
  </div>
  <router-link :to="`/details-home/${apartmentDetails._id}`"
    ><button class="btn btn-primary">Volver</button></router-link
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'ListIncidents',
  data() {
    return {
      title: '',
      description: '',
      priority: '',
      state: '',
    };
  },
  methods: {
    ...mapActions('incidents', ['getIncidentsByHome', 'deleteIncident']),
    ...mapActions('account', ['loginWithToken']),
    removeIncident(id: string) {
      this.deleteIncident(id);
    },
  },
  computed: {
    ...mapGetters('incidents', ['incidentsData']),
    ...mapGetters('apartments', ['apartmentDetails']),
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.getIncidentsByHome(id);
  },
});
</script>
