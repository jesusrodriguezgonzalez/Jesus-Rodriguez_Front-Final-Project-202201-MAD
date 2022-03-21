<template>
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
            :class="{ 'is-invalid': submitted && errors.has('email') }"
          />
        </label>
        <div v-if="submitted && errors.has('email')" class="invalid-feedback">
          {{ errors.first('email') }}
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
            :class="{ 'is-invalid': submitted && errors.has('passwd') }"
          />
        </label>

        <div v-if="submitted && errors.has('passwd')" class="invalid-feedback">
          {{ errors.first('passwd') }}
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
        <router-link to="/register" class="btn btn-link">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
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
    handleSubmit(e) {
      this.submitted = true;
      this.login(this.user);
    },
  },
};
</script>
