<template>
  <div v-if="userData">
    <UserDetail :userData="userData" />
  </div>
  <div v-if="this.apartmentDetails">
    <h1>Vivienda {{ apartmentDetails.alias }}</h1>
  </div>
  <div v-if="this.apartmentDetails" class="container">
    <div class="card">
      <div class="card__header">
        <img
          v-bind:src="apartmentDetails.photos"
          alt="card__image"
          class="card__image"
          width="600"
        />
      </div>
      <div class="card__body">
        <span class="tag tag-blue">{{ apartmentDetails.province }}</span>
        <h4>{{ apartmentDetails.alias }}</h4>
        <p>Direccion: {{ apartmentDetails.direction }}</p>
        <p>Codigo Postal: {{ apartmentDetails.cp }}</p>
        <p>Incidencias: {{ apartmentDetails.incidents?.length }}</p>
        <p>Estado: {{ apartmentDetails?.status }}</p>
        <p>ID: {{ apartmentDetails?._id }}</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" />
          <div class="user__info">
            <div v-if="userData.rol === 'Tenant'">
              <h5>
                {{ apartmentDetails?.owner[0]?.name }} {{ apartmentDetails?.owner[0]?.surname }}
              </h5>
              <small>{{ apartmentDetails?.owner[0]?.email }}</small>
            </div>
            <div v-if="userData.rol === 'Owner'">
              <h5>
                {{ apartmentDetails?.current_tenant[0]?.name }}
                {{ apartmentDetails?.current_tenant[0]?.surname }}
              </h5>
              <small>{{ apartmentDetails?.current_tenant[0]?.email }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <template v-if="this.apartmentDetails && this.userData">
    <router-link to="/home"><button class="btn btn-outline-info">Volver</button></router-link>
    <router-link :to="`/new-incident/${apartmentDetails._id}`">
      <button class="btn btn-outline-info">Nueva Incidencia</button>
    </router-link>
    <router-link :to="`/list-incidents/${apartmentDetails._id}`">
      <button class="btn btn-outline-info">Lista Incidencias</button>
    </router-link>
    <button
      class="btn btn-outline-info"
      v-if="userData.rol === 'Owner'"
      v-on:click="removeApartment(apartmentDetails._id)"
    >
      Eliminar
    </button>
    <router-link :to="`/edit-apartment/${apartmentDetails._id}`">
      <button v-if="userData.rol === 'Owner'" class="btn btn-outline-info">Editar</button>
    </router-link>
  </template>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'HomeDetail',
  components: { UserDetail },
  data() {
    return {
      direction: '',
      cp: '',
      province: '',
      incidents: [],
      status: '',
      photos: '',
      current_tenant: '',
    };
  },

  computed: {
    ...mapGetters('apartments', ['apartmentDetails']),
    ...mapGetters('account', ['userData']),
  },
  methods: {
    ...mapActions('apartments', ['getApartment', 'deleteApartment']),
    ...mapActions('account', ['loginWithToken', 'getUserById']),
    removeApartment(id: string) {
      this.deleteApartment(id);
    },
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.getApartment(id);
  },
});
</script>

<style lang="scss">
button {
  margin-right: 5px;
}
</style>
