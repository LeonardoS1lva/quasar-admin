<script setup>
import { ref } from "vue";
import img1 from "../../../assets/site/img/carousel-1.jpg";
import img2 from "../../../assets/site/img/carousel-2.jpg";
import img3 from "../../../assets/site/img/carousel-3.jpg";

const slides = [
  {
    imgSrc: img1,
    title: "Pioneers Of Solar And Renewable Energy",
    description:
      "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
  },
  {
    imgSrc: img2,
    title: "Pioneers Of Solar And Renewable Energy",
    description:
      "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
  },
  {
    imgSrc: img3,
    title: "Pioneers Of Solar And Renewable Energy",
    description:
      "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
  },
];

const slide = ref(1);
const autoplay = ref(true);
</script>

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
      v-for="(slide, index) in slides"
      :key="index"
      :name="index + 1"
      :img-src="slide.imgSrc"
      class="q-pa-none"
    >
      <div class="row fit content-center q-px-md" style="background: rgba(0, 0, 0, .1);">
        <div class="col-1"></div>
        <q-intersection class="col-md-7 col-sm-8 col-xs-9" once>
          <Transition appear enter-active-class="animated fadeInDown slower">
            <h1 class="text-white text-bold q-mb-sm">
              {{ slide.title }}
            </h1>
          </Transition>
        </q-intersection>
        <div class="col-md-4 col-sm-3 col-xs-2"></div>
        <div class="col-1"></div>
        <h5 class="text-white col-7 no-margin">
          {{ slide.description }}
        </h5>
        <div class="col-4"></div>
        <div class="col-1"></div>
        <q-intersection transition="slide-right" transition-duration="500" once class="col-11 q-mt-md">
          <q-btn
            label="Read More"
            color="positive"
            unelevated
            no-caps
            rounded
            size="22px"
            class="q-px-lg text-h4"
          />
        </q-intersection>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>
