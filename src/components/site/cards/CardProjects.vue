<template>
  <q-card class="my-card border-10 q-my-lg" flat>
    <img :src="imgProject" style="height: 250px" />
    <div class="absolute-center bg-blue-grey-10 menu-slide">
      <div class="flex flex-center full-height opacity-animation">
        <q-btn
        :href="viewProject"
        target="_blank"
        outline
        round
        icon="visibility"
        color="white"
        class="q-mr-md"
        />
        <q-btn :href="linkProject" outline round icon="link" color="white" />
      </div>
    </div>

    <q-card-section>
      <h5 class="text-positive text-weight-light no-margin">
        {{ titleCard }}
      </h5>
    </q-card-section>

    <div class="q-px-md">
      <q-separator />
    </div>

    <q-card-section class="text-h6 q-pt-sm">
      {{ descriptionCard }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    viewProject: {
      type: String,
      default: "https://cdn.quasar.dev/img/mountains.jpg",
    },
    linkProject: {
      type: String,
      default: "#",
    },
    imgProject: {
      type: String,
      default: "https://cdn.quasar.dev/img/mountains.jpg",
    },
    titleCard: {
      type: String,
      default: "Project Title",
    },
    descriptionCard: {
      type: String,
      default: "We Are pioneers of solar & renewable energy industry",
    },
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px

.menu-slide
  top: 125px
  z-index: 1
  opacity: 0
  width: 0
  height: 250px
  transition: width .5s ease, opacity .5s ease

.my-card:hover .menu-slide
  opacity: 1
  width: 100%

.opacity-animation
  opacity: 0
  transition: opacity .5s ease

.my-card:hover .opacity-animation
  opacity: 1

</style>
