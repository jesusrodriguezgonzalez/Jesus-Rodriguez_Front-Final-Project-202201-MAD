<template>
  <div>
    <h1>Detalles del usuario</h1>
  </div>
  <main>
    <h4 v-if="this.userData">Bienvenido, {{ this.userData.name }}</h4>
    <ul v-if="this.userData">
      <li>Nombre: {{ this.userData.name }}</li>
      <li>Apellido: {{ this.userData.surname }}</li>
      <li>Email: {{ this.userData.email }}</li>
      <li>Telefono: {{ this.userData.phone }}</li>
      <li>Edad: {{ this.userData.age }}</li>
      <li>Propiedades: {{ this.userData.apartments_owner }}</li>
    </ul>
  </main>
  <p>
    <router-link to="/login">Logout</router-link>
  </p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      surname: '',
      apartments_owner: [],
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
