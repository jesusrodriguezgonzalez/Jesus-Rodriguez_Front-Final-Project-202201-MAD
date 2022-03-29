<template>
  <div>
    <div class="margin"></div>
    <h2>Nuevo usuario</h2>
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
        <label for="email"
          >Email
          <input type="email" v-model="user.email" name="name" class="form-control" />
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
        <label for="passwd"
          >Contraseña
          <input
            id="passwd"
            type="password"
            v-model="user.passwd"
            name="passwd"
            class="form-control"
          />
        </label>
      </div>
      <div class="form-group">
        <label for="Imagen"
          >Imagen
          <input type="file" accept="image/*" name="image" @change="handleImageChange" />
        </label>
      </div>

      <label for="jack"
        >Propietario
        <input name="rol" type="radio" id="Owner" value="Owner" v-model="user.rol" />
      </label>
      <label for="john"
        >Inquilino
        <input type="radio" id="Tenant" value="Tenant" v-model="user.rol" />
      </label>

      <div class="form-group">
        <button class="btn btn-success">Register</button>
        <router-link to="/" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
/* eslint-disable prefer-destructuring */

import { mapState, mapActions } from 'vuex';
import { defineComponent } from 'vue';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { storage } from '@/firebase';

export default defineComponent({
  name: 'RegisterPage',
  data() {
    return {
      user: {
        email: '',
        passwd: '',
        name: '',
        surname: '',
        age: '',
        direction: '',
        phone: '',
        city: '',
        image: '',
      },
      fileToUpload: { name: '' },

      submitted: false,
    };
  },
  computed: {
    ...mapState('account', ['status']),
  },
  methods: {
    ...mapActions('account', ['registerUser']),
    handleSubmit() {
      this.submitted = true;

      const newRef = ref(storage, uuid() + this.fileToUpload.name);
      uploadBytes(newRef, this.fileToUpload as any).then(() => {
        getDownloadURL(newRef).then((url: string) => {
          this.user.image = url;
          this.registerUser(this.user);
        });
      });
    },
    handleImageChange(e: any) {
      this.fileToUpload = e.target.files[0];
    },
  },
});
</script>

<style lang="scss" scoped>
.margin {
  margin-top: 20px;
}
</style>
