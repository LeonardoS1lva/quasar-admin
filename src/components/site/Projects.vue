<script setup>
import CardProjects from "./cards/CardProjects.vue";
import imgAbout from "src/assets/site/img/about.jpg";
</script>

<template>
  <div class="row text-center q-py-lg">
    <h6 class="no-margin text-positive col-12">Our Projects</h6>
    <div class="col-3"></div>
    <h3 class="no-margin col-6">
      <strong> Visit Our Latest Solar And Renewable Energy Projects </strong>
    </h3>
    <div class="col-3"></div>
  </div>
  <div class="row flex flex-center q-col-gutter-md">
    <CardProjects class="col-4" />
    <CardProjects class="col-4" />
    <CardProjects class="col-4" />
    <CardProjects class="col-4" :img-project="imgAbout" />
    <CardProjects class="col-4" />
    <CardProjects class="col-4" />
  </div>
</template>
