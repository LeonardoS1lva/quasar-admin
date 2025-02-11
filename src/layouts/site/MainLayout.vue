<template>
  <q-layout view="hHr LpR lFf">
    <!-- Header Start -->
    <q-header reveal class="row bg-white shadow-3">
      <div class="row col-4 q-pa-lg items-center">
        <span>Logo</span>
      </div>
      <nav class="row col-8 q-pa-lg justify-evenly items-center q-gutter-x-xl">
        <router-link>Inicio</router-link>
        <router-link>Projetos</router-link>
        <router-link>Serviços</router-link>
        <router-link>Contato</router-link>
      </nav>
    </q-header> 
    <!-- Header End -->

    <!-- Content Page Start -->
    <q-page-container class="q-pa-md q-ml-md q-mt-lg">
      <router-view />
    </q-page-container>
    <!-- Content Page End -->

    <!-- Footer Start -->
      <FooterComponent />
    <!-- Footer End -->
  </q-layout>
</template>

<script>

import FooterComponent from "src/components/site/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
  },
};
</script>

<style scoped>
a {
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-weight: light;
}
</style>
