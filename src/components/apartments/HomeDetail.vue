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
          <span class="tag tag-blue">{{ apartmentDetails?.status }}</span>
          <h4>Datos vivienda</h4>
          <p>Direccion: {{ apartmentDetails.direction }}</p>
          <p>{{ apartmentDetails.province }} {{ apartmentDetails.cp }}</p>
          <p>Incidencias: {{ apartmentDetails.incidents?.length }}</p>
          <!-- <p>ID: {{ apartmentDetails?._id }}</p> -->
          <h4>Datos contrato</h4>
          <div v-if="apartmentDetails.current_contract">
            <p>Importe: {{ apartmentDetails?.current_contract?.fee }} €</p>
            <p>Inicio contrato: {{ apartmentDetails?.current_contract?.start_date }}</p>
            <p>Fin contrato: {{ apartmentDetails?.current_contract?.end_date }}</p>
            <p>
              <a
                v-bind:href="apartmentDetails?.current_contract?.document[0]"
                target="_blank"
                download
              >
                Ver Contrato
              </a>
            </p>
          </div>
        </div>
        <div class="card__footer">
          <div class="user">
            <img
              v-if="userData.rol === 'Owner'"
              v-bind:src="apartmentDetails?.current_tenant[0]?.image"
              alt="user__image"
              class="user__image"
            />
            <img
              v-if="userData.rol === 'Tenant' && apartmentDetails?.owner[0]?.image"
              v-bind:src="apartmentDetails?.owner[0]?.image"
              alt=" "
              class="user__image"
            />
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
                <small v-if="apartmentDetails?.current_tenant[0]?.phone">
                  +34 {{ apartmentDetails?.current_tenant[0]?.phone }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="function-buttons">
      <button
        class="btn btn-outline-info"
        v-if="userData.rol === 'Owner'"
        v-on:click="removeApartment(apartmentDetails._id)"
      >
        <img
          class="icon"
          src="https://firebasestorage.googleapis.com/v0/b/ehome-77326.appspot.com/o/boton-eliminar.png?alt=media&token=5c5685cb-ab16-45ce-b69c-5b60a4c008e2"
          alt=""
          srcset=""
        />
      </button>
      <router-link :to="`/edit-apartment/${apartmentDetails._id}`">
        <button v-if="userData.rol === 'Owner'" class="btn btn-outline-info">
          <img
            class="icon"
            src="https://firebasestorage.googleapis.com/v0/b/ehome-77326.appspot.com/o/editar.png?alt=media&token=039cb31c-6d90-4506-9da0-a5215175c50d"
            alt=""
            srcset=""
          />
        </button>
      </router-link>
      <router-link v-if="this.apartmentDetails" :to="`/new-incident/${apartmentDetails._id}`">
        <button class="btn btn-outline-info">
          <img
            class="icon"
            src="https://firebasestorage.googleapis.com/v0/b/ehome-77326.appspot.com/o/exclamation-mark.png?alt=media&token=6bedb978-a1bd-4375-990b-0015ab3ff3e6"
            alt=""
            srcset=""
          />
        </button>
      </router-link>
      <router-link :to="`/list-incidents/${apartmentDetails._id}`">
        <button class="btn btn-outline-info">
          <img
            class="icon"
            src="https://firebasestorage.googleapis.com/v0/b/ehome-77326.appspot.com/o/list.png?alt=media&token=3c96d8aa-a763-45fc-ac3a-8c514564412b"
            alt=""
            srcset=""
          />
        </button>
      </router-link>
    </div>
    <router-link to="/home"><button class="btn btn-outline-info">Volver</button></router-link>
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
    download(url: string) {
      window.location.href = url;
      return false;
    },
  },
  created() {
    const route = useRoute();
    const { id } = route.params;
    this.getApartment(id);
  },
});
</script>

<style lang="scss">
.functions-buttons {
  display: flex;
  flex-direction: row;
}
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  width: 20px;
  height: 20px;
}
.img_document {
  width: 20px;
  height: 20px;
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
  width: clamp(20rem, calc(17rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #d6e1ec);
  color: #0d6efd;
}

p {
  color: #0d6efd;
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
  background: linear-gradient(to bottom, #00ff80, #56ccf2);
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

.card {
  &__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  &__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  &__footer {
    display: flex;
    padding: 1rem;
    margin-top: auto;
  }
}

.user {
  display: flex;
  gap: 0.5rem;
  &__info {
    color: #666;
  }
  &__image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
</style>
