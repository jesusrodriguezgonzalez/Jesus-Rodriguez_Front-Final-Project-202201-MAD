<template>
  <main>
    <div class="container-details">
      <ul v-if="this.userData">
        <li>Nombre: {{ this.userData.name }}</li>
        <li>Apellido: {{ this.userData.surname }}</li>
        <li>Province: {{ this.userData.city }}</li>
        <li>Imagen: {{ this.userData.image }}</li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
export default {
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
};
</script>
