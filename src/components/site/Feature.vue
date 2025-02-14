<script setup>
import CardFeature from "./cards/CardFeature.vue";

const features = [
  {
    icon: "fa fa-users",
    number: 3453,
    title: "Happy Customers",
    description: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
  },
  {},
  {},
  {},
];
</script>

<template>
  <div class="flex flex-center q-pa-md">
    <div v-for="(feature, index) in features" :key="index">
      <q-intersection
        :transition="`scale`"
        :transition-duration="250 * (index + 1)"
        once
      >
        <CardFeature
          v-if="feature.icon"
          :icon="feature.icon"
          :number="feature.number"
          :title="feature.title"
          :description="feature.description"
        />
        <CardFeature v-else />
      </q-intersection>
    </div>
  </div>
</template>
