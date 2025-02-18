<template>
  <q-layout view="hHr LpR lFf">
    <q-header reveal class="bg-white shadow-3">
      <div class="row no-wrap items-center q-pa-lg" v-if="!isMobile">
        <div class="col-4">
          <router-link to="/" class="no-decoration">
            <span class="text-primary text-h5">Logo</span>
          </router-link>
        </div>
        <nav
          class="col-8 row justify-evenly items-center q-gutter-x-xl"
        >
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
      <div v-else class="row no-wrap justify-between q-pa-lg">
        <div class="col-4">
          <router-link to="/" class="no-decoration">
            <span class="text-primary text-h5">Logo</span>
          </router-link>
        </div>
        <nav>
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
        return this.$q.screen.width < 1050
      }
    }
};
</script>

<style src="src/css/site/global.css"></style>
