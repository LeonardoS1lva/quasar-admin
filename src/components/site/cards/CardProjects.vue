<template>
  <q-card class="my-card q-my-lg" flat>
    <q-carousel
      animated
      v-model="slide"
      infinite
      transition-prev="fade"
      transition-next="fade"
      transition-duration="500"
      @mouseenter="nextSlide"
      @mouseleave="prevSlide"
      style="height: 250px"
    >
      <q-carousel-slide
        :name="1"
        :img-src="imgProject"
      />
      <q-carousel-slide :name="2">
        <div class="flex flex-center fit bg-primary">
          <q-btn
            outline
            round
            icon="visibility"
            color="white"
            class="q-mr-md"
          />
          <q-btn :href="linkProject" outline round icon="link" color="white" />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-card-section>
      <div class="text-positive text-h6 text-weight-light">
        Our Changing Planet
      </div>
    </q-card-section>

    <div class="q-px-md">
      <q-separator />
    </div>

    <q-card-section class="text-h6">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    linkProject: {
      type: String,
      default: "#",
    },
    imgProject: {
      type: String,
      default: "https://cdn.quasar.dev/img/mountains.jpg",
    },
  },

  setup() {
    const slide = ref(1);
    const nextSlide = () => {
      slide.value = 2;
    };

    const prevSlide = () => {
      slide.value = 1;
    };

    return {
      slide,
      nextSlide,
      prevSlide,
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
