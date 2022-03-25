<template>
  <main>
    <div class="container-details">
      <ul v-if="this.userData">
        <div class="form-group">
          <label for="Imagen"
            >Imagen
            <input type="file" accept="image/*" name="image" @change="handleImageChange" />
          </label>
        </div>
        <li>Nombre: {{ this.userData.name }}</li>
        <li>Apellido: {{ this.userData.surname }}</li>
        <li>Province: {{ this.userData.city }}</li>
        <li>Imagen: {{ this.userData.image }}</li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';

export default defineComponent({
  name: 'UserDetail',
  data() {
    return {
      name: '',
      surname: '',
      province: '',
      image: '',
    };
  },

  props: {
    userData: {
      type: Object,
    },
  },
});
</script>
