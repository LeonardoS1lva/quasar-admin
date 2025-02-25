<template>
  <q-layout view="hHr LpR lFf">
    <q-header class="bg-white shadow-3">
      <div class="row no-wrap items-center" style="height: 75px;" v-if="!isMobile">
        <div class="col-4 q-pa-md">
          <router-link to="/" class="no-decoration">
            <span class="text-primary text-h5">Logo</span>
          </router-link>
        </div>
        <nav
          class="col-8 row justify-end items-center"
          style="height: 100%;"
        >
          <router-link
            v-for="link in links"
            :key="link.text"
            :to="link.to"
            class="text-uppercase no-decoration link-header q-pr-xl"
          >
            {{ link.text }}
          </router-link>
          <button id="button-header">Get A Quote &rarr;</button>
        </nav>
      </div>
      <div v-else class="row no-wrap justify-between items-center">
        <div class="col-4 q-pa-md">
          <router-link to="/" class="no-decoration">
            <span class="text-primary text-h5">Logo</span>
          </router-link>
        </div>
        <nav class="q-pa-md">
          <q-btn color="primary" icon="menu">
        <q-menu>
          <q-list style="min-width: 100px" v-for="link in links " :key="link.text">
            <q-item :to="link.to" clickable v-close-popup>
              {{ link.text }}
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
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
  data() {
    return {
      links: [
        { text: "Inicio", to: "#home" },
        { text: "Serviços", to: "#services" },
        { text: "Projetos", to: "#projects" },
        { text: "Contato", to: "#contact" },
        { text: "Login", to: "/Login-1" },
      ],
    };
  },
    computed:{
      isMobile(){
        return this.$q.screen.width < 1200
      }
    }
};
</script>

<style src="src/css/site/global.css">

</style>
