<template>
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
  background-color: #f4f8fc;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  .img {
    width: 100px;
    height: 100px;
  }
  width: 100vw;
  height: 100vh;

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
}

.home-page {
  background-color: #f4f8fc;
}
nav {
  padding: 30px;
}

.btn-outline-info {
  margin-top: 25px;
}

.btn-success {
  margin: 15px;
}
</style>
