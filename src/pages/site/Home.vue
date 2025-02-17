<script setup>
import CarouselHome from "src/components/site/carousel/CarouselHome.vue";
import Feature from "src/components/site/Feature.vue";
import About from "src/components/site/About.vue";
import Services from "src/components/site/Services.vue";
import About2 from "src/components/site/About2.vue";
import Projects from "src/components/site/Projects.vue";
import FormComponent from "src/components/site/FormComponent.vue";
import Team from "src/components/site/Team.vue";
import Testimonial from "src/components/site/Testimonial.vue";
</script>

<template>
  <section id="home">
    <CarouselHome />
  </section>

  <Feature />

  <section id="about">
    <q-intersection transition="fade" transition-duration="1000" once>
      <About />
    </q-intersection>
  </section>

  <section id="services">
    <Services />
  </section>

  <q-intersection transition="fade" transition-duration="1000" once>
    <About2 />
  </q-intersection>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <q-intersection transition="fade" transition-duration="1000" once>
      <FormComponent />
    </q-intersection>
  </section>

  <Team />

  <Testimonial />

  <!--  Botão de rolagem para o topo da página  -->
  <q-page-scroller
    position="bottom-right"
    :scroll-offset="150"
    :offset="[18, 18]"
  >
    <q-btn fab icon="keyboard_arrow_up" color="positive" />
  </q-page-scroller>
</template>
