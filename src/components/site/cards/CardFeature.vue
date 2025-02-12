<template>
  <q-card class="my-card" flat>
    <q-card-section>
      <div class="flex flex-center">
        <q-avatar :icon="icon" color="positive" text-color="white" size="xl" />
        <h3 class="q-mx-md text-bold">{{ number }}</h3>
      </div>
      <p class="text-h6">{{ title }}</p>
      <span class="text-grey-7">{{ description }}</span>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CardFeature",
  props: {
    icon: {
      type: String,
      default: "fa fa-users",
    },
    number: {
      type: Number,
      default: 3453,
    },
    title: {
      type: String,
      default: "Happy Customers",
    },
    description: {
      type: String,
      default: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
