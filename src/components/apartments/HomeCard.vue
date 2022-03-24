<template>
  <div class="container-details">
    <ul v-if="this.apartment">
      <li>direction: {{ apartment.direction }}</li>
      <li>cp: {{ apartment.cp }}</li>
      <li>province: {{ apartment.province }}</li>
      <li>incidents: {{ apartment.incidents }}</li>
      <li>status: {{ apartment.status }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeCard',
  data() {
    return {
      direction: '',
      cp: '',
      province: '',
      incidents: [],
      status: '',
    };
  },
  props: {
    apartment: {
      type: Object,
    },
  },
});
</script>
