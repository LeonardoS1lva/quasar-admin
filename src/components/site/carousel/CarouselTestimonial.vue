<template>
  <div class="col-10 q-pb-xl">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      transition-duration="1000"
      swipeable
      animated
      infinite
      ref="carousel"
      min-height="300px"
      class="rounded-borders"
    >
      <q-carousel-slide
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :name="index + 1"
        class="column no-wrap flex-center"
      >
        <div
          class="my-card flex-center content-center text-center avatar-container"
        >
          <q-avatar size="100px">
            <img :src="testimonial.img" alt="avatar" />
          </q-avatar>
          <q-avatar
            size="40px"
            font-size="20px"
            color="positive"
            text-color="white"
            icon="fa fa-quote-left"
            class="quote-icon"
          />
        </div>
        <div class="text-center">
          <q-card class="my-card shadow-card bg-white border-10" flat>
            <q-card-section>
              <h6 class="text-grey-6 no-margin text-center text-weight-regular">
                {{ testimonial.lorem }}
              </h6>
            </q-card-section>
            <q-card-section class="q-pt-sm q-pb-none">
              <h5 class="text-h6 no-margin">
                {{ testimonial.name }}
              </h5>
            </q-card-section>
            <q-card-section class="q-pa-none">
              <h6 class="text-italic text-subtitle1 text-grey-6 no-margin">
                {{ testimonial.profession }}
              </h6>
            </q-card-section>
          </q-card>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="bottom"
          :offset="[18, 18]"
          class="q-gutter-x-xl"
        >
          <q-btn
            flat
            rounded
            color="orange"
            text-color="positive"
            icon="fa fa-arrow-left"
            size="xl"
            padding="5px 30px"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            flat
            rounded
            text-color="positive"
            icon="fa fa-arrow-right"
            size="xl"
            padding="5px 30px"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import img1 from "src/assets/site/img/avatar/avatar1.png";
import img2 from "src/assets/site/img/avatar/avatar2.png";
import img3 from "src/assets/site/img/avatar/avatar3.png";

export default {
  setup() {
    const testimonials = ref([
      {
        img: img1,
        lorem:
          "Lorem ipsum dolor, sit amet consetetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
        name: "Client Name",
        profession: "Profession",
      },
      {
        img: img2,
        lorem:
          "Lorem ipsum dolor, sit amet consetetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
        name: "Client Name",
        profession: "Profession",
      },
      {
        img: img3,
        lorem:
          "Lorem ipsum dolor, sit amet consetetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
        name: "Client Name",
        profession: "Profession",
      },
    ]);

    return {
      slide: ref(1),
      testimonials,
    };
  },
};
</script>

<style scoped>
.my-card {
  width: 650px;
  min-height: 200px;
}

.avatar-container {
  position: relative;
}

.quote-icon {
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
