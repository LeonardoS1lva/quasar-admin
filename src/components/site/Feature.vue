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
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <div class="row justify-center q-pb-lg">
        <div v-for="(feature, index) in features" :key="index" class="col-md-3 col-sm-6">
          <q-intersection
            :transition="`scale`"
            :transition-duration="250 * (index + 1)"
            once
            class="intersection-260"
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
    </div>
    <div class="col-1"></div>
  </div>
</template>
