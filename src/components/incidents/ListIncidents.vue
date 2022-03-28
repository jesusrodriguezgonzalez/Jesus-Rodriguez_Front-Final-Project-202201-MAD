<template>
  <div class="home-page">
    <div v-if="userData">
      <UserDetail :userData="userData" />
    </div>
    <h2>Lista de incidencias</h2>
    <div class="table-responsive-sm">
      <table class="table">
        <thead>
          <tr class="table-title">
            <th class="bg-info" scope="col">Id</th>
            <th class="bg-info" scope="col">Titulo</th>
            <th class="bg-info" scope="col">Estado</th>
            <th class="bg-info" scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody v-for="(incident, index) of incidentsData" :key="index">
          <tr>
            <th scope="row">{{ index }}</th>
            <td>{{ incident.title }}</td>
            <td>{{ incident.state }}</td>
            <td>
              <router-link :to="`/edit-incident/${incident._id}`">
                <button>✏</button>
              </router-link>
              <button
                v-if="incident.id_user[0] === userData._id"
                v-on:click="removeIncident(incident._id)"
              >
                ❌
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <div v-if="this.incidentsData">
    <div v-for="(incident, index) of incidentsData" :key="index">
      <ul>
        <li>
          TITULO:{{ incident.title }} 🔍
          <router-link :to="`/edit-incident/${incident._id}`">
            <button>✏</button>
          </router-link>
          <button v-on:click="removeIncident(incident._id)">❌</button>
        </li>
      </ul>
    </div>


  </div> -->
    <div v-if="this.apartmentDetails">
      <router-link :to="`/details-home/${apartmentDetails._id}`"
        ><button class="btn btn-info">Volver</button></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'ListIncidents',
  components: { UserDetail },
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
    ...mapActions('apartments', ['getApartment']),
    ...mapActions('account', ['loginWithToken']),
    removeIncident(id: string) {
      this.deleteIncident(id);
    },
  },
  computed: {
    ...mapGetters('incidents', ['incidentsData']),
    ...mapGetters('apartments', ['apartmentDetails']),
    ...mapGetters('account', ['userData']),
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.getIncidentsByHome(id);
    this.apartmentDetails = this.getApartment(id);
  },
});
</script>

<style lang="scss">
.table-responsive-sm {
  margin-left: 10px;
  margin-right: 10px;
  .table-title {
    color: white;
  }
}
</style>
