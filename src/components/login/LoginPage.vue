<template class="login">
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email"
          >Email
          <input
            type="email"
            v-model="user.email"
            name="email"
            class="form-control"
            :class="{ 'is-invalid': submitted && email }"
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
            class="form-control"
            :class="{ 'is-invalid': submitted && passwd }"
          />
        </label>
        <div v-show="submitted && !user.passwd" class="invalid-feedback">
          Es necesario que introduzca contraseña.
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-info">Login</button>
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

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
