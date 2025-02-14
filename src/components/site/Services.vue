<script setup>
import CardServices from "./cards/CardServices.vue";
import imgAbout from "../../assets/site/img/about.jpg";

const services = [
  {},
  {},
  {
    imgCard: imgAbout,
    iconCard: "lightbulb",
    titleCard: "Hydropower Plants",
    descriptionCard: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    labelButton: "Read more",
  },
  {},
  {},
  {},
];
</script>

<template>
  <div class="q-py-lg">
    <q-intersection transition="slide-up" transition-duration="1500" once>
      <div class="row text-center q-py-lg">
        <h6 class="no-margin text-positive col-12">Our Services</h6>
        <div class="col-3"></div>
        <h3 class="no-margin col-6">
          <strong> We Are Pioneers In The World Of Renewable Energy </strong>
        </h3>
        <div class="col-3"></div>
      </div>
    </q-intersection>
    <div class="row q-col-gutter-lg">
      <div class="col-md-1"></div>
      <div class="row col-md-10 q-col-gutter-lg">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-md-4 col-sm-6 col-xs-12 flex flex-center"
        >
          <q-intersection transition="slide-up" transition-duration="1000" once>
            <CardServices
              :img-card="service.imgCard"
              :icon-card="service.iconCard"
              :title-card="service.titleCard"
              :description-card="service.descriptionCard"
              :label-button="service.labelButton"
            />
          </q-intersection>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>
