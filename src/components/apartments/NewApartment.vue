<template>
  <div>
    <h2>Nueva vivienda</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="direction"
          >Direccion
          <input
            type="text"
            v-model="apartment.direction"
            name="direction"
            class="form-control"
            :class="{ 'is-invalid': submitted && errors.has('direction') }"
          />
        </label>
        <div v-if="submitted && errors.has('direction')" class="invalid-feedback">
          {{ errors.first('direction') }}
        </div>
      </div>

      <div class="form-group">
        <label for="cp"
          >CP
          <input
            type="number"
            v-model="apartment.cp"
            name="cp"
            class="form-control"
            :class="{ 'is-invalid': submitted && errors.has('cp') }"
          />
        </label>
        <div v-if="submitted && errors.has('cp')" class="invalid-feedback">
          {{ errors.first('cp') }}
        </div>
      </div>

      <div class="form-group">
        <label for="province"
          >Provincia
          <input
            type="text"
            v-model="apartment.province"
            name="province"
            class="form-control"
            :class="{ 'is-invalid': submitted && errors.has('province') }"
          />
        </label>
        <div v-if="submitted && errors.has('province')" class="invalid-feedback">
          {{ errors.first('province') }}
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Register</button>
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      apartment: {
        cp: '',
        province: '',
        direction: '',
        owner: '123456789',
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState('apartments', ['status']),
  },
  methods: {
    ...mapActions('apartments', ['registerApartment']),
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.registerApartment(this.apartment);
        }
      });
    },
  },
};
</script>
