<template>
  <div class="home-page">
    <div class="container-login">
      <div class="login">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ehome-77326.appspot.com/o/ehome.jpg?alt=media&token=72aed465-1592-4b61-9f00-370c3f6a77f4"
          alt=""
          class="img_login"
        />

        <form class="form-container" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">
              <input
                type="email"
                v-model="user.email"
                name="email"
                :class="{ 'is-invalid': submitted && email }"
                placeholder="Email"
              />
            </label>
            <div v-show="submitted && !user.email" class="invalid-feedback">
              Es necesario que introduzca un email
            </div>
          </div>
          <div class="form-group">
            <label for="passwd">
              <input
                id="passwd"
                type="password"
                v-model="user.passwd"
                name="passwd"
                :class="{ 'is-invalid': submitted && passwd }"
                placeholder="Password"
              />
            </label>
            <div v-show="submitted && !user.passwd" class="invalid-feedback">
              Es necesario que introduzca contraseña.
            </div>
          </div>
          <div class="form-group">
            <button class="btn-login">Login</button>
          </div>
          <router-link to="/register"> Register</router-link>
        </form>
      </div>
    </div>
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
  created() {
    // reset login status
    this.logout();
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

<style lang="scss" scoped>
.container-login {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #44d3db;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

input {
  width: 300px;
  height: 40px;
  border-radius: 15px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
button {
  width: 300px;
  height: 55px;
  color: white;
  background: #13497b;
  box-shadow: 0px 0px 20px rgba(29, 40, 142, 0.05);
  border-radius: 10px;
  margin-top: 20px;
  border-style: hidden;
}

// .login {
//   margin: 0;
//   padding: 0;
//   widows: 100vh;
//   height: 100vh;
//   background-color: #46d0d9;
// }
// .btn-login {
//   margin-top: 20px;
//   width: 357px;
//   height: 55px;

//   background: #13497b;
//   box-shadow: 0px 0px 20px rgba(29, 40, 142, 0.05);
//   border-radius: 15px;
// }

// input {
//   border: 0px solid;
//   width: 357px;
//   height: 46px;
// }
</style>
