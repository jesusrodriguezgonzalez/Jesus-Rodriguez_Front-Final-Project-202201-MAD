<template>
  <div>
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
        <label for="jack"
          >Propietario
          <input name="rol" type="radio" id="Owner" value="Owner" v-model="user.rol" />
        </label>
        <label for="john"
          >Inquilino
          <input name="rol" type="radio" id="Tenant" value="Tenant" v-model="user.rol" />
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
import { mapState, mapActions } from 'vuex';

export default {
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
      },
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
      this.registerUser(this.user);
    },
  },
};
</script>
