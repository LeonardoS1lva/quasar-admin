<script setup>
import About from "src/components/site/About.vue";
import About2 from "src/components/site/About2.vue";
import CarouselHome from "src/components/site/carousel/CarouselHome.vue";
import Feature from "src/components/site/Feature.vue";
import FormComponent from "src/components/site/FormComponent.vue";
import Projects from "src/components/site/Projects.vue";
import Services from "src/components/site/Services.vue";
</script>

<template>
  <CarouselHome />
  <!-- <Transition
    appear
    enter-active-class="animated slideInRight slower delay-5s repeat-2"
    leave-active-class="animated slideOutLeft"
  > -->
    <Feature />
  <!-- </Transition> -->
  <About />
  <Services />
  <About2 />
  <Projects />
  <FormComponent />
</template>
