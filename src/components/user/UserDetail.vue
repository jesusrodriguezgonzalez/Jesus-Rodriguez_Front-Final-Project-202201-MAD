<template>
  <main>
    <div class="container-details">
      <ul v-if="this.userData">
        <img class="img" v-bind:src="userData.image" :alt="userData.name" />
        <li>Nombre: {{ userData.name }}</li>
        <li>Apellido: {{ userData.surname }}</li>
        <li>Province: {{ userData.city }}</li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserDetail',
  data() {
    return {
      name: '',
      surname: '',
      province: '',
      image: '',
    };
  },

  props: {
    userData: {
      type: Object,
    },
  },
});
</script>
