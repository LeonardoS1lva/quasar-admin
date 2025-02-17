<script setup>
import CardProjects from "./cards/CardProjects.vue";
import imgAbout from "src/assets/site/img/about.jpg";

const projects = [
  {},
  {},
  {},
  { imgProject: imgAbout, viewProject: imgAbout },
  {},
  {},
];
</script>

<template>
  <div>
    <q-intersection transition="slide-up" transition-duration="1500" once>
      <div class="row text-center q-py-lg">
        <h6 class="no-margin text-positive col-12">Our Projects</h6>
        <div class="col-3"></div>
        <h3 class="no-margin col-6">
          <strong>
            Visit Our Latest Solar And Renewable Energy Projects
          </strong>
        </h3>
        <div class="col-3"></div>
      </div>
    </q-intersection>

  <div class="row flex flex-center">
    <div class="col-1"></div>
    <div class="col-10 row">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-lg-4 col-md-6 col-sm-12 flex flex-center"
      >
        <q-intersection transition="slide-up" transition-duration="1500" once>
          <CardProjects :img-project="project.imgProject" :view-project="project.viewProject" />
        </q-intersection>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>
