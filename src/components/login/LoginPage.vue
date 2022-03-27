<template>
  <div class="login">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/ehome-77326.appspot.com/o/ehome.jpg?alt=media&token=72aed465-1592-4b61-9f00-370c3f6a77f4"
      alt=""
      class="img_login"
    />
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email"
          >Email
          <input
            type="email"
            v-model="user.email"
            name="email"
            :class="{ 'is-invalid': submitted && user.email }"
          />
        </label>
        <div v-show="submitted && !user.email" class="invalid-feedback">
          Es necesario que introduzca un email
        </div>
      </div>
      <div class="form-group">
        <label for="passwd"
          >Password
          <input
            id="passwd"
            type="password"
            v-model="user.passwd"
            name="passwd"
            :class="{ 'is-invalid': submitted && user.passwd }"
          />
        </label>
        <div v-show="submitted && !user.passwd" class="invalid-feedback">
          Es necesario que introduzca contraseña.
        </div>
      </div>
      <div class="form-group">
        <button class="btn-login">Login</button>
        <router-link to="/register"> Register</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      user: {
        email: '',
        passwd: '',
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState('account', ['status']),
  },

  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit() {
      this.submitted = true;
      this.login(this.user);
    },
  },
});
</script>

<style lang="scss">
.img_login {
  justify-content: center;
  width: 80%;
  margin-right: 20px;
}
.login {
  margin: 0;
  padding: 0;
  widows: 100vh;
  height: 100vh;
  background-color: #46d0d9;
}
.btn-login {
  margin-top: 20px;
  width: 357px;
  height: 55px;

  background: #13497b;
  box-shadow: 0px 0px 20px rgba(29, 40, 142, 0.05);
  border-radius: 15px;
}

input {
  border: 0px solid;
  width: 357px;
  height: 46px;
}
</style>
