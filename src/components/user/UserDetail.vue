<template>
  <div class="container-details">
    <div v-if="this.userData" class="details">
      <div>
        <h3>{{ userData.name }} {{ userData.surname }}</h3>
        <span>{{ userData.email }}</span>
      </div>
      <img class="img-profile" v-bind:src="userData.image" :alt="userData.name" />
    </div>
    <div class="container-buttons">
      <button class="btn btn-outline-info">
        <router-link to="/edit-userDetails/">Editar perfil</router-link>
      </button>
      <button class="btn btn-outline-info">
        <router-link to="/home">Inicio</router-link>
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
  margin-left: 25px;
}

.container-buttons {
  margin-bottom: 15px;
}

.details {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
</style>
