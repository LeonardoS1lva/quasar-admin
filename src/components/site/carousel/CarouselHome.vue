<template>
  <q-carousel
    swipeable
    animated
    v-model="slide"
    navigation-position="right"
    thumbnails
    infinite
    :autoplay="autoplay"
    transition-prev="slide-right"
    transition-next="slide-left"
    transition-duration="1000"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    class="window-height"
  >
    <q-carousel-slide
      :name="1"
      img-src="../../../assets/site/img/carousel-1.jpg"
    >
      <div class="q-pa-xl row">
        <h1 class="text-white text-bold q-mb-sm col-8">Pioneers Of Solar And Renewable Energy</h1>
        <div class="col-4"></div>
        <p class="text-white text-h6 col-7">
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
          Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
        </p>
        <div class="col-5"></div>
        <q-btn label="Read More" color="positive" unelevated no-caps rounded size="22px" class="q-px-lg text-h4" />
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      :name="2"
      img-src="../../../assets/site/img/carousel-2.jpg"
    >
      <div class="q-pa-xl row">
        <h1 class="text-white text-bold q-mb-sm col-8">Pioneers Of Solar And Renewable Energy</h1>
        <div class="col-4"></div>
        <p class="text-white text-h6 col-7">
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
          Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
        </p>
        <div class="col-5"></div>
        <q-btn label="Read More" color="positive" unelevated no-caps rounded size="22px" class="q-px-lg text-h4" />
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      :name="3"
      img-src="../../../assets/site/img/carousel-3.jpg"
    >
      <div class="q-pa-xl row">
        <h1 class="text-white text-bold q-mb-sm col-8">Pioneers Of Solar And Renewable Energy</h1>
        <div class="col-4"></div>
        <p class="text-white text-h6 col-7">
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
          Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
        </p>
        <div class="col-5"></div>
        <q-btn label="Read More" color="positive" unelevated no-caps rounded size="22px" class="q-px-lg text-h4" />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
