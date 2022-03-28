<template>
  <div class="home-page">
    <div>
      <div v-if="userData">
        <UserDetail :userData="userData" />
      </div>
      <h2>Editar incidencia</h2>
      <form @submit.prevent="handleSubmit" v-if="this.incident">
        <div class="form-group">
          <label for="title"
            >Titulo
            <input type="title" v-model="incident.title" name="title" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label for="type_incidence"
            >Tipo de incidencia
            <select name="type_incidence" v-model="incident.type_incidence" class="form-control">
              <option
                v-for="(incident, index) in typeIncidents"
                v-bind:value="incident.value"
                v-bind:key="index"
              >
                {{ incident.type }}
              </option>
            </select>
          </label>
        </div>
        <div class="form-group">
          <label for="description"
            >Descripcion de la incidencia

            <textarea
              class="form-control"
              v-model="incident.description"
              name="description"
              rows="4"
              cols="50"
            ></textarea>
          </label>
        </div>

        <div class="form-group">
          <label for="priority"
            >Prioridad
            <select class="form-control" name="priority" v-model="incident.priority">
              <option
                v-for="(priority, index) in priorities"
                v-bind:value="priority.value"
                v-bind:key="index"
              >
                {{ priority.type }}
              </option>
            </select>
          </label>
        </div>
        <div class="form-group">
          <label for="state"
            >Estado
            <select class="form-control" name="state" v-model="incident.state">
              <option
                v-for="(state, index) in states"
                v-bind:value="state.value"
                v-bind:key="index"
              >
                {{ state.type }}
              </option>
            </select>
          </label>
        </div>
        <div class="form-group">
          <button class="btn btn-success">Editar</button>
          <router-link to="/home" class="btn btn-link">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'EditIncident',
  components: { UserDetail },
  data() {
    return {
      incident: {
        title: '',
        type_incidence: 'Break',
        description: '',
        priority: 'Medium',
        state: 'Open',
        idIncident: '0',
        id_user: '0',
        id_apartment: '',
      },
      submitted: false,

      typeIncidents: [
        { type: 'Incidencia Adminsitrativa', value: 'Administrative' },
        { type: 'Incidencia Rotura', value: 'Break' },
        { type: 'Incidencia pago', value: 'Paid' },
        { type: 'Incidencia Otros', value: 'Others' },
      ],

      priorities: [
        { type: 'Urgente', value: 'High' },
        { type: 'Prioridad media', value: 'Medium' },
        { type: 'Puede esperar', value: 'Low' },
      ],

      states: [
        { type: 'Abierto', value: 'Open' },
        { type: 'Cerrado', value: 'Closed' },
      ],
    };
  },
  computed: {
    ...mapGetters('account', ['userData']),
    ...mapGetters('incidents', ['incidentsData']),
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    // eslint-disable-next-line no-underscore-dangle
    const incidentById = this.incidentsData.find((e: any) => e._id === id);
    this.incident.idIncident = id as string;
    this.incident.title = incidentById.title;
    this.incident.type_incidence = incidentById.type_incidence;
    this.incident.description = incidentById.description;
    this.incident.priority = incidentById.priority;
    this.incident.state = incidentById.state;
    this.incident.id_apartment = incidentById.id_apartment;
    // eslint-disable-next-line no-underscore-dangle
    this.incident.id_user = this.userData._id;
  },

  methods: {
    ...mapActions('incidents', ['getIncidentsByHome', 'updateIncident']),
    handleSubmit() {
      this.submitted = true;
      this.updateIncident(this.incident);
    },
  },
});
</script>
