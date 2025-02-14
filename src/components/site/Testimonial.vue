<script setup>
import CarouselTestimonial from "./carousel/CarouselTestimonial.vue";
</script>

<template>
  <!-- Section Testiomonial Start -->
  <section class="q-py-xl">
    <h6 class="text-center q-mb-sm">Testimonial</h6>
    <h1 class="q-mb-xl q-mt-md text-center">What Our Client Say!</h1>
    <div id="carousel">
      <CarouselTestimonial />
    </div>
  </section>
  <!-- Section Testimonial End -->
</template>

<style scoped>
#carousel {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
