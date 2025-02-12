<script setup lang="ts">
import CardProjects from "./cards/CardProjects.vue";
</script>

<template>
  <div>
    <div class="row text-center q-py-lg">
      <h6 class="no-margin text-positive col-12">Our Services</h6>
      <div class="col-3"></div>
      <h3 class="no-margin col-6">
        We Are Pioneers In The World Of Renewable Energy
      </h3>
      <div class="col-3"></div>
    </div>
    <div class="row q-col-gutter-lg">
      <div class="col-2"></div>
      <div class="col-8 row">
        <div class="col">
          <CardProjects />
        </div>
        <div class="col">
          <CardProjects />
        </div>
        <div class="col">
          <CardProjects />
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-2"></div>
      <div class="col-8 row">
        <div class="col">
          <CardProjects />
        </div>
        <div class="col">
          <CardProjects />
        </div>
        <div class="col">
          <CardProjects />
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
