<template>
  <div>
    <h1>Detalles del usuario</h1>
  </div>
  <main>
    <h4>Bienvenido, user</h4>
    <ul v-if="this.userData">
      <li>Nombre: {{ this.userData.name }}</li>
      <li>Apellido: {{ this.userData.surname }}</li>
      <li>Email: {{ this.userData.email }}</li>
      <li>Telefono: {{ this.userData.phone }}</li>
      <li>Edad: {{ this.userData.age }}</li>
    </ul>
  </main>
  <p>
    <router-link to="/login">Logout</router-link>
  </p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'user-data',

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      surname: '',
    };
  },

  computed: {
    ...mapGetters('account', ['userData']),
  },

  mounted() {
    if (localStorage.getItem('token')) {
      let tokenUser = localStorage.getItem('token');
      tokenUser = JSON.parse(tokenUser);
      this.loginWithToken(tokenUser);
    }
  },

  methods: {
    ...mapActions('account', ['loginWithToken']),
  },
};
</script>
