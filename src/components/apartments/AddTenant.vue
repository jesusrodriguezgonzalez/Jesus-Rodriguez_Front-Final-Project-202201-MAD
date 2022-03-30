<template>
  <div class="home-page">
    <div>
      <div v-if="userData">
        <UserDetail :userData="userData" />
      </div>
      <h2>Generar Contrato</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email"
            >Email inquilino
            <input type="email" v-model="contract.email" name="email" class="form-control" />
          </label>
        </div>

        <div class="form-group" v-if="filterApartments">
          <label for="type_incidence"
            >Seleccionar vivienda
            <select name="apartments" v-model="contract.apartments" class="form-control">
              <option
                v-for="(home, index) in filterApartments"
                v-bind:value="home._id"
                v-bind:key="index"
              >
                {{ home.alias }}
              </option>
            </select>
          </label>
        </div>
        <div class="form-group">
          <label for="email"
            >Inicio contrato
            <input
              type="date"
              v-model="contract.start_date"
              name="start_date"
              class="form-control"
            />
          </label>
        </div>
        <div class="form-group">
          <label for="email"
            >Fin contrato
            <input type="date" v-model="contract.end_date" name="start_date" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label for="Imagen"
            >Adjuntar contrato
            <input
              type="file"
              accept="application/pdf,application/vnd.ms-excel"
              name="document"
              class="form-control form-control-sm"
              @change="handleImageChange"
            />
          </label>
        </div>

        <div class="form-group">
          <button class="btn btn-success">Generar</button>
          <router-link to="/home" class="btn btn-link">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable prefer-destructuring */
import { mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { ApartmentI } from '@/_utils/interfaces';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { storage } from '@/firebase';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'AddTenant',
  components: { UserDetail },
  data() {
    return {
      contract: {
        email: '',
        user_owner: '',
        end_date: '',
        start_date: '',
        document: '',
      },
      submitted: false,
      filterApartments: [],
      fileToUpload: { name: 'sinDocumento' },
    };
  },
  computed: {
    ...mapGetters('account', ['userData']),
    ...mapGetters('apartments', ['apartmentDetails']),
  },

  methods: {
    ...mapActions('apartments', ['addTenantAction']),
    handleImageChange(e: any) {
      this.fileToUpload = e.target.files[0];
    },
    handleSubmit() {
      this.submitted = true;
      const newRef = ref(storage, uuid() + this.fileToUpload.name);
      uploadBytes(newRef, this.fileToUpload as any).then(() => {
        getDownloadURL(newRef).then((url: string) => {
          this.contract.document = url;
          this.addTenantAction(this.contract);
        });
      });
    },
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    if (!localStorage.getItem('token')) {
      this.$router.push('/login');
    }
    if (this.userData) {
      this.filterApartments = this.userData.apartments_owner.filter(
        (apartment: ApartmentI) => apartment.status === 'Disponible'
      );
      // eslint-disable-next-line no-underscore-dangle
      this.contract.user_owner = this.userData._id;
    }
  },

  watch: {
    userData() {
      this.filterApartments = this.userData.apartments_owner.filter(
        (apartment: ApartmentI) => apartment.status === 'Disponible'
      );
      // eslint-disable-next-line no-underscore-dangle
      this.contract.user_owner = this.userData._id;
    },
  },
});
</script>
