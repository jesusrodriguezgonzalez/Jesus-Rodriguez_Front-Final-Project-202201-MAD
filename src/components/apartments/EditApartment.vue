<template>
  <div v-if="userData">
    <UserDetail :userData="userData" />
  </div>
  <div v-if="this.apartment">
    <h2>Editar vivienda</h2>
    <form @submit.prevent="handleSubmit">
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
        <button class="btn btn-info">Editar</button>

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
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'EditApartment',
  components: { UserDetail },
  data() {
    return {
      apartment: {
        alias: '',
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
    this.apartment.alias = this.apartmentDetails.alias;
    // eslint-disable-next-line no-underscore-dangle
    this.apartment.owner = this.userData._id;
    if (!localStorage.getItem('token')) {
      this.$router.push('/login');
    }
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
