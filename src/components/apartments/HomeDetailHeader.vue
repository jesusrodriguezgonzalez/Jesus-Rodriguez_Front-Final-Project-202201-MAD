<template>
  <div v-if="userData">
    <UserDetail :userData="userData" />
  </div>
  <div>
    <h1>Viviendas</h1>
  </div>
  <main>
    <div class="container-details">
      <ul v-if="this.userData">
        <li>direction: Direcion</li>
        <li>cp: CP</li>
        <li>province: Provincia/li></li>
      </ul>
    </div>
  </main>
  <p>
    <router-link to="/">Inicio</router-link>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'HomeDetailHeader',
  components: { UserDetail },
  data() {
    return {
      direction: '',
      cp: '',
      province: '',
    };
  },
});
</script>
