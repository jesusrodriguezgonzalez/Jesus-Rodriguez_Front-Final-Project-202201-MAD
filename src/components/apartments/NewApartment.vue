<template>
  <div class="home-page">
    <div v-if="userData">
      <UserDetail :userData="userData" />
    </div>
    <h2>Nueva vivienda</h2>
    <form v-if="apartment" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="direction"
          >Alias
          <input type="text" v-model="apartment.alias" name="alias" class="form-control" />
        </label>
      </div>
      <div class="form-group">
        <label for="direction"
          >Dirección
          <input type="text" v-model="apartment.direction" name="direction" class="form-control" />
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
            accept="image/*"
            name="image"
            class="form-control form-control-sm"
            @change="handleImageChange"
          />
        </label>
      </div>

      <div class="form-group">
        <button class="btn btn-success">Registrar</button>

        <router-link to="/home" class="btn btn-link">Cancelar</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
/* eslint-disable prefer-destructuring */

import { mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { storage } from '@/firebase';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'NewApartment',
  components: { UserDetail },
  data() {
    return {
      apartment: {
        alias: '',
        cp: '',
        province: '',
        direction: '',
        photos: '',
        owner: '0',
      },
      submitted: false,
      fileToUpload: { name: 'SinFoto' },
    };
  },
  computed: {
    // ...mapState('apartments', ['status']),
    ...mapGetters('account', ['userData']),
    ...mapGetters('apartments', ['apartmentsDetails']),
  },

  mounted() {
    if (this.userData) {
      // eslint-disable-next-line no-underscore-dangle
      this.apartment.owner = this.userData._id;
    }
  },

  watch: {
    userData() {
      // eslint-disable-next-line no-underscore-dangle
      this.apartment.owner = this.userData._id;
    },
  },

  methods: {
    ...mapActions('apartments', ['registerApartment', 'getApartment']),
    handleSubmit() {
      this.submitted = true;
      // Subir archivo a firebase y obtener la url
      const newRef = ref(storage, uuid() + this.fileToUpload.name);
      uploadBytes(newRef, this.fileToUpload as any).then(() => {
        getDownloadURL(newRef).then((url: string) => {
          if (this.fileToUpload.name === 'SinFoto') {
            this.apartment.photos =
              'https://us.123rf.com/450wm/infinityyy/infinityyy1911/infinityyy191100073/133539567-icono-de-casa-vector-s%C3%ADmbolo-de-logotipo-plano-simple.jpg?ver=6';
          } else {
            this.apartment.photos = url;
          }

          this.registerApartment(this.apartment);
        });
      });
    },
    handleImageChange(e: any) {
      this.fileToUpload = e.target.files[0];
    },
  },
});
</script>
