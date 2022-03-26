<template>
  <div>
    <h2>Editar vivienda</h2>
    <form @submit.prevent="handleSubmit" v-if="this.apartmentDetails">
      <div class="form-group">
        <label for="direction"
          >Alias
          <input type="text" v-model="apartment.alias" name="alias" class="form-control" />
        </label>
      </div>
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
        <button class="btn btn-primary">Editar</button>

        <router-link :to="`/details-home/${apartmentDetails._id}`" class="btn btn-link"
          >Cancel</router-link
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'EditApartment',
  data() {
    return {
      apartment: {
        cp: '',
        province: '',
        direction: '',
        owner: '0',
        idApartment: '',
      },

      submitted: false,
    };
  },
  computed: {
    ...mapGetters('account', ['userData']),
    ...mapGetters('apartments', ['apartmentDetails']),
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    this.apartment.idApartment = id as string;
    this.getApartment(id);
    this.apartment.province = this.apartmentDetails.province;
    this.apartment.cp = this.apartmentDetails.cp;
    this.apartment.direction = this.apartmentDetails.direction;

    // eslint-disable-next-line no-underscore-dangle
    this.apartment.owner = this.userData._id;
  },

  methods: {
    ...mapActions('apartments', ['getApartment', 'updateApartment']),
    handleSubmit() {
      this.submitted = true;
      this.updateApartment(this.apartment);
    },
  },
});
</script>
