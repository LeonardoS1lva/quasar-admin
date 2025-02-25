<script setup>
import CarouselTestimonial from "./carousel/CarouselTestimonial.vue";
</script>

<template>
  <!-- Section Testiomonial Start -->
  <section class="q-py-lg">
    <q-intersection transition="slide-up" transition-duration="1000" once>
      <h6 class="text-center text-positive no-margin">Testimonial</h6>
      <h3 class="text-center no-margin">
        <strong>What Our Client Say!</strong>
      </h3>
    </q-intersection>
    <q-intersection transition="slide-up" transition-duration="1500" once>
      <div class="row justify-center">
        <CarouselTestimonial />
      </div>
    </q-intersection>
  </section>

  <!-- Section Testimonial End -->
</template>
