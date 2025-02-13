<script setup>
import CardServices from "./cards/CardServices.vue";
import imgAbout from "../../assets/site/img/about.jpg";
</script>

<template>
  <div class="q-py-lg">
    <div class="row text-center q-py-lg">
      <h6 class="no-margin text-positive col-12">Our Services</h6>
      <div class="col-3"></div>
      <h3 class="no-margin col-6">
        <strong> We Are Pioneers In The World Of Renewable Energy </strong>
      </h3>
      <div class="col-3"></div>
    </div>
    <div class="row q-col-gutter-lg">
      <div class="col-md-1"></div>
      <div class="row col-md-10 q-col-gutter-lg">
        <div class="col-md-4 col-sm-6 col-xs-12 flex flex-center">
          <CardServices />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 flex flex-center">
          <CardServices />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 flex flex-center">
          <CardServices
            :img-card="imgAbout"
            icon-card="lightbulb"
            title-card="Hydropower Plants"
            description-card="lorem ipsum dolor sit amet consectetur adipiscing elit"
            label-button="Read more"
          />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 flex flex-center">
          <CardServices />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 flex flex-center">
          <CardServices />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 flex flex-center">
          <CardServices />
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>
