<template>
  <div>
    <div v-if="userData">
      <UserDetail :userData="userData" />
    </div>
    <h2>Añadir Inquilino</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email"
          >Email
          <input type="email" v-model="tenant.email" name="email" class="form-control" />
        </label>
      </div>

      <div class="form-group">
        <label for="type_incidence"
          >Seleccionar vivienda
          <select name="apartments" v-model="tenant.apartments" class="form-control">
            <option
              v-for="(home, index) in userData.apartments_owner"
              v-bind:value="home._id"
              v-bind:key="index"
            >
              {{ home.alias }}
            </option>
          </select>
        </label>
      </div>

      <div class="form-group">
        <button class="btn btn-success">Register</button>
        <router-link to="/home" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import UserDetail from '../user/UserDetail.vue';

export default defineComponent({
  name: 'AddTenant',
  components: { UserDetail },
  data() {
    return {
      tenant: {
        email: '',
      },
      submitted: false,
    };
  },
  computed: {
    ...mapGetters('account', ['userData']),
    ...mapGetters('apartments', ['apartmentDetails']),
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
      console.log(this.tenant);
    },
  },

  mounted() {
    const route = useRoute();
    const { id } = route.params;
    if (!localStorage.getItem('token')) {
      this.$router.push('/login');
    }
  },
});
</script>
