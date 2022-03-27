<template>
  <div class="container-details">
    <ul v-if="this.userData">
      <img class="img-profile" v-bind:src="userData.image" :alt="userData.name" />
      <li>{{ userData.name }} {{ userData.surname }}</li>
      <li>{{ userData.email }}</li>
      <li>ID: {{ userData._id }}</li>
    </ul>
    <div class="container-buttons">
      <button class="btn btn-outline-info">
        <router-link to="/edit-userDetails/">Editar perfil</router-link>
      </button>
      <button class="btn btn-outline-info" @click="actionLogout">Loogout</button>
    </div>
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

.container-buttons {
  margin-bottom: 15px;
}
</style>
