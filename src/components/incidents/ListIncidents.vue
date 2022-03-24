<template>
  <div>
    <h2>Lista de incidencias</h2>
    <ul>
      <li>
        {{ incident.tittle }} | {{ incident.tittle }} | {{ incident.id_apartment }} | |
        {{ incident.state }} | {{ incident.description }}
      </li>
    </ul>
  </div>
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
});
</script>
