<template>
  <div v-if="this.apartment" class="container">
    <div class="card">
      <div class="card__header">
        <img v-bind:src="apartment.photos" alt="card__image" class="card__image" width="600" />
      </div>
      <div class="card__body">
        <span
          v-if="userData.rol === 'Owner' && apartment?.status === 'Disponible'"
          class="tag tag-blue"
          >{{ apartment?.status }}</span
        >
        <span
          v-if="userData.rol === 'Owner' && apartment?.status === 'Alquilada'"
          class="tag tag-red"
          >{{ apartment?.status }}</span
        >
        <h4>{{ apartment.alias }}</h4>
        <p>Direccion: {{ apartment.direction }}</p>
        <p>{{ apartment.province }} {{ apartment.cp }}</p>
        <p>Incidencias: {{ apartment.incidents?.length }}</p>
        <!-- <p>ID: {{ apartment?._id }}</p> -->
      </div>
      <div class="card__footer">
        <div class="user">
          <img
            v-if="userData.rol === 'Owner' && apartment.status === 'Alquilada'"
            v-bind:src="apartment?.current_tenant[0]?.image"
            alt="user__image"
            class="user__image"
          />

          <div class="user__info">
            <h5 v-if="userData.rol === 'Owner'">
              {{ apartment?.current_tenant[0]?.name }} {{ apartment?.current_tenant[0]?.surname }}
            </h5>

            <small v-if="apartment?.current_tenant[0]?.phone">
              +34 {{ apartment?.current_tenant[0]?.phone }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'HomeCard',
  data() {
    return {
      image: '',
      direction: '',
      cp: '',
      province: '',
      incidents: [],
      status: '',
    };
  },
  props: {
    apartment: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters('account', ['userData']),
  },
});
</script>

<style lang="scss" scoped>
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

.card {
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(17rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #d6e1ec);

  &__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h4 {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  }
  &__footer {
    display: flex;
    padding: 1rem;
    margin-top: auto;
  }
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
.tag-red {
  background: #56ccf2;
  background: linear-gradient(to bottom, #ff2018, #56ccf2);
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

.user {
  display: flex;
  gap: 0.5rem;
  &__image {
    border-radius: 50%;
  }
  &__info > small {
    color: #666;
  }
}
</style>
