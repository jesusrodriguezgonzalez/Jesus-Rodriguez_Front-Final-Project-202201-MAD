<template>
  <div>
    <h2>Nueva vivienda</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="direction"
          >Direccion
          <input type="text" v-model="apartment.direction" name="direction" class="form-control" />
        </label>
      </div>

      <div class="form-group">
        <label for="cp"
          >CP
          <input type="number" v-model="apartment.cp" name="cp" class="form-control" />
        </label>
      </div>

      <div class="form-group">
        <label for="province"
          >Provincia
          <input type="text" v-model="apartment.province" name="province" class="form-control" />
        </label>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Register</button>

        <router-link to="/" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewApartment',
  data() {
    return {
      apartment: {
        cp: '',
        province: '',
        direction: '',
        owner: '0',
      },
      submitted: false,
    };
  },
  computed: {
    // ...mapState('apartments', ['status']),
    ...mapGetters('account', ['userData']),
  },

  mounted() {
    // eslint-disable-next-line no-underscore-dangle
    this.apartment.owner = this.userData._id;
  },

  methods: {
    ...mapActions('apartments', ['registerApartment']),
    handleSubmit() {
      this.submitted = true;
      this.registerApartment(this.apartment);
    },
  },
});
</script>
