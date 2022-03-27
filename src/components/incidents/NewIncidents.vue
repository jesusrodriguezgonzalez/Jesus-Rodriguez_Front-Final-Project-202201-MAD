<template>
  <div>
    <div v-if="userData">
      <UserDetail :userData="userData" />
    </div>
    <h2>Nueva incidencia</h2>
    <form @submit.prevent="handleSubmit">
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
            <option v-for="(state, index) in states" v-bind:value="state.value" v-bind:key="index">
              {{ state.type }}
            </option>
          </select>
        </label>
      </div>
      <div class="form-group">
        <button class="btn-create">Register</button>
        <router-link :to="`/details-home/${apartmentDetails._id}`" class="btn btn-link"
          >Cancel</router-link
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'NewIncidents',
  components: { UserDetail },
  data() {
    return {
      incident: {
        title: '',
        type_incidence: 'Break',
        description: '',
        priority: 'Medium',
        state: 'Open',
        id_apartment: '0',
        id_user: '0',
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
    ...mapState('incidents', ['status']),
    ...mapGetters('account', ['userData']),
    ...mapGetters('apartments', ['apartmentDetails']),
  },

  methods: {
    ...mapActions('incidents', ['registerIncident']),
    handleSubmit() {
      this.submitted = true;
      this.registerIncident(this.incident);
    },
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.incident.id_apartment = id as string;
    // eslint-disable-next-line no-underscore-dangle
    this.incident.id_user = this.userData._id;
  },
});
</script>
