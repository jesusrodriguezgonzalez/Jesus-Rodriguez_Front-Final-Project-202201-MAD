<template>
  <nav>
    <router-link to="/login">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/new-apartment">Nuevo apartamento</router-link> |
    <router-link to="/new-incident">Nueva incidencia</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
export default {
  mounted: () => {
    if (localStorage.getItem('token')) {
      // Llamaría al servicio con token y guardaría los datos en mi estado
    }
    console.log(123);
  },
};
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
