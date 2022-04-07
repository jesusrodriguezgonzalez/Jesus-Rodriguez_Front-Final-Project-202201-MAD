<template>
  <div class="home-page">
    <div v-if="userData">
      <UserDetail :userData="userData" />
    </div>
    <div v-if="userData">
      <h2>Editar perfil</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name"
            >Nombre
            <input type="text" v-model="user.name" name="name" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label for="surname"
            >Apellidos
            <input type="text" v-model="user.surname" name="surname" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label for="phone"
            >Telefono
            <input type="number" v-model="user.phone" name="phone" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label for="age"
            >Edad
            <input type="number" v-model="user.age" name="age" class="form-control" />
          </label>
        </div>

        <div class="form-group">
          <label for="direction"
            >Direccion
            <input type="text" v-model="user.direction" name="direction" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label for="city"
            >Provincia
            <input type="text" v-model="user.city" name="city" class="form-control" />
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
          <router-link to="/home" class="btn btn-link">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable prefer-destructuring */
import { mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { storage } from '@/firebase';
import UserDetail from './UserDetail.vue';

export default defineComponent({
  name: 'EditUser',
  components: { UserDetail },
  data() {
    return {
      user: {
        email: '',
        name: '',
        surname: '',
        age: '',
        direction: '',
        phone: '',
        city: '',
        image: '',
        _id: '',
      },

      submitted: false,
      fileToUpload: { name: 'SinFoto' },
    };
  },
  computed: {
    ...mapGetters('account', ['userData']),
  },
  mounted() {
    if (this.userData) {
      this.user.email = this.userData.email;
      this.user.name = this.userData.name;
      this.user.surname = this.userData.surname;
      this.user.age = this.userData.age;
      this.user.direction = this.userData.direction;
      this.user.phone = this.userData.phone;
      this.user.city = this.userData.city;
      this.user.image = this.userData.image;
      // eslint-disable-next-line no-underscore-dangle
      this.user._id = this.userData._id;
    }
  },
  watch: {
    userData() {
      this.user.email = this.userData.email;
      this.user.name = this.userData.name;
      this.user.surname = this.userData.surname;
      this.user.age = this.userData.age;
      this.user.direction = this.userData.direction;
      this.user.phone = this.userData.phone;
      this.user.city = this.userData.city;
      this.user.image = this.userData.image;
      // eslint-disable-next-line no-underscore-dangle
      this.user._id = this.userData._id;
    },
  },

  methods: {
    ...mapActions('account', ['updateUser']),
    handleImageChange(e: any) {
      this.fileToUpload = e.target.files[0];
    },
    handleSubmit() {
      this.submitted = true;
      const newRef = ref(storage, uuid() + this.fileToUpload.name);
      uploadBytes(newRef, this.fileToUpload as any).then(() => {
        getDownloadURL(newRef).then((url: string) => {
          if (this.fileToUpload.name === 'SinFoto') {
            this.user.image = this.userData.image;
          } else {
            this.user.image = url;
          }
          this.updateUser(this.user);
        });
      });
    },
  },
});
</script>
