<template>
  <div class="home-page">
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
            <input
              type="text"
              v-model="apartment.direction"
              name="direction"
              class="form-control"
            />
          </label>
        </div>

        <div class="form-group">
          <label for="cp"
            >Código Postal
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
          <label for="Imagen"
            >Imagen
            <input
              type="file"
              class="form-control form-control-sm"
              accept="image/*"
              name="image"
              @change="handleImageChange"
            />
          </label>
        </div>

        <div class="form-group">
          <button class="btn btn-success">Editar</button>

          <router-link :to="`/details-home/${apartmentDetails._id}`" class="btn btn-link"
            >Cancelar</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable prefer-destructuring */
import { mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { storage } from '@/firebase';
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
        photos: '',
      },

      submitted: false,
      fileToUpload: { name: 'SinFoto' },
    };
  },
  computed: {
    ...mapGetters('account', ['userData']),
    ...mapGetters('apartments', ['apartmentDetails']),
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    if (this.apartmentDetails && this.userData) {
      this.apartment.idApartment = id as string;
      this.getApartment(id);
      this.apartment.province = this.apartmentDetails.province;
      this.apartment.cp = this.apartmentDetails.cp;
      this.apartment.direction = this.apartmentDetails.direction;
      this.apartment.alias = this.apartmentDetails.alias;
      // eslint-disable-next-line no-underscore-dangle
      this.apartment.owner = this.userData._id;
    }

    if (!localStorage.getItem('token')) {
      this.$router.push('/login');
    }
  },

  watch: {
    apartmentDetails() {
      this.apartment.province = this.apartmentDetails.province;
      this.apartment.cp = this.apartmentDetails.cp;
      this.apartment.direction = this.apartmentDetails.direction;
      this.apartment.alias = this.apartmentDetails.alias;
    },
    userData() {
      // eslint-disable-next-line no-underscore-dangle
      this.apartment.owner = this.userData._id;
    },
  },

  methods: {
    ...mapActions('apartments', ['getApartment', 'updateApartment']),
    // handleSubmit() {
    //   this.submitted = true;
    //   this.updateApartment(this.apartment);
    // },
    handleImageChange(e: any) {
      this.fileToUpload = e.target.files[0];
    },
    handleSubmit() {
      this.submitted = true;
      const newRef = ref(storage, uuid() + this.fileToUpload.name);
      uploadBytes(newRef, this.fileToUpload as any).then(() => {
        getDownloadURL(newRef).then((url: string) => {
          if (this.fileToUpload.name === 'SinFoto') {
            this.apartment.photos = this.apartmentDetails.photos;
          } else {
            this.apartment.photos = url;
          }

          this.updateApartment(this.apartment);
          this.$notify({
            text: 'Apartamento editado correctamente.',
          });
        });
      });
    },
  },
});
</script>
