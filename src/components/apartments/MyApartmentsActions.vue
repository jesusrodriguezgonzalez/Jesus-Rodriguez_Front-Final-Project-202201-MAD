<template>
  <div class="container-details">
    <h1>My Apartments</h1>
    <nav>
      <router-link v-if="userData.rol === 'Owner'" to="/new-apartment"
        >Nuevo apartamento</router-link
      >
      |
      <router-link to="/edit-userDetails/">Editar perfil</router-link>
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
