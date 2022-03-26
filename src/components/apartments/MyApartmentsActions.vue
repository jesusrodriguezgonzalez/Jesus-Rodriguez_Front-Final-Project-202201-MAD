<template>
  <div class="container-details">
    <h1>My Apartments</h1>
    <nav class="nav-container">
      <div v-if="userData.rol === 'Owner'" class="icon-actions">
        <router-link to="/new-apartment">Nuevo apartamento</router-link>
      </div>
      |
      <div class="icon-actions">
        <router-link to="/edit-userDetails/">Editar perfil</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'MyApartmentsActions',

  computed: {
    ...mapGetters('account', ['userData']),
  },
});
</script>

<style lang="scss">
.nav-container {
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
  .icon-actions {
    border-radius: 10px;
    width: 70px;
    hight: 70px;
    background-color: #12c9ee;
  }
}
</style>
