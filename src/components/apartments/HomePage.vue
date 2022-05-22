<template>
  <div class="home-page">
    <div v-if="userData">
      <UserDetail :userData="userData" />
    </div>
    <h1>Mis inmuebles</h1>
    <h5 v-if="userData.rol === 'Owner'">Total {{ userData.apartments_owner.length }}</h5>

    <h5 v-if="homeWithIncidents">hh {{ homeWithIncidents.length }}</h5>
    <MyApartmentsActions />

    <div class="container-cards" v-if="userData">
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
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import HomeCard from './HomeCard.vue';
import UserDetail from '../user/UserDetail.vue';
import MyApartmentsActions from './MyApartmentsActions.vue';

export default defineComponent({
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      surname: '',
      image: '',
      apartments_owner: [{}],
    };
  },
  components: { HomeCard, UserDetail, MyApartmentsActions },
  computed: {
    ...mapGetters('account', ['userData']),
  },

  created() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login');
    } else {
      const tokenUser = localStorage.getItem('token');
      this.loginWithToken(tokenUser);
    }
  },

  // mounted() {
  //   const homeWithIncidents = this.userData.apartments_owner.filter(
  //     (home: any) => home.incidents.length > 1
  //   );
  // },

  methods: {
    ...mapActions('account', ['loginWithToken']),
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

// @media (min-width: 600px) {
//   .container-cards {
//     display: flex;
//     flex-direction: row;
//     max-width: 1200px;
//     margin-block: 2rem;
//     gap: 2rem;
//   }
// }
</style>
