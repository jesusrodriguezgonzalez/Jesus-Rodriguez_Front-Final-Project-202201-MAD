<template>
  <div class="container-details">
    <ul v-if="this.userData">
      <img class="img-profile" v-bind:src="userData.image" :alt="userData.name" />
      <li>Nombre: {{ userData.name }}</li>
      <li>Apellido: {{ userData.surname }}</li>
      <li>Province: {{ userData.city }}</li>
    </ul>
    <button @click="actionLogout">Loogout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

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
  methods: {
    ...mapActions('account', ['logout']),
    actionLogout() {
      this.logout();
    },
  },
});
</script>

<style lang="scss">
.img-profile {
  border-radius: 15px;
  width: 70px;
  height: 70px;
}
</style>
