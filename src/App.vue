<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link v-if="!this.userData" to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  mounted: () => {
    if (localStorage.getItem('token')) {
      // Llamaría al servicio con token y guardaría los datos en mi estado
    }
    console.log(123);
  },
  computed: {
    ...mapGetters('account', ['userData']),
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
