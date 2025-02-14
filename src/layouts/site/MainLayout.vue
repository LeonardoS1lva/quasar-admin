<template>
  <q-layout view="hHr LpR lFf">
    <!-- Header Start -->
    <q-header reveal class="bg-white shadow-3">
      <div class="row no-wrap items-center q-pa-lg">
        <div class="col-4">
          <span class="text-primary text-h5">Logo</span>
        </div>
        <nav class="col-8 row justify-evenly items-center q-gutter-x-xl">
          <router-link
            to="#"
            class="text-primary text-bold text-h6 text-uppercase no-decoration"
          >
            Inicio
          </router-link>
          <router-link
            to="#"
            class="text-primary text-bold text-h6 text-uppercase no-decoration"
          >
            Projetos
          </router-link>
          <router-link
            to="#"
            class="text-primary text-bold text-h6 text-uppercase no-decoration"
          >
            Serviços
          </router-link>
          <router-link
            to="#"
            class="text-primary text-bold text-h6 text-uppercase no-decoration"
          >
            Contato
          </router-link>
          <router-link
            to="/Login-1"
            class="text-primary text-bold text-h6 text-uppercase no-decoration"
          >
            Login
          </router-link>
        </nav>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterComponent />
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

<style src="src/css/site/global.css"></style>
