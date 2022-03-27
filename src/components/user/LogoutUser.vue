<template>
  <p>
    <router-link v-if="userData" to="/login"
      ><button class="btn btn-info">Logout</button></router-link
    >
  </p>
</template>
