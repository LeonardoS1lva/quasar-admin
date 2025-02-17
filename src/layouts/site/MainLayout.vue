<script setup>
import FooterComponent from "src/components/site/FooterComponent.vue";

const links = [
  { text: "Inicio", to: "#home" },
  { text: "Serviços", to: "#services" },
  { text: "Projetos", to: "#projects" },
  { text: "Contato", to: "#contact" },
  { text: "Login", to: "/Login-1" },
];
</script>

<template>
  <q-layout view="hHr LpR lFf">
    <q-header reveal class="bg-white shadow-3">
      <div class="row no-wrap items-center q-pa-lg">
        <div class="col-4">
          <router-link to="/" class="no-decoration">
            <span class="text-primary text-h5">Logo</span>
          </router-link>
        </div>
        <nav class="col-8 row justify-evenly items-center q-gutter-x-xl">
          <router-link
            v-for="link in links"
            :key="link.text"
            :to="link.to"
            class="text-primary text-bold text-h6 text-uppercase no-decoration"
          >
            {{ link.text }}
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

<style src="src/css/site/global.css"></style>
