<script setup>
import CardProjects from "./cards/CardProjects.vue";
import img1 from "src/assets/site/img/image6.png";
import img2 from "src/assets/site/img/image5.png";
import img3 from "src/assets/site/img/image4.png";
import img4 from "src/assets/site/img/about.jpg";
import img5 from "src/assets/site/img/image2.png";
import img6 from "src/assets/site/img/image1.png";

const projects = [
  { imgProject: img1, viewProject: img1 },
  { imgProject: img2, viewProject: img2 },
  { imgProject: img3, viewProject: img3 },
  { imgProject: img4, viewProject: img4 },
  { imgProject: img5, viewProject: img5 },
  { imgProject: img6, viewProject: img6 },
];
</script>

<template>
  <div>
    <q-intersection
      transition="slide-up"
      transition-duration="1500"
      once
      class="intersection-180"
    >
      <div class="row text-center q-py-lg">
        <h6 class="no-margin text-positive col-12">Our Projects</h6>
        <div class="col-md-3 col-sm-2 col-xs-1"></div>
        <h3 class="col-md-6 col-sm-8 col-xs-10 no-margin">
          <strong>
            Visit Our Latest Solar And Renewable Energy Projects
          </strong>
        </h3>
        <div class="col-md-3 col-sm-2 col-xs-1"></div>
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
          <q-intersection
            transition="slide-up"
            :transition-duration="300 * (index + 1)"
            once
            class="intersection-450"
          >
            <CardProjects
              :img-project="project.imgProject"
              :view-project="project.viewProject"
            />
          </q-intersection>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
