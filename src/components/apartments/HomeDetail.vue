<template>
  <div class="home-page">
    <div v-if="userData">
      <UserDetail :userData="userData" />
    </div>
    <div v-if="this.apartmentDetails && userData">
      <h1>Vivienda {{ apartmentDetails.alias }}</h1>
    </div>
    <div v-if="this.apartmentDetails && userData" class="container">
      <div class="card-2">
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
          <p v-if="userData.rol === 'Owner'">Estado: {{ apartmentDetails?.status }}</p>
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
  </div>
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
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin-right: 5px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  display: grid;
  place-items: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card-2 {
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #46d0d9);
}

.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag {
  align-self: flex-start;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  font-size: 0.75rem;
}

.tag + .tag {
  margin-left: 0.5em;
}

.tag-blue {
  background: #56ccf2;
  background: linear-gradient(to bottom, #2f80ed, #56ccf2);
  color: #fafafa;
}

.tag-brown {
  background: #d1913c;
  background: linear-gradient(to bottom, #ffd194, #d1913c);
  color: #fafafa;
}

.tag-red {
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
}

.user {
  display: flex;
  gap: 0.5rem;
}

.user__image {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.user__info > small {
  color: #666;
}
</style>
