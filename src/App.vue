<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link v-if="!this.userData" to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    if (localStorage.getItem('token')) {
      const tokenUser = localStorage.getItem('token');
      this.loginWithToken(tokenUser);
    }
  },
  computed: {
    ...mapGetters('account', ['userData']),
  },
  methods: {
    ...mapActions('account', ['loginWithToken']),
  },
});
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  font-family: 'Rubik', sans-serif;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .img {
    width: 100px;
    height: 100px;
  }
  background-color: #f8fbff;
  li {
    list-style-type: none;
  }
  button {
    color: white;
  }
  a {
    text-decoration: none;
  }

  input {
    border-radius: 10px;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
