<template>
  <q-card class="my-card" flat bordered>
    <q-img :src="imgCard" style="height: 200px;" />

    <q-card-section>
      <q-btn
        fab
        color="white"
        :icon="iconCard"
        class="absolute"
        text-color="positive"
        style="top: 0; left: 12px; transform: translateY(-50%)"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis q-pt-md">
          {{ titleCard }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey">
        {{ descriptionCard }}
      </div>
    </q-card-section>

    <q-separator />

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
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
