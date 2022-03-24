<template>
  <main>
    <div v-if="userData">
      <UserDetail :userData="userData" />
      <MyApartmentsActions />
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
      <router-link to="/"><button>Inicio</button></router-link>
    </p>
    <p>
      <router-link to="/login"><button>Logout</button></router-link>
    </p>
  </main>
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
      apartments_owner: [{}],
    };
  },
  components: { HomeCard, UserDetail, MyApartmentsActions },
  computed: {
    ...mapGetters('account', ['userData']),
  },

  mounted() {
    if (localStorage.getItem('token')) {
      const tokenUser = localStorage.getItem('token');
      this.loginWithToken(tokenUser);
    }
  },

  methods: {
    ...mapActions('account', ['loginWithToken']),
  },
});
</script>
