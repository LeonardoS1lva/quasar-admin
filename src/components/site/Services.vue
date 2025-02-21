<script setup>
import CardServices from "./cards/CardServices.vue";
import imgAbout from "../../assets/site/img/about.jpg";
import img1 from "../../assets/site/img/image1.png";
import img2 from "../../assets/site/img/image2.png";
import img4 from "../../assets/site/img/image4.png";
import img5 from "../../assets/site/img/image5.png";
import img6 from "../../assets/site/img/image6.png";

const services = [
  {
    imgCard: img1,
    iconCard: "star",
    titleCard: "Solar Panels",
    descriptionCard: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    labelButton: "Read more",
  },
  {
    imgCard: img2,
    iconCard: "star",
    titleCard: "Wind Turbines",
    descriptionCard: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    labelButton: "Read more",
  },
  {
    imgCard: imgAbout,
    iconCard: "lightbulb",
    titleCard: "Hydropower Plants",
    descriptionCard: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    labelButton: "Read more",
  },
  {
    imgCard: img4,
    iconCard: "star",
    titleCard: "Solar Panels",
    descriptionCard: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    labelButton: "Read more",
  },
  {
    imgCard: img5,
    iconCard: "star",
    titleCard: "Wind Turbines",
    descriptionCard: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    labelButton: "Read more",
  },
  {
    imgCard: img6,
    iconCard: "star",
    titleCard: "Hydropower Plants",
    descriptionCard: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    labelButton: "Read more",
  },
];
</script>

<template>
  <div class="q-py-lg bg-grey-2">
    <q-intersection
      transition="slide-up"
      transition-duration="1500"
      once
      class="intersection-180"
    >
      <div class="row text-center q-py-lg">
        <h6 class="no-margin text-positive col-12">Our Services</h6>
        <div class="col-md-3 col-sm-2 col-xs-1"></div>
        <h3 class="col-md-6 col-sm-8 col-xs-10 no-margin">
          <strong> We Are Pioneers In The World Of Renewable Energy </strong>
        </h3>
        <div class="col-md-3 col-sm-2 col-xs-1"></div>
      </div>
    </q-intersection>

    <div class="row flex flex-center">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row q-col-gutter-lg">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="col-md-4 col-sm-6 col-xs-12"
          >
            <q-intersection
              transition="slide-up"
              :transition-duration="250 * (index + 1)"
              once
              class="intersection-370"
            >
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
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
