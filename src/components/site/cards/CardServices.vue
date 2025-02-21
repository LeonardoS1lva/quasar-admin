<template>
  <q-card class="my-card border-10 hover-card" flat>
    <q-img :src="imgCard" style="height: 250px;" />

    <q-card-section class="q-pt-none">
      <q-avatar
        :color="bgIcon"
        :text-color="iconColor"
        :icon="iconCard"
        size="100px"
        class="shadow-2 absolute avatar-icon"
        style="top: 0; left: 12px; transform: translateY(-50%)"
      />

      <div class="row no-wrap items-center q-pt-xl">
        <div class="col ellipsis q-pt-md text-h5">
          {{ titleCard }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey">
        {{ descriptionCard }}
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn flat no-caps color="positive">
        {{ labelButton }}
        <q-icon name="chevron_right" />
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    imgCard: {
      type: String,
      default: "https://cdn.quasar.dev/img/parallax1.jpg",
    },
    titleCard: {
      type: String,
      default: "Card Title",
    },
    descriptionCard: {
      type: String,
      default: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    },
    labelButton: {
      type: String,
      default: "Read more",
    },
    iconCard: {
      type: String,
      default: "star",
    },
    bgIcon: {
      type: String,
      default: "white",
    },
    iconColor: {
      type: String,
      default: "positive",
    },
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px

.hover-card:hover .avatar-icon
  background-color: var(--q-positive) !important
  color: white !important
</style>
