<template>
  <!-- <nav>
    <router-link to="/">Home |</router-link>
    <router-link to="/register"> Register</router-link>
  </nav> -->
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
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .img {
    width: 100px;
    height: 100px;
  }
  width: 100vw;
  height: 100vh;

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

.btn-create {
  width: 119px;
  height: 31px;
  left: 147px;
  top: 815px;

  background: #6cc775;
  border-radius: 50px;
}

input {
  width: 357px;
  height: 46px;
  left: 32px;
  top: 667px;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(29, 40, 142, 0.07);
  border-radius: 10px;
}
</style>
