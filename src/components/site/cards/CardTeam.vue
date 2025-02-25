<template>
  <q-card class="border-10 shadow-card" flat>
    <q-card-section class="row q-pa-none">
      <!-- Image Team Member -->
      <img
        :src="image"
        alt="Image Team."
        style="width: 80%"
        class="border-top-right-70 border-top-left-10"
      />
      <div
        class="column items-center justify-end q-gutter-y-md"
        style="width: 20%"
      >
        <!-- Social -->
        <q-btn
          v-for="(button, index) in socialButtons"
          :key="index"
          outline
          round
          color="positive"
          :icon="button.icon"
          padding="md"
          size="xs"
        />
      </div>
    </q-card-section>
    <q-card-section>
      <!-- About Person -->
      <h5 class="q-my-sm">
        <strong>{{ name }}</strong>
      </h5>
      <span class="text-grey-6 text-subtitle1">{{ designation }}</span>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    facebookLink: {
      type: String,
      required: true,
    },
    instagramLink: {
      type: String,
      required: true,
    },
    twitterLink: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },

  computed: {
    socialButtons() {
      return [
        {
          icon: "fab fa-facebook-f",
            link: this.facebookLink,
        },
        {
          icon: "fab fa-twitter",
            link: this.twitterLink,
        },
        {
          icon: "fab fa-instagram",
            link: this.instagramLink,
        },
      ];
    },
  },
};
</script>
