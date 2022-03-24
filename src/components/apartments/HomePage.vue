<template>
  <div>
    <h1>Detalles del usuario</h1>
  </div>
  <main>
    <h4 v-if="this.userData">Bienvenido, {{ this.userData.name }}</h4>
    <div v-if="userData">
      <UserDetail :userData="userData" />
    </div>

    <div v-if="userData">
      <div v-if="userData.rol === 'Owner'">
        <div v-for="(apartment, index) of userData.apartments_owner" :key="index">
          <router-link :to="`/details-home/${apartment._id}`">
            <HomeCard :apartment="apartment" />
          </router-link>
        </div>
      </div>

      <div v-if="userData.rol === 'Tenant'">
        <div v-for="(apartment, index) of userData.current_apartment" :key="index">
          <router-link :to="`/details-home/${apartment._id}`">
            <HomeCard :apartment="apartment" />
          </router-link>
        </div>
      </div>
    </div>
    <p>
      <router-link to="/">Inicio</router-link>
    </p>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </main>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import HomeCard from './HomeCard.vue';
import UserDetail from '../user/UserDetail.vue';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      surname: '',
      apartments_owner: [{}],
    };
  },
  components: { HomeCard, UserDetail },
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
