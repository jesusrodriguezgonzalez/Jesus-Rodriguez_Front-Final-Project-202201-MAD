<template>
  <div class="container-details">
    <nav class="nav-container-actions">
      <div v-if="userData.rol === 'Owner'" class="icon-actions">
        <button id="new-apartment" class="btn btn-outline-info">
          <router-link to="/new-apartment">Añadir vivienda</router-link>
        </button>
      </div>
      <div v-if="userData.rol === 'Owner'" class="icon-actions">
        <button class="btn btn-outline-info">
          <router-link to="/add-tenant">Generar contrato</router-link>
        </button>
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
.nav-container-actions {
  display: flex;
  flex-direction: row;
}
</style>
