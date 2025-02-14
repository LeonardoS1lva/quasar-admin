<script setup>
import CardTimeComponent from "./cards/CardTimeComponent.vue";
</script>

<template>
  <!-- Section Team Start -->
  <section class="q-py-xl">
    <h6 class="text-center q-mb-sm">Team member</h6>
    <h1 class="q-mb-xl q-mt-md text-center">Experienced Team Members</h1>
    <div class="card-time-container justify-center">
      <CardTimeComponent />
      <CardTimeComponent />
      <CardTimeComponent />
    </div>
  </section>
  <!-- Section Team End -->
</template>

<style scoped>
.card-time-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
