<script setup>
import CardProjects from "./cards/CardProjects.vue";
import img1 from "src/assets/site/img/image6.png";
import img2 from "src/assets/site/img/image5.png";
import img3 from "src/assets/site/img/image4.png";
import img4 from "src/assets/site/img/about.jpg";
import img5 from "src/assets/site/img/image2.png";
import img6 from "src/assets/site/img/image1.png";
import { computed, ref } from "vue";

const projects = [
  {
    imgProject: img1,
    viewProject: img1,
    titleCard: "Solar Panels",
    descriptionCard: "We Are pioneers of solar & renewable energy industry",
    category: "first",
  },
  {
    imgProject: img2,
    viewProject: img2,
    titleCard: "Wind Turbines",
    descriptionCard: "We Are pioneers of solar & renewable energy industry",
    category: "second",
  },
  {
    imgProject: img3,
    viewProject: img3,
    titleCard: "Hydropower Plants",
    descriptionCard: "We Are pioneers of solar & renewable energy industry",
    category: "third",
  },
  {
    imgProject: img4,
    viewProject: img4,
    titleCard: "Solar Panels",
    descriptionCard: "We Are pioneers of solar & renewable energy industry",
    category: "first",
  },
  {
    imgProject: img5,
    viewProject: img5,
    titleCard: "Wind Turbines",
    descriptionCard: "We Are pioneers of solar & renewable energy industry",
    category: "second",
  },
  {
    imgProject: img6,
    viewProject: img6,
    titleCard: "Hydropower Plants",
    descriptionCard: "We Are pioneers of solar & renewable energy industry",
    category: "third",
  },
];

const filterProject = ref("all");

const filterProjects = computed(() => {
  if (filterProject.value === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === filterProject.value);
});

const transitionKey = computed(() => filterProject.value);
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
        <h3 class="col-md-6 col-sm-8 col-xs-10 no-margin q-py-md">
          <strong>
            Visit Our Latest Solar And Renewable Energy Projects
          </strong>
        </h3>
        <div class="col-md-3 col-sm-2 col-xs-1"></div>
        <div class="q-gutter-sm col-12 q-pt-md text-subtitle1">
          <q-radio
            v-model="filterProject"
            val="all"
            label="All"
            class="filter-1"
          />
          <q-radio
            v-model="filterProject"
            val="first"
            label="Solar Panels"
            class="filter-1"
          />
          <q-radio
            v-model="filterProject"
            val="second"
            label="Wind Turbines"
            class="filter-1"
          />
          <q-radio
            v-model="filterProject"
            val="third"
            label="Hydropower Plants"
            class="filter-1"
          />
        </div>
      </div>
    </q-intersection>

    <div class="row flex flex-center">
      <div class="col-1"></div>
      <div class="col-10">
        <q-intersection
          transition="slide-up"
          :transition-duration="300"
          once
          class="intersection-450"
        >
          <transition-group
            :key="transitionKey"
            appear
            enter-active-class="animated zoomIn slow"
            leave-active-class="animated zoomOut"
            tag="div"
            class="row"
          >
            <div
              v-for="(project, index) in filterProjects"
              :key="index"
              class="col-lg-4 col-md-6 col-sm-12 flex flex-center"
            >
              <CardProjects
                :img-project="project.imgProject"
                :view-project="project.viewProject"
                :title-card="project.titleCard"
                :description-card="project.descriptionCard"
              />
            </div>
          </transition-group>
        </q-intersection>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>
