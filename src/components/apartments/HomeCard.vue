<template>
  <div v-if="this.apartment" class="container">
    <div class="card">
      <div class="card__header">
        <img v-bind:src="apartment.photos" alt="card__image" class="card__image" width="600" />
      </div>
      <div class="card__body">
        <span class="tag tag-blue">{{ apartment.province }}</span>
        <h4>{{ apartment.alias }}</h4>
        <p>Direccion: {{ apartment.direction }}</p>
        <p>Codigo Postal: {{ apartment.cp }}</p>
        <p>Incidencias: {{ apartment.incidents?.length }}</p>
        <p v-if="userData.rol === 'Owner'">Estado: {{ apartment?.status }}</p>
        <p>ID: {{ apartment?._id }}</p>
      </div>
      <div class="card__footer">
        <div class="user">
          <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" />
          <div class="user__info">
            <h5>{{ apartment?.current_tenant[0]?.name }}</h5>
            <small>.</small>
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
}

.user__info > small {
  color: #666;
}
</style>
